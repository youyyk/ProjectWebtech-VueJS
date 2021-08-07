<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
        </div>
        <div class="media-content">
          <p class="title is-4">{{itemInput.name}}</p>
        </div>
      </div>
      <div class="content">
        <div>{{itemInput.explain}}</div>
        <br>
        <div>{{itemInput.price}} Bath</div>
        <br>
        <div>
            <b-button @click="confirmItem()" type="is-success">Confirm</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserService from '@/services/UserService'
import AuthUser from '@/store/AuthUser'
export default {
  props:{
    itemInput: Object
  },
  data() {
      return {
 
      }
  },
  methods:{
    async confirmItem(){
      let user = await UserService.getUserById(AuthUser.getters.user.id)
      let item = user.items
      for(let i = 0; i < item.length; i++){
        if(item[i].id === this.itemInput.id){
            item.splice(i, 1)
        }
      }
      let payload= {
        id: user.id,
        items: item,
        point_now: (user.point_now + (this.itemInput.price * 0.02))
      }
      await AuthUser.dispatch("updateItem", payload)

      location.reload();

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
</style>