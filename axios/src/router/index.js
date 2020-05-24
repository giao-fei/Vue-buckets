import Vue from 'vue'
import VueRouter from 'vue-router'
<<<<<<< HEAD

Vue.use(VueRouter)

=======
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]
>>>>>>> cb33a67f16f0053b5a66656377700fbcfa6090f8

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
<<<<<<< HEAD
=======
  routes
>>>>>>> cb33a67f16f0053b5a66656377700fbcfa6090f8
})

export default router
