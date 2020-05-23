<template>
     <div id="msg">
        {{msg}}
        <router-link to="/cart/HelloWorld" tag="button">点击1.0</router-link>
        <router-link to="/cart/Test" tag="button">路由嵌套2.0</router-link>
        <router-view></router-view>
     </div>   
</template>
<script>
export default {
    name: 'Cart',
    data(){
        return {
            msg: ' welcome come to code world ',
            path: '/cart/Test'
        }
    },
    // 这个函数，只有组件使用了keep-alive时，才有效。
    activated(){
      this.$router.push(this.path)
    },
    // 组件内导航
    beforeRouteLeave(to, from, next){
      console.log(this.$route.path);
      this.path = this.$route.path;      
      next();
    }
}
</script>
<style scoped>

</style>