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
    add (state, payload){
      state.data.push(payload)
    },
  },
  actions: {
    async fetchAwards({commit}){
      let res = await Axios.get(api_endpoint+"/awards")
      commit('fetch', {res})
      console.log("Fetch awards API")
    },
    async addAward({commit},payload){
      let url = api_endpoint+"/awards"
      let body = {
        name: payload.name,
        point: payload.point,
        stock: payload.stock,
        status: payload.status
      }
      let res = await Axios.post(url,body)
      console.log("Add award");
      console.log(res.data)
      commit("add", res.data)
    },
    async editAward({commit}, payload){
      let url = api_endpoint+"/awards/"+(payload.index+1)
      let body = {
        name: payload.name,
        point: payload.point,
        stock: payload.stock,
        status: payload.status
      }
      let res = await Axios.put(url, body)
      console.log("Edit award");
      console.log(res.data)
    },
  },
  modules: {
  }
})
