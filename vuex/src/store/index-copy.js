import Vue from 'vue'
import Vuex from 'vuex'
// 使用常量替代Mutation事件类型
import {INC} from '../store/mutational-types'

Vue.use(Vuex)

const moduleA = {
  state: {
    name: '我是moduleA对象中的state' 
  },
  mutations: {
    updateName(state, payload){
      state.name = payload
    }
  },
  actions: {
    aupdateName(context){
       setTimeout(() => {
        context.commit('updateName', '我是actions模块')
       },1000)
    } 
  },
  getters: {
    fullName(state){
      return state.name + '11111'
    },
    fullName2(state, getters){
      return getters.fullName + '22222'
    },
    fullName3(state, getters, rootState){
      return getters.fullName2 + rootState.count
    }
  } 
}

const moduleB = {}

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
  mutations: {
    [INC](state){
      state.count++
    },
    sub(state){
      state.count--
    },
    incFive(state, count){
      state.count += count
    },
    // 传参
    addStudent(state, stu){
      state.student.push(stu)
    },
    // 替换
    updateInfo(state){
      state.Info.name = 'codewhy'
      // 响应式状态
      // Vue.set(state.Info, 'address', '洛杉矶')
      // 响应式删除属性
      // Vue.delete(state.Info, 'age')
    }
  },
  // 异步操作在此进行
  actions: {
     // context表示上下文  
    //  aUpdateInfo(context){
    //     setTimeout(() => {
    //       context.commit('updateInfo')
    //     },3000)
    //  }

    // 使用Promise
    aUpdateInfo(context, payload){
      return new Promise((resolve) => {
        setTimeout(() => {
          context.commit('updateInfo')
          console.log(payload)
          resolve('hello world')
        },3000)

      })  

   }
  },
  // 相当于计算属性computed
  getters:{
      powerCounter(state){
         return state.count * state.count
      },
      // 列表过滤并计数
      moreStudent(state){
        //  return state.student.filter(s => s.age > 20).length
        return state.student.filter(s => s.age > 20)
      },
        // 获取moreStudent列表中age的长度
      moreStudentLength(state, getters){
        return getters.moreStudent.length
      },
        // 通过让 getter 返回一个函数，来实现给 getter 传参
      deliveStudentAge: (state) => (age) => {
        return state.student.find(s => s.age === age)
      } 
  },
  // 分割模块
  modules: {
    a: moduleA,
    b: moduleB
  }

})
