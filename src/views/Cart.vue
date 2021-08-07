<template>
    <div class="cart">
    <h1>Item in Cart</h1>
    <div v-for="(item, index) in itemsDummy" :key="index">
      <cart-card v-if="item.status" :itemInput="item"></cart-card>
    </div>
  </div>
</template>

<script>
import CartCard from '@/components/CartCard'
import UserService from '@/services/UserService'
import AuthUser from '@/store/AuthUser'
export default {
  components: { 
    CartCard
  },
  data() {
      return {
          itemsDummy: []
      }
  },
  created(){
    this.fetchItems()
  },
  methods:{
    async fetchItems(){
        let user = await UserService.getUserById(AuthUser.getters.user.id)
        this.itemsDummy = user.items
    }
  }
}
</script>

<style lang="scss">

</style>