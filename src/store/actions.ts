/**
 * Created by momo on 2018/1/28.
 */
import * as types from './mutations-types.ts'

export default {
  incrementNumberAsync({commit}, data: number) {
    let mutation = types.ACCOUNT_INIT;
    commit(mutation, data)
  }
}
