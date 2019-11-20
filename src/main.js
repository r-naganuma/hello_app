import Vue from 'vue'
import App from './App.vue'
import router from './router' //追加

Vue.config.productionTip = false

new Vue({
  router, //追加
  render: h => h(App),
}).$mount('#app')

import jQuery from 'jquery'
global.jquery = jQuery
global.$ = jQuery
window.$ = window.jQuery = require('jquery')

// スクロール用のプラグイン
import VueObserveVisibility from 'vue-observe-visibility'
Vue.use(VueObserveVisibility)