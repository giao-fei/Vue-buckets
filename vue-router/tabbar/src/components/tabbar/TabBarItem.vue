<template>
  <div class="tab-bar-item" @click="itemClick">
    <slot v-if="!isActive" name="item-icon"></slot>
    <slot v-else name="item-icon-active"></slot>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
    <!-- <img src="../../assets/img/shouye.png"> 
    <div>首页</div> -->
  </div>  
</template>

<script>
export default {
   name: 'TabBarItem',
   data(){
       return {
        //    isActive: false
       }
   },
   props:{
       path: String,
       activeColor: {
           type: String,
           default: 'red'
       }
   },
   computed:{
       isActive(){
           return this.$route.path.indexOf(this.path) !== -1
       },
       activeStyle(){
           return this.isActive ? {color: this.activeColor} : {}
       }
   },
   methods:{
       itemClick(){
           this.$router.replace(this.path)
       }
   }
}
</script>

<style>
   #tab-bar {
     display: flex;
     background-color: #f6f6f6;
     position: fixed;
     right: 0px;
     left: 0px;
     bottom: 0px;
     box-shadow: 10px 10px 10px rgba(100,100,100,.2);
     font-size: 13px;
   }
   .tab-bar-item{
     flex: 1;
     text-align: center;
     height: 49px;
     padding-top: 5px;
   }

   .tab-bar-item img{
     width: 26px;
     height: 26px;
   }
   /* .active{
       color: red;
   } */
</style>