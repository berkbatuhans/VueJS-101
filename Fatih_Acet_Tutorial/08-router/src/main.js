import Vue from 'vue'
//Step 1
import VueRouter from 'vue-router'
//Step 2
Vue.use(VueRouter);
import App from './App.vue'
//Step 4
import Home from './components/Home.vue'
import UserProfile from './components/UserProfile.vue'
import UserPosts from './components/UserPosts.vue'

//Step 3
const router = new VueRouter({
  routes:[
    { path: '/', component: Home, name: 'home' },
    { path: '/User/:id', component: UserProfile, name: 'userProfile' },
    { path: '/User/:userId/posts', component: UserPosts, name: 'posts' }
  ],
  mode: 'history'
})

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
