<template>
  <div class="items">
    <h1>Your Items History</h1>
    <div v-if="itemsDummy.length>0">
      <div v-for="(item, index) in itemsDummy" :key="index">
          <got-item-card :itemInput="item"></got-item-card>
      </div>
    </div>
  </div>
</template>

<script>
import AuthUser from '@/store/AuthUser'
import GotItemCard from '../components/GotItemCard.vue'
import HistoryBuyApi from '@/store/HistoryBuyApi'
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
    this.getHistoryData()
  },
  methods:{
    async getHistoryData(){
      // เรียก history buy เช็คกับชื่อ user
      await HistoryBuyApi.dispatch("fetchHistory")
      let payload = HistoryBuyApi.getters.history_buys
      
      for(let i = payload.length-1 ; i >= 0; i--){
        if(payload[i].name_user === this.user.username){
          this.itemsDummy.push(payload[i])
        }
      }
    },
    getNowUser(){
      this.user = AuthUser.getters.user
    }
  }
}

</script>

<style>

</style>
