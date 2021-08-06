<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
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
            <b-button type="is-success">Add to Cart</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    itemInput: Object
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
  height: 540px;
  position: relative;
  float: left;
  margin-left: 47px;
}
</style>