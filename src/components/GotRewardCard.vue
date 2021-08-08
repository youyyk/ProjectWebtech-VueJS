<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{{ rewardInput.name_award }}</p>
        </div>
      </div>
      <div class="content">
        <div>Receive Date</div>
        <div class="tag is-info">{{rewardInput.date}}</div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    rewardInput: Object
  },
  data() {
      return {
 
      }
  },
  methods:{

  }
}
</script>

<style scoped lang="scss">
.card{
  margin: 20px;
  width: 400px;
  height: 170px;
  position: relative;
  float: left;
  margin-left: 47px;
}
</style>