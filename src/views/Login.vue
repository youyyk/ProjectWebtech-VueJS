<template>
  <div class="login">
      <div id="FormLogin">
            <section>
                <b-field label="Email">
                    <b-input></b-input>
                </b-field>

                <b-field label="Password">
                    <b-input></b-input>
                </b-field>
            </section>
     </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    }
}
</script>

<style scoped lang="scss">
#FormLogin{
    text-align: left;
    width: 20%;
}
</style>
