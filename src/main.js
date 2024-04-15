import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import './styles.css'

import secondaryNav from './components/secondary-nav.vue'

Vue.component('sec-nav', secondaryNav)

Vue.config.productionTip = false



new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
