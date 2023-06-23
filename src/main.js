import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import 'bootstrap'
import './assets/css/styles.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { faPlus, faBars, faChevronUp, faCaretSquareRight, faPrint, faArrowLeft, faQuestion, faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import DefaultLayout from './layouts/Default.vue'
import NoSideBarLayout from './layouts/NoSideBar.vue'
 
library.add(faStar)
library.add(faPlus, faBars, faChevronUp, faCaretSquareRight, faPrint, faArrowLeft, faQuestion, faCodeBranch)
library.add(faFacebookF, faTwitter, faLinkedinIn)
 
Vue.component('font-awesome-icon', FontAwesomeIcon)
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.component('default-layout', DefaultLayout)
Vue.component('no-sidebar-layout', NoSideBarLayout)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
