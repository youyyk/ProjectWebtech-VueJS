import Vue from 'vue'
import Vuex from 'vuex'

let api_endpoint = process.env.VUE_APP_POKEDEX_ENDPOINT || "http://localhost:1337"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: []
  },

  getters: {
    signUps: (state) => state.data,
  },

  mutations: {
    fetch(state, { res }) {
        state.data = res.data
    },
    add(state, { payload }) {
        state.data.push(payload)
    },
  },
  actions: {
    async fetchPokemon ({ commit }){
        let res = await axios.get(api_endpoint + '/users')
        commit('fetch',{res})
    }
  },
  modules: {
  }
})
