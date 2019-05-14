import Vue from 'vue'
import App from './App'

if (process.env.VUE_APP_E2E) {
  if (window.__e2e_lib) {
    Vue.use(require('solid-vue-components').default)
  } else if (window.__e2e_components) {
    Vue.component(
      'HelloA',
      require('solid-vue-components.login-button').default
    )
  }
} else {
  // Install the plugin directly from src in development
  Vue.use(require('../src').default)
}

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
