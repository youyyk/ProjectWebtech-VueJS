<template>
  <div class="reward">
    <h1>Reward</h1>
    <div v-for="(reward, index) in rewardsDummy" :key="index">
      <reward-card v-if="reward.status && reward.stock > 0" :rewardInput="reward"></reward-card>
    </div>
  </div>
</template>

<script>
import RewardApiStore from '@/store/AwardApi'
import RewardCard from '../components/RewardCard.vue'
export default {
  components: {
    RewardCard
  },
  data() {
      return {
          rewardsDummy:[]
      }
  },
  created(){
    this.fetchRewards()
  },
  methods:{
    async fetchRewards(){
      await RewardApiStore.dispatch('fetchAwards')
      this.rewardsDummy = RewardApiStore.getters.awards
    }
  }
}

</script>

<style>

</style>
