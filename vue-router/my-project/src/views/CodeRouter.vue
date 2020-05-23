<template>
   <div>
    <p>{{msg}}</p>
    <h2>{{UserName}}</h2>
   </div>
</template>

<script>
export default {
   name: 'CodeRouter',
   data(){
       return {
           msg: 'you can you up, no can no b b'
       }
   },
   computed: {
    // 将后缀名渲染到test文本中
       UserName(){
         return this.$route.params.UserName
      }
   }
}
</script>

<style>

</style>