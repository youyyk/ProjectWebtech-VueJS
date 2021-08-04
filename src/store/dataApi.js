import Vue from 'vue'
import Vuex from 'vuex'

let api_endpoint = 'http://localhost:1337/admin/plugins/content-manager/collectionType/application::data-users.data-users?page=1&pageSize=10&_sort=name:ASC'
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
        let res = await axios.get(api_endpoint)
        commit('fetch',{res})
    }
  },
  modules: {
  }
})
