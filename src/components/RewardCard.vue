<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{{ rewardInput.name }}</p>
        </div>
      </div>
      <div class="content">
        Stock: {{ rewardInput.stock }} | Point: {{ rewardInput.point }}
        <br>
        <br>
        <b-button @click="getReward()" v-if="isAuthen()" type="is-success">Get Reward</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import AuthUser from "@/store/AuthUser"
import HistoryRewardApi from '@/store/HistoryRewardApi'
import AwardApi from '@/store/AwardApi'
import UserService from '@/services/UserService'
export default {
  props:{
    rewardInput: Object
  },
  data() {
      return {
        user: '',
        point_now: ''
      }
  },
  methods:{
    isAuthen(){
      return AuthUser.getters.isAuthen
    },
    async getReward(){
      this.user = AuthUser.getters.user
      let userBySevice = await UserService.getUserById(AuthUser.getters.user.id)
      this.point_now = userBySevice.point_now

      if(this.point_now >= this.rewardInput.point){
        var today = new Date();
        var dateLocal = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

        let historyRewardPayload= {
          name_user: this.user.username,
          name_award: this.rewardInput.name,
          date: dateLocal,
          point: this.rewardInput.point
        }

        this.point_now -= this.rewardInput.point
        let payload = {
          id: this.user.id,
          items: this.user.items,
          point_now: this.point_now
        }
        
        let rewardPayload= {
          id: this.rewardInput.id,
          name: this.rewardInput.name,
          point: this.rewardInput.point,
          stock: this.rewardInput.stock-1,
          status: this.rewardInput.status
        }

        await AuthUser.dispatch("updatePoint", payload)
        await HistoryRewardApi.dispatch("updateNewHistory", historyRewardPayload)
        await AwardApi.dispatch("editAward", rewardPayload)
        await this.$swal("Got reward!!!","","success")

        location.reload()
      }
      else{
        this.$swal('Not enough point', '', 'error')
      }
    }
  }
}
</script>

<style scoped lang="scss">
.card{
  margin: 20px;
  width: 400px;
  height: 190px;
  position: relative;
  float: left;
  margin-left: 47px;
}
</style>