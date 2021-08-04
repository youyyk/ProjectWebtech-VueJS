<template>
  <div class="reward">
    <h1>Reward</h1>
    <div v-for="(reward, index) in rewardsDummy" :key="index">
      <reward-card :rewardInput="reward"></reward-card>

    </div>
  </div>
</template>

<script>
import RewardApiStore from '@/store/AwardApi'
import RewardCard from '../components/RewardCard.vue'
export default {
  components: {
    AdsSlide,
    RewardCard
  },
  data() {
      return {
          rewardsDummy:[]
      }
  },
  created(){
    this.fetchReward()
  },
  methods:{
    async fetchReward(){
      await RewardApiStore.dispatch('fetchAward')
      this.rewardsDummy = RewardApiStore.getters.awards
    }
  }
}

</script>

<style>

</style>
