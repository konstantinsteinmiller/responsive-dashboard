import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/styles/base.styl'
import '@/../node_modules/highlight.js/styles/mono-blue.css'

import VueHighlightJS from 'vue-highlightjs'

Vue.use(VueHighlightJS)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
