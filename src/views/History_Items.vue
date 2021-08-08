<template>
  <div class="items">
    <h1>Items History</h1>
    <div v-if="itemsDummy.length>0">
      <div v-for="(item, index) in itemsDummy" :key="index">
          <got-item-card :itemInput="item"></got-item-card>
      </div>
    </div>
  </div>
</template>

<script>
import DataUsersAPI from "@/store/DataUsersAPI"
import AuthUser from '@/store/AuthUser'
import ItemApiStore from '@/store/ItemApi'
import GotItemCard from '../components/GotItemCard.vue'
export default {
  components: {
    GotItemCard
  },
  data() {
      return {
          user: "",
          itemsDummy: [],
      }
  },
  created(){
    this.getNowUser()
    this.fetchDataUserByName()
  },
  methods:{
    async fetchDataUserByName() {
      let payload = {
        id: this.user.id,
        username: this.user.username
      }
      await DataUsersAPI.dispatch('fetchDataUserByName',payload)
      this.user = DataUsersAPI.getters.dataUsers
      await this.getItemData()
    },
    async getItemData(){
      this.itemsDummy = []
      for(let i=this.user.history_buys.length-1; i>=0; i--){
        let e = this.user.history_buys[i]
        let payload = {
          item: "",
          amount: 0,
          point_receive: 0,
          price_all:0,
          date: "",
        }
        payload.item= await ItemApiStore.dispatch("fetchItemById", e.item)
        payload.amount = e.Amount
        payload.point_receive = e.point_receive
        payload.price_all = e.price_all
        payload.date = e.date
        this.itemsDummy.push(payload)
      }
      console.log(this.itemsDummy);
    },
    getNowUser(){
      this.user = AuthUser.getters.user
    }
  }
}

</script>

<style>

</style>
