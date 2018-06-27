import Vue from 'vue';
import Vuex from 'vuex';
import getData from './getData';
import getter from './getter';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules:{
    getData
  },
})

export default store ;
