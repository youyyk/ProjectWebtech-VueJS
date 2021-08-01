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
          <!-- <figure class="image is-48x48">
            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
          </figure> -->
        </div>
        <div class="media-content">
          <p class="title is-4">Items-01</p>
        </div>
      </div>
      <div class="content">
        Text
        <br>
        <br>
        <div>
            <b-input value="Number"></b-input><br>
            <b-button type="is-success">Add</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.card{
  margin: 20px;
  width: 400px;
  height: 560px;
}
</style>