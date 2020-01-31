
import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
// import Vuex from 'vuex'
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// import mavonEditor from 'mavon-editor'
// import 'mavon-editor/dist/css/index.css'
var oAxios= require('./utils/request');
Vue.prototype.$get=oAxios.get;
Vue.prototype.$post=oAxios.post;
Vue.prototype.$deletes=oAxios.delete;
Vue.prototype.$put=oAxios.put;
// Vue.use(mavonEditor);
// Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.use(oAxios)

new Vue({
  router,
  // store,
  render: h => h(App),
  data() {
    return { value: '' }
  }
}).$mount('#app')
