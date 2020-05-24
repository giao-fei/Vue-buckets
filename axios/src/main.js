import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8080'
axios.defaults.timeout = 5000

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// 1、axios的基本使用
// axios({
//    url: '/api',
//    type: 'get'
// }).then(res => {
//    console.log(res)
// })

// 2、axios发送并发请求
// 一、 axios.all([
//       axios({
//        url: '/api',
//        type: 'get'
//      }),  
//      axios({
//        url: '/http',
//        type: 'get'
//      })
//   ]).then(res => {
//      console.log(res[0])
//     console.log(res[1])
//   })
// axios.all([axios({
//   url: '/http',
//   type: 'get'
// }), axios({
//   url: 'http://123.207.32.32:8000/home/data',
//   params: {
//     type: 'sell',
//     page: 5
//   }
// })]).then(axios.spread((res1, res2) => {
//    console.log(res1)
//    console.log(res2)
// }))

// 3、axios的实例和模块封装
import {request} from '../network/request'

request({
   url: '/http',
   type: 'get'
}).then(res => {
   console.log(res)
}).catch(err => {
   console.log(err)
})