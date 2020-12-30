import Vue from 'vue'
import App from "./App";
import {Button} from 'mint-ui'

import router from './router'
import store from './store'
import './mock/mockServer'
import VueLazyload from 'vue-lazyload'
import loading from './common/images/loading.gif'
import './filters'

Vue.component(Button.name,Button)
Vue.use(VueLazyload, {
  loading
})

new Vue({
  el : '#app',
  render : h => h(App),
  router,
  store
})
