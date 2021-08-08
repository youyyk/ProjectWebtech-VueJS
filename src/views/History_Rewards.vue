<template>
  <div class="reward">
    <h1>Rewards History</h1>
    <div v-for="(reward, index) in rewardsDummy" :key="index">
      <got-reward-card :rewardInput="reward"></got-reward-card>
    </div>
  </div>
</template>

<script>
import GotRewardCard from '../components/GotRewardCard.vue'
import DataUsersAPI from "@/store/DataUsersAPI"
import AuthUser from '@/store/AuthUser'
import RewardApiStore from '@/store/AwardApi'
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
      await this.getRewardData()
    },
    async getRewardData(){
      this.rewardsDummy = []
      for(let i=this.user.history_awards.length-1; i>=0; i--){
        let e = this.user.history_awards[i]
        let payload = {
          reward: "",
          date: ""
        }
        payload.reward = await RewardApiStore.dispatch("fetchAwardById",e.award)
        payload.date = e.date
        this.rewardsDummy.push(payload)
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
