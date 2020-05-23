import Vue from 'vue'
import Vuex from 'vuex'
// 使用常量替代Mutation事件类型
// import {INC} from '../store/mutational-types'

// 模块化分离
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import moduleA from './modules/moduleA'

Vue.use(Vuex)

export default new Vuex.Store({
  // state相当于date用于储存数据
  state: {
    count: 100,
    // 列表
    student: [
      {id: 10, name: '詹姆斯', age: 45},
      {id: 15, name: '哈登', age: 20},
      {id: 20, name: '欧文', age: 25},
      {id: 25, name: '戴维斯', age: 10}
    ],
    Info: {
      id: 30,
      name: '麦迪',
      age: 40
    }
  },
  // 相当于methods方法，不能进行异步操作
  mutations,
  // 异步操作在此进行
  actions,
  // 相当于计算属性computed
  getters,
  // 分割模块
  modules: {
    a: moduleA
  }

})
