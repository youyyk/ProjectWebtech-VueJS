<template>
  <div class="home">
    <ads-slide></ads-slide>
    <div v-for="(reward, index) in rewardsDummy" :key="index">
      <reward-card :rewardInput="reward"></reward-card>
    </div>
    
  </div>
</template>

<script>
import AdsSlide from '../components/AdsSlide.vue'
import RewardCard from '../components/RewardCard.vue'
export default {
  components: {
    AdsSlide,
    RewardCard
  },
  data() {
      return {
          rewardsDummy:[
            {
              name: "D",
              point: 100,
              stock: 10,
            },
            {
              name: "E",
              point: 500,
              stock: 20,
            }
          ]
      }
  }
}
</script>

<style lang="scss">
</style>
