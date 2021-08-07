import Vue from 'vue'
import Vuex from 'vuex'
import AuthService from '@/services/AuthService'

Vue.use(Vuex)

let auth_key = "auth-home"
let auth = JSON.parse(localStorage.getItem(auth_key))

const initialState = {
    user: auth ? auth.user : "",
    jwt: auth ? auth.jwt : "",
    isAuthen :auth ? true : false,
    isAdmin: false
}

export default new Vuex.Store({
  state: initialState,
  mutations: {
      loginSuccess(state, user, jwt){
        state.user = user
        state.jwt = jwt
        state.isAuthen = true
      },
      logoutSuccess(state){
        state.user = ""
        state.jwt = ""
        state.isAuthen = false
      },
      update(state, data){
        state.user.items = data
      }
  },
  actions: {
      async login({commit}, { user, password }){
          let res = await AuthService.login({user,password})
          if(res.success){
              commit('loginSuccess', res.user, res.jwt, res.type) // type true=admin false=user
          }
          return res
      },
      async logout({commit}){
        AuthService.logout()
        commit('logoutSuccess')
      },
      async signUp({commit}, {username, email, password}){
          let res = await AuthService.signUp({ username, email, password})
          if(res.success){
              commit("loginSuccess", res.user, res.jwt)
          }
          return res
      },
      async updateItem({commit}, payload){
        let res = await AuthService.updateItem(payload)
        if(res.success){
          commit("update", payload)
        }
        return res
      }
  },
  getters:{
    user:(state) => state.user,
    jwt: (state) => state.jwt,
    isAuthen: (state) => state.isAuthen,
  },
  modules: {

  }
})