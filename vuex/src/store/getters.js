export default {
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
}