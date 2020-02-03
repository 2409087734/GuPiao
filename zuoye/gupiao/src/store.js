import Vue from 'vue'
import Vuex from 'vuex'
var oAxios = require('@/utils/request');
var $get = Vue.prototype.$get = oAxios.get;
var $post = Vue.prototype.$post = oAxios.post;
var $Deletes = Vue.prototype.$Deletes = oAxios.Deletes;
Vue.use(Vuex)
Vue.use(oAxios)

export default new Vuex.Store({
    state:{
        list:[]  //xuanranliebiao
    },
    mutations:{
      getListMutations(state,list){
            state.list=list;
            console.log(state)
        }
    },
    actions:{
      getList({commit}){
         $get('/finance/stock/usaall?key=99622ad78bcb0ba00aa71085a2580d95&page=1').then(res=>{
            commit('getListMutations', res.data.result)
         })
      }
    },
    modules:{},
    getters:{}
})