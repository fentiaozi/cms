import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import about from '../views/about.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '/',
    component: Index,
    meta: {
      title: "首页"
    }
  },
  {
    path: '/home',
    name: 'Index',
    component: Index,
    meta: {
      title: "首页"
    }
  },
  {
    path: '/about',
    name: 'about',
    component: about,
    meta: {
      title: "about"
    }
  },
]

const router = new VueRouter({
  routes
})

export default router
