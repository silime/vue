import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home.vue'
import Welcome from '../components/welcome.vue'
import Pay from '../components/pay.vue'
import User from '../components/user.vue'
import Login from '../components/login.vue'
import List from '../components/good/List.vue'
import Add from '../components/good/Add.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    redirect: '/login',
    children: [{
      path: '/welcome',
      component: Welcome
    },
    {
      path: '/pay',
      component: Pay
    },
    {
      path: '/user',
      component: User
    }
    ]
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/list',
    component: List
  },
  {
    path: '/add',
    component: Add
  }
]

const router = new VueRouter({
  routes
})

export default router
