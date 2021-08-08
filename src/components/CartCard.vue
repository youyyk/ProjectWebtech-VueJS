<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="getImage(itemInput.picture[0].url)" alt="Placeholder image">
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
          <input class="input" type="text" v-model="inputNum">
          <b-button class="calNum" type="is-success" v-on:click="increase">+</b-button>
          <b-button class="calNum" type="is-danger" v-on:click="decrease">-</b-button>
        </div>
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
import HistoryBuyApi from '@/store/HistoryBuyApi'
export default {
  props:{
    itemInput: Object
  },
  data() {
      return {
        inputNum: 1
      }
  },
  methods:{
    increase(){
      this.inputNum++
    },
    decrease(){
      this.inputNum--
    },
    async confirmItem(){
      //User
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
        point_now: (user.point_now + ((this.itemInput.price * this.inputNum)* 0.02))
      }
      await AuthUser.dispatch("updateItem", payload)

      //historyBuy
      var today = new Date();
      var dateLocal = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

      let historyPayload= {
        name_item: this.itemInput.name,
        price_all: this.itemInput.price * this.inputNum,
        point_receive: this.itemInput.price * 0.02,
        date: dateLocal,
        amount: this.inputNum,
        name_user: user.username
      }
      await HistoryBuyApi.dispatch("updateNewHistory", historyPayload)

      location.reload();
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
  height: 560px;
  position: relative;
  float: left;
  margin-left: 47px;
}
.calNum{
  width: 25px;
  height: 30px;
  margin-bottom: 10px;
  margin-left: 5px;
}
.input{
  width: 100px;
  height: 30px;
}
</style>