/**
 * Created by momo on 2018/1/28.
 */
import * as types from './mutations-types.ts'
import {MutationTree} from 'vuex'

const mutations: MutationTree<any> = {
  [types.ACCOUNT_INIT](state, data: Object): void {
    state.ACCOUNT = data;
  }
}

export default mutations;
