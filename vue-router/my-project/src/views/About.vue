<template>
  <div class="about">
    <h1>This is an about page</h1>
  <p id="p">
  <el-tabs type="border-card">
  <el-tab-pane label="登录" class="login">
   <el-input placeholder="请输入账号" v-model="input" @keyup.f2="btn" clearable></el-input>
   <el-input placeholder="请输入密码" v-model="input2" @keyup="btn" show-password></el-input>
   <el-button type="primary" class="button" @click="btn">登录</el-button>
  </el-tab-pane>
  <el-tab-pane label="注册">配置管理</el-tab-pane>
</el-tabs>
</p>
  </div>
</template>
<script>
  export default {
     name: 'About',
     data() {
        return {
          input: '',
          input2: ''
        }
     },
     methods: {
        btn(){
          console.log("hello world")
        }
     }
  }
</script>
<style scoped>
  #p{
     width: 30%;
     margin: auto;
    }
  .login{
     width: 100%;
     height: 200px;
     display: flex;
     flex-wrap: wrap;
     align-content: space-between;
  }
  .button{
     width: 100%;
  }
</style>