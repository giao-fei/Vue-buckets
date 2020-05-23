import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

const About = () => import('../views/About.vue')

Vue.use(VueRouter)

const routes = [
  // 将about设为默认页面
  {
    path: '',
    redirect: '/about'
  },
  { 
    // CartName将网址后缀名添加到test文本中
    path: '/home/:CartName',
    name: 'Home',
    component: Home,
    // 路由导航守卫
    meta: {
      title: '首页'
    }
    // component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    component: About,
    meta: {
      title: '关于'
    }
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/Cart.vue'),
       // 路由嵌套
       children: [
           // 将test组件设为默认页面 
          //  {
          //     path: '',
          //     redirect: 'Test'
          //  },
           {
              path: 'HelloWorld',
              component: () => import('../components/HelloWorld.vue')
           },
           {
             path: 'Test',
             component: () => import('../components/test.vue')
           }
       ],
    meta: {
      title: '路由嵌套'
    }
  },
  // 通过代码跳转路由
  {
    path: '/coderouter/:UserName',
    component: () => import('../views/CodeRouter.vue'),
    meta: {
      title: '动态路由'
    }
  },
  // vue-router传递参数（一）
  {
    path: '/profile',
    component: () => import('../views/Profile.vue'),
    meta: {
      title: '档案'
    }
  },
  // 通过代码的形式传递参数（二）
  {
    path: '/codecords',
    component: () => import('../views/CodeCords.vue'),
    meta: {
      title: '代码传参'
    }
  }
]

const router = new VueRouter({
  // 去除网址中的#号
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// 路由全局守卫
router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title
  next()
})
export default router
