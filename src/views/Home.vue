<template>
  <div class="home">
    <ads-slide></ads-slide>
    {{ currentdate }}
    <div v-for="(item, index) in itemsDummy" :key="index">
      <item-card v-if="item.status" :itemInput="item"></item-card>
    </div>
  </div>
</template>

<script>
import AuthUser from '@/store/AuthUser'
import UserService from '@/services/UserService'
import ItemApiStore from '@/store/ItemApi'
import AdsSlide from '../components/AdsSlide.vue'
import ItemCard from '../components/ItemCard.vue'
export default {
  components: { 
    ItemCard,
    AdsSlide
  },
  data() {
      return {
        pictureDummy: [],
        itemsDummy: [],
        currentdate: '',
      }
  },
  created(){
    this.fetchItems()
  },
  methods:{
    async fetchItems(){
      await ItemApiStore.dispatch('fetchItems')
      this.itemsDummy = ItemApiStore.getters.items
    },
    isAuthen() {
        return AuthUser.getters.isAuthen
    },
    isAdmin(){
      return AuthUser.getters.isAdmin
    },
  },
  async mounted(){
    if(this.isAuthen() && !this.isAdmin()){
      let today= new Date()
      let currentDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
      let x = new Date(currentDate).getTime()
      let user = await UserService.getUserById(AuthUser.getters.user.id)
      let y = new Date(user.date).getTime()
      if(x>y){
        let payload = {
          id: user.id,
          point_now: user.point_now + 1,
          date: currentDate
        }
        console.log(payload);
        await AuthUser.dispatch('updateDate', payload)
        await AuthUser.dispatch('updatePoint', payload)
        this.$swal("Check In Received 1 Point", `Now point ${user.point_now+1}`, "success")
      }
    }
  }
}
</script>

<style lang="scss">
.bg{
  background-color: lightslategrey;
}
</style>
