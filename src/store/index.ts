import Vue from 'vue'
import Vuex from 'vuex'
import state from './state.ts'
import mutations from './mutations.ts'
import actions from './actions.ts'

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  actions
})
