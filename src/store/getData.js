export default{
  state:{
    checkMode:false,
    gameMode:localStorage.getItem('Free'),
  },
  mutations:{
    SET_GAMEMODE: (state, checkMode) => {
      state.checkMode = checkMode;
    },
  },
  actions:{
    checkMode({commit},gameMode){
      var getFree = localStorage.getItem('Free');
      if (getFree != 'free') {
        commit('SET_GAMEMODE',false);
      }else{
        commit('SET_GAMEMODE',true);
      }
    }
  }
}