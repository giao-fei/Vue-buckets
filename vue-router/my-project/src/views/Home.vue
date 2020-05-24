<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <p>{{CartName}}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  computed: {
    // 将后缀名渲染到test文本中
    CartName(){
        return this.$route.params.CartName
      }
   },
  // 生命周期函数
   created(){
       console.log('Home cerated')
       document.title = '关于'
   },
  //  mounted(){
  //      console.log('mounted')
  //  },
  //  updated(){
  //      console.log('updated')
  //  },
   destroyed(){
       console.log('Home destoryed')
   }
}
</script>
