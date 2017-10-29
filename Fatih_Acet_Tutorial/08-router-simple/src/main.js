import Vue from 'vue'
//Step 1
import VueRouter from 'vue-router'

//Step 2
Vue.use(VueRouter);

import App from './App.vue'
//Step 3
import Home from './components/Home.vue'
import Foo from './components/Foo.vue'
import Bar from './components/Bar.vue'

//Step 4

//Step 8 linkteki # kaldırmak için mode: 'history' ekliyoruz.
const router = new VueRouter({
  routes:[
    {path: '/', component: Home },
    {path: '/foo', component: Foo },
    {path: '/bar', component: Bar }
  ],
  mode: 'history'
})

//Step 5
//router: router yada router şeklinde direk olarak tanımlanabilir.
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
