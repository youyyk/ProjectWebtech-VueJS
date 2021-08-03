<template>
  <div class="reward">
    <h1>Reward</h1>
    <div v-for="(reward, index) in rewardsDummy" :key="index">
      <reward-card :rewardInput="reward"></reward-card>
    </div>
  </div>
</template>

<script>
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
            },
            {
              name: "F",
              point: 300,
              stock: 5
            },
            {
              name: "G",
              point: 50,
              stock: 15
            },
            {
              name: "H",
              point: 250,
              stock: 20
            }
          ]
      }
  }
}

</script>

<style>

</style>
