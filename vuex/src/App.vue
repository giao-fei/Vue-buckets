<template>
  <div id="app">
    <div id="nav">
      <!-- vuex的基本使用 -->
      <h2>--------App.vue内容：vuex的基本使用---------------</h2>
       <h3>{{$store.state.count}}</h3>
       <button @click="add">+</button>      
       <button @click="del">-</button>
       <button @click="addCount(5)">+5</button>
       <button @click="addCount(10)">+10</button>
       <button @click="addStudent">添加</button>
         <h3>--------App.vue内容：info对象是否是响应式----------</h3>
       <!-- actions的使用 -->
         <h3>{{$store.state.Info}}</h3>
         <button @click="updateInfo">修改信息</button>
       
        <!-- getters的使用 -->
        <h2>-------App.vue内容：getters相关信息-------</h2>
         <h3>{{$store.getters.powerCounter}}</h3>
            <!-- 获取列表属性 -->
         <h3>{{$store.getters.moreStudent}}</h3>
            <!-- 获取列表属性的长度 -->
         <h3>{{$store.getters.moreStudentLength}}</h3>
            <!-- 通过getters传参 -->
         <h3>{{$store.getters.deliveStudentAge(20)}}</h3>
       
         <!-- module的使用 -->
         <h2>------App.vue内容：module的使用----------------</h2>
             <!-- state的使用 -->
             <h3>-------------state的使用：{{$store.state.a.name}}</h3>
             <h3>-------------mutational的使用：<button @click="updateName">修改state中的内容</button></h3>
             <h3>-------------getter的使用：{{$store.getters.fullName}}</h3>
             <h3>------------------------------{{$store.getters.fullName2}}</h3>
             <h3>------------------------------{{$store.getters.fullName3}}</h3>
             <h3>-------------actions的使用：<button @click="syncUpdateName">actions修改属性名</button></h3>
         <h2>----Home.vue内容：vuex的基本使用--------------</h2>
       <Home/>
    </div>
  </div>
</template>
<script>
   import Home from './views/Home.vue'
   import {INC} from './store/mutational-types.js'
   export default {
      name: 'App',
      data(){return{}},
      components: {
        Home
      },
      methods: {
        add(){
        // 普通提交封装
        //  this.$store.commit('inc')
        // 特殊提交封装
            this.$store.commit({
            // 使用常量替代 Mutation 事件类型
              type: INC
            })  
        // console.log(this.$store.state.count)
        },
        del(){
         this.$store.commit('sub')
        // console.log(this.$store.state.count)
        },
        // 普通提交封装
        addCount(count){
         this.$store.commit('incFive', count)
            // this.$store.commit({
            //   type: 'incFive',
            //   count 
            // })   
        },
        addStudent(){
          let stu = {id: 30, name: '李宁', age: 45}
          this.$store.commit('addStudent', stu)
        },
        updateInfo(){
          // this.$store.commit('updateInfo')
          this.$store.dispatch('aUpdateInfo', '我是携带信息')
          .then(res => {
             console.log(res)
          })
        },
        updateName(){
          this.$store.commit('updateName', '我是ModuleA中的mutations')
        },
        syncUpdateName(){
          this.$store.dispatch('aupdateName')
        }
      }
   }
</script>
