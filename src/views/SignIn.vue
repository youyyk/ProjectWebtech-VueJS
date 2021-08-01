<template>
  <div class="signIn">
      <div id="FormSingIn">
            <section>
                <b-field label="Email">
                    <b-input></b-input>
                </b-field>

                <b-field label="Password">
                    <b-input></b-input>
                </b-field>

                <b-field label="Confirm Password">
                    <b-input></b-input>
                </b-field>
            </section>
            <br>
            <b-button type="is-success">Sign In</b-button>
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
#FormSingIn{
    text-align: left;
    width: 20%;
}
</style>
