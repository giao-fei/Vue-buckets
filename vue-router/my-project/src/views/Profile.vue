<template>
    <div>
      {{msg}}
      <p>{{$route.query}}</p>
      <h3>{{$route.query.name}}</h3>
      <h3>{{$route.query.age}}</h3>
      <h3>{{$route.query.weight}}</h3>
    </div>
</template>

<script>
export default {
   name: 'Profile',
   data(){
       return {
           msg: '我是路由传参（一）组件'
       }
   },
    created(){
      console.log('Profile created')
    },
    destroyed(){
      console.log('Profile destroyed')
    },
}
</script>

<style>

</style>