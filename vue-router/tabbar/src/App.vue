<template>
  <div id="app">
    <tab-bar>
      <tab-bar-item path="/home" activeColor="pink">
        <img slot="item-icon" src="./assets/img/shouye.png">
        <img slot="item-icon-active" src="./assets/img/shouye1.png">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/classify" activeColor="blue">
        <img slot="item-icon" src="./assets/img/fenlei.png">
        <img slot="item-icon-active" src="./assets/img/fenlei1.png">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cartshop" activeColor="lightgray">
        <img slot="item-icon" src="./assets/img/gouwuche.png">
        <img slot="item-icon-active" src="./assets/img/gouwuche1.png">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/user" activeColor="red">
        <img slot="item-icon" src="./assets/img/wode.png">
        <img slot="item-icon-active" src="./assets/img/wode1.png">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
    <router-view></router-view>
  </div>
</template>
<script>
// 利用具名插槽调取已封装好的组件
import TabBar from './components/tabbar/TabBar.vue'
import TabBarItem from './components/tabbar/TabBarItem.vue'
export default {
   name: 'App',
   data(){return {}},
   components:{
     TabBar,TabBarItem
   },
   methods:{}
}
</script>
<style>
   @import './assets/css/base.css';

</style>
