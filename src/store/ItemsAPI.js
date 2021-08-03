import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

let api_endpoint = process.env.POKEDEX_ENDPOINT || "http://localhost:1337"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: [],
  },
  getters: {
    items: (state) => state.data
  },

  mutations: {
      fetch(state, {res}){
          state.data = res.data
      },
      add (state, payload){
          state.data.push(payload)
      },
      edit(state, index, data){
          state.data[index] = data
      }
  },

  actions: {
    async fetchItems({commit}){
        let res = await Axios.get(api_endpoint+"/items")
        commit('fetch', {res})
        console.log("Fetch items API");
    }

  },
  modules: {
  }
})
