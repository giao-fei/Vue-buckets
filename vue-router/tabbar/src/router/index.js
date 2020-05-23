import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
const Home = () => import('../views/home/home.vue');
const User = () => import('../views/user/user.vue');
const CartShop = () => import('../views/cartshop/cartshop.vue');
const ClassIfy = () => import('../views/classify/classify.vue');

Vue.use(VueRouter)

  const routes = [
    {
       path: '/home',
       component: Home
    },
    {
       path: '/user',
       component: User
    },
    {
       path: '/cartshop',
       component: CartShop
    },
    {
       path: '/classify',
       component: ClassIfy
    }  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
