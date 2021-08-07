<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="getImage(itemInput.picture[0].url)" alt="Placeholder image">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title">{{itemInput.name}}</p>
        </div>
      </div>
      <div class="content">
        <div class="text">{{itemInput.explain}}</div>
        <br>
        <div class="text">{{itemInput.price}} Bath</div>
        <br>
        <div>
            <b-button v-if="isAuthen()" @click="AddItemtoCart()" type="is-success">Add to Cart</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AuthUser from "@/store/AuthUser"
import UserService from '@/services/UserService'
export default {
  props:{
    itemInput: Object
  },
  data() {
      return {
 
      }
  },
  methods:{
    isAuthen(){
      return AuthUser.getters.isAuthen
    },
    async AddItemtoCart(){
      let user = await UserService.getUserById(AuthUser.getters.user.id)
      let item = user.items
      let formItem = {
        id: this.itemInput.id,
        name: this.itemInput.name,
        price: this.itemInput.price,
        explain: this.itemInput.explain,
        status: this.itemInput.status,
        updated_at: this.itemInput.updated_at,
        created_at: this.itemInput.created_at
      }
      item.push(formItem)
      let payload = {
        id: user.id,
        items: item
      }
      await AuthUser.dispatch("updateItem", payload)
    },
    getImage(url){
      return 'http://localhost:1337' + url
    }
  }
}
</script>

<style scoped lang="scss">
.card{
  margin: 20px;
  width: 400px;
  height: 540px;
  position: relative;
  float: left;
  margin-left: 47px;
}
.media{
  padding-left: -10px;
}
</style>