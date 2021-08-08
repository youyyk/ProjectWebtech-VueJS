<template>
  <div class="reward">
    <h1>Reward</h1>
    <h1>Your Point {{ this.user.point_now
       }}</h1>  
    <div v-for="(reward, index) in rewardsDummy" :key="index">
      <reward-card v-if="reward.status && reward.stock > 0" :rewardInput="reward"></reward-card>
    </div>
  </div>
</template>

<script>
import AuthUser from '@/store/AuthUser'
import RewardApiStore from '@/store/AwardApi'
import RewardCard from '../components/RewardCard.vue'
export default {
  components: {
    RewardCard
  },
  data() {
      return {
        rewardsDummy:[],
        user: ''
      }
  },
  created(){
    this.getNowUser()
    this.fetchRewards()
  },
  methods:{
    async fetchRewards(){
      await RewardApiStore.dispatch('fetchAwards')
      this.rewardsDummy = RewardApiStore.getters.awards
    },
    getNowUser(){
      this.user = AuthUser.getters.user
    }
  }
}

</script>

<style>

</style>
