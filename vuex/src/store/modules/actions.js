export default {
    aupdateName(context){
       setTimeout(() => {
        context.commit('updateName', '我是actions模块')
       },1000)
    } 
  }