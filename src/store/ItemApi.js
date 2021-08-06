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
    items: (state) => state.data,
  },
  mutations: {
    fetch(state, { res }){
        state.data = res.data
    },
    add(state, payload){
      state.data.push(payload)
    }
  },
  actions: {
    async fetchItems({ commit }){
      let res= await Axios.get(api_endpoint + "/items")
      commit('fetch', { res })
      console.log("Fetch items API");
    },
    async addItem({commit},payload){
      let url = api_endpoint+"/items"
      let body = {
        name: payload.name,
        price: payload.price,
        explain: payload.explain,
        status: payload.status
      }
      let res = await Axios.post(url,body)
      console.log("Add item");
      console.log(res.data)
      commit("add", res.data)
    },
    async editItem({commit}, payload){
      let url = api_endpoint+"/items/"+(payload.id)
      console.log(url);
      let body = {
        name: payload.name,
        price: payload.price,
        explain: payload.explain,
        status: payload.status
      }
      console.log(body);
      let res = await Axios.put(url, body)
      console.log("Edit item");
      console.log(res.data)
    },
    async deleteItem({commit},payload){
      let url = api_endpoint+"/items/"+(payload.id)
      let res = await Axios.delete(url)
      console.log("Delete item");
      console.log(res.data)
      if(res.status == 200){
        return {
          success: true
        }
      }
      return {
        success: false
      }
    }
  },
  modules: {
  }
})
