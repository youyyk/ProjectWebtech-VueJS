<template>
  <div id="app">
    <div>
      <b-navbar>
          <!-- <template #brand>
              <b-navbar-item tag="router-link" :to="{ path: '/' }">
                  <img
                      src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                      alt="Lightweight UI components for Vue.js based on Bulma"
                  >
              </b-navbar-item>
          </template> -->
          <template #start>
              <router-link class="navbar-item" to="/"><strong>Home</strong></router-link>
              <router-link class="navbar-item" to="/shop"><strong>Shop</strong></router-link>
          </template>
          <template #end>
              <b-navbar-item tag="div">
                  <div class="buttons">
                      <a class="button is-primary">
                          <router-link class="navbar-item"  to="/SignUp"><strong>Sign Up</strong></router-link>
                      </a>
                      <a class="button is-light">
                          <router-link class="navbar-item"  to="/login"><strong>Login</strong></router-link>
                      </a>
                  </div>
              </b-navbar-item>
          </template>
      </b-navbar>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

</style>
