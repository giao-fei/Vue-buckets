<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link :to="'/'+HomeName" replace>Home</router-link> |
      <router-link :to="'/about/'+AboutName" replace>About</router-link> | -->
      <!-- 路由映射配置和呈现出来 -->
      <router-link to="/about" tag="button" replace>About</router-link> |
      <!-- 通过代码跳转路由 -->
      <button @click="CodeRouter">代码跳转路由</button> |
      <!-- 路由嵌套 -->
      <router-link to="/cart" replace>路由嵌套</router-link> |
      <!-- 路由懒加载 -->
      <!-- component: () => import('../文件夹/组件名称') -->
      <!-- 动态路由 -->
      <router-link :to="'/home/'+CartName" replace>动态路由</router-link> |
      <!-- 路由传参一 -->
      <router-link :to="{ path: '/profile', query: {name: 'gaoyouhui', age: 23, weight:160+'kg'} }">路由传参（一）</router-link>
      <!-- 通过代码方式传递参数 -->
      <button @click="CodeCords">代码传参（二）</button>
    </div>
    <!-- <router-view/> -->
    <!-- keep-alive属性 -->
    <keep-alive exclude="Home,Profile">
    <router-view/>
    </keep-alive>
  </div>
</template>
<script>
   export default {
      name: 'App',
      data(){
        return {
          UserName: 'gao',
          // 加后缀名 -> 动态路由
          CartName: 'iphonexr'
        }
      },
      methods:{
        // 通过代码跳转路由
        CodeRouter(){
          this.$router.push('/CodeRouter/' + this.UserName)
        },
        // 通过代码的方式传参
        CodeCords(){
          this.$router.push({
             path: '/codecords',
             query: {
               name: 'owen',
               age: 23,
               height: 200+'cm'
             }
          })
        }
      },
      // created(){
      //   console.log('created')
      // },
      // mounted(){
      //   console.log('mounted')
      // },
      // updated(){
      //   console.log('updated')
      // },
      // destroyed(){
      //   console.log('destroyed')
      // }
   }
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
