<template>
  <div>
    {{msg}}
    <p>{{$route.query}}</p>
    <h3>{{$route.query.name}}</h3>
    <h3>{{$route.query.age}}</h3>
    <h3>{{$route.query.height}}</h3>
  </div>
</template>

<script>
export default {
   name: 'CodeCords',
   data(){
       return {
           msg: '路由传参（二）--》通过代码的形式传参'
       }
   }
}
</script>

<style>

</style>