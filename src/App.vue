<template>
  <div id="app">
    <div>
      <b-navbar>

          <template #start>
              <router-link class="navbar-item" to="/">Home</router-link>
              <router-link class="navbar-item" to="/reward">Reward</router-link>
              <router-link class="navbar-item" to="/admin/board">Admin-Board</router-link>
              <router-link class="navbar-item" to="/admin/items">Admin-Edit-Items</router-link>
              <router-link class="navbar-item" to="/admin/awards">Admin-Edit-Awards</router-link>
          </template>
          <template #end>
              <b-navbar-item tag="div">
                  <div class="buttons">
                      <!-- <div v-if="!isAuthen()">
                        <a class="button is-primary">
                        <router-link class="navbar-item"  to="/SignUp"><strong>Sign Up</strong></router-link>
                      </a>
                      </div>

                      <div v-if="!isAuthen()">
                        <a class="button is-light">
                        <router-link class="navbar-item"  to="/login"><strong>Login</strong></router-link>
                      </a>
                      </div> -->
                      <div id="icon" v-if="isAuthen()">
                        <a>
                          <i>
                              <router-link class="navbar-item"  to="/cart">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16">
                                  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                                  </svg>
                              </router-link>
                          </i>
                        </a>
                      </div>
                      
                      <div v-if="!isAuthen()">
                        <a class="button is-primary">
                        <router-link class="navbar-item"  to="/SignUp"><strong>Sign Up</strong></router-link>
                        </a>
                      </div>

                      <div v-if="!isAuthen()">
                        <a class="button is-light">
                        <router-link class="navbar-item"  to="/login"><strong>Login</strong></router-link>
                      </a>
                      </div>
                      <div v-if="isAuthen()">
                        <a class="button is-light">
                        <router-link class="navbar-item"  to="/logout"><strong>Logout</strong></router-link>
                      </a>
                      </div>
                  </div>
              </b-navbar-item>
          </template>
      </b-navbar>
    </div>
    <router-view/>
  </div>
</template>

<script>
import AuthUser from '@/store/AuthUser'
export default {
  methods:{
    isAuthen(){
      return AuthUser.getters.isAuthen
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
#icon{
    margin-top: -9px;
}
</style>
