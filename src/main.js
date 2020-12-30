import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Router from './router'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueRouter);

const router = new VueRouter({
  routes: Router
});

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
