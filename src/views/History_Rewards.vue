<template>
  <div class="reward">
    <h1>Your Rewards History</h1>
    <div v-for="(reward, index) in rewardsDummy" :key="index">
      <got-reward-card :rewardInput="reward"></got-reward-card>
    </div>
  </div>
</template>

<script>
import GotRewardCard from '../components/GotRewardCard.vue'
import AuthUser from '@/store/AuthUser'
import HistoryRewardApi from '@/store/HistoryRewardApi'
export default {
  components: {
    GotRewardCard
  },
  data() {
      return {
          user: "",
          rewardsDummy:[],
      }
  },
  created(){
    this.getNowUser()
    this.getHistoryData()
  },
  methods:{
    async getHistoryData(){
      await HistoryRewardApi.dispatch("fetchHistory")
      let payload = HistoryRewardApi.getters.history_rewards
      
      for(let i = payload.length-1 ; i >= 0; i--){
        if(payload[i].name_user === this.user.username){
          this.rewardsDummy.push(payload[i])
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
