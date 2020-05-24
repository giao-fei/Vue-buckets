<template>
  <div class="home">
    <!-- vuex的基本使用情况 -->
     <h2>{{$store.state.count}}</h2>
     <h2>{{$store.state.Info}}</h2>
    <!-- getter的使用 -->
    <h2>-------Home.vue内容：getters相关信息------------------</h2>
     <h2>{{$store.getters.powerCounter}}</h2>
     <h2>{{$store.getters.moreStudent}}</h2>
     <h2>{{$store.getters.moreStudentLength}}</h2>
     <h2>{{$store.getters.deliveStudentAge(20)}}</h2>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: 'Home',
  methods: {
    
  }
}
</script>
