import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import './plugins/axios'
import App from './App.vue'
import { createProvider } from './vue-apollo'
if (process.client) require('./registerServiceWorker')

Vue.config.productionTip = false

export function createApp({ router, store }) {
  return new Vue({
    router,
    store,
    provide: createProvider().provide(),
    render: h => h(App)
  });
}

export async function initApp() {}