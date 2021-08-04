import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


// Axios
import VueAxios from 'vue-axios'
import axios from 'axios'
Vue.use(VueAxios,axios)
Vue.use(VueSwal)

// Buefy
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
Vue.use(Buefy)

//swal
import VueSwal from 'vue-swal'
Vue.use(VueSwal)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
