import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets

import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/ja'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'

import Cookies from 'js-cookie'

// var firebaseConfig = {
//   apiKey: "AIzaSyDHbg4dBJ_Oj7rk_XlMYNz6uU2VanANvhI",
//   authDomain: "harry-267308.firebaseapp.com",
//   databaseURL: "https://harry-267308.firebaseio.com",
//   projectId: "harry-267308",
//   storageBucket: "harry-267308.appspot.com",
//   messagingSenderId: "64482314410",
//   appId: "1:64482314410:web:eaa2320dacf4b9a76928d3",
//   measurementId: "G-WDQ5FX2V76"
// };

Vue.use(Element, {
  locale,
  size: Cookies.get('size') || 'medium' // set element-ui default size
})

console.log(process.env.VUE_APP_FIREBASE_API_KEY)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
