import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'

import markdown from '@/directives/markdown.js'
import markdownPreview from './directives/markdown_preview.js'

Vue.directive('markdown',markdown)
Vue.directive('markdownPreview', markdownPreview)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
