// 使用常量替代Mutation事件类型
import {INC} from '../store/mutational-types'
export default {
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
  }