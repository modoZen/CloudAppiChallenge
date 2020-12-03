import Vue from 'vue'
import App from './App.vue'
import router from './router'
import services from './services'
Vue.config.productionTip = false

Vue.use({
  install(Vue) {
    Object.defineProperty(Vue.prototype, "$service", {
      value: services
    })
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
