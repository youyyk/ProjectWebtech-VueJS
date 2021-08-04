import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

let api_endpoint = process.env.VUE_APP_POKEDEX_ENDPOINT || "http://localhost:1337"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      data: [],
  },
  getters:{
    awards: (state) => state.data,
  },
  mutations: {
    fetch(state, { res }){
        state.data = res.data
    },
  },
  actions: {
    async fetchAward({ commit }){
      let res= await Axios.get(api_endpoint + "/awards")

      commit('fetch', { res })
    }
  },
  modules: {
  }
})
