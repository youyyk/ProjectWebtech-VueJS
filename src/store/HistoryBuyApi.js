import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

let api_endpoint = process.env.VUE_APP_POKEDEX_ENDPOINT || "http://localhost:1337"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: []
  },

  getters: {
    history_buys: (state) => state.data,
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
    async fetchHistory({ commit }){
        let res = await Axios.get(api_endpoint + '/history-buys')
        commit('fetch',{res})
    },
    async updateNewHistory({commit}, payload){
        let res = await Axios.post(api_endpoint + '/history-buys', payload)
        commit('add', {res})
    }
  },
  modules: {
  }
})
