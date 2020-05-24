export default {
    // context表示上下文  
   //  aUpdateInfo(context){
   //     setTimeout(() => {
   //       context.commit('updateInfo')
   //     },3000)
   //  }

   // 使用Promise
   aUpdateInfo(context, payload){
     return new Promise((resolve) => {
       setTimeout(() => {
         context.commit('updateInfo')
         console.log(payload)
         resolve('hello world')
       },3000)

     })  

   }
 }