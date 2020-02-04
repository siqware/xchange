/*=========================================================================================
  File Name: main.js
  Description: main vue(js) file
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/
import Vue from 'vue'
import App from './App.vue'
// Vuesax Component Framework
import Vuesax from 'vuesax'
Vue.use(Vuesax);
// Theme Configurations
import '../themeConfig.js'

// Globally Registered Components
import './globalComponents.js'
// Vue Router
import router from './router'
// Vuex Store
import store from './store/store'
// Vuejs - Vue wrapper for hammerjs
import { VueHammer } from 'vue2-hammer'
Vue.use(VueHammer);
// PrismJS
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
//Vue Select
import vSelect from 'vue-select'
Vue.component('v-select', vSelect);
Vue.config.productionTip = false;
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
