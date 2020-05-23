export default {
    fullName(state){
      return state.name + '11111'
    },
    fullName2(state, getters){
      return getters.fullName + '22222'
    },
    fullName3(state, getters, rootState){
      return getters.fullName2 + rootState.count
    }
  } 