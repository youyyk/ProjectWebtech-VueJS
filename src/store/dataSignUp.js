import Vue from 'vue'
import Vuex from 'vuex'

let api_endpoint = ''
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
    fetchPokemon ({ commit }){
        let res = {
            data: [
                {
                    user: 'baitoey',
                    password: '1234',
                    confirmPass: '1234'
                },
                {
                    user: 'you',
                    password: '5678',
                    confirmPass: '5678'
                },
                {
                    user: 'oof',
                    password: '9012',
                    confirmPass: '9012'
                },
            ],
        }
        let res = await axios.get(api_endpoint)
        commit('fetch',{res})
    }
  },
  modules: {
  }
})
