
import { Account } from "../mutation";
export default {
    // 存储状态值
    state: {
        account: {}
    },
    // 状态值的改变方法,操作状态值
    // 提交mutations是更改Vuex状态的唯一方法
    mutations: {
        [Account.CHANGE_ACCOUNT](state, account) {
            if (!account) {
                let data = localStorage.getItem('account');
                if (data) {
                    account = data;
                }
            }
            state.account = account;
        },
        [Account.LOGOUT_ACCOUNT](state) {
            state.account = {};
            localStorage.clear();
        }
    },
    actions: {
        //更改登录人
        changeAccountById({
            commit
        }, accountId) {
            if (accountId) {
                let data = localStorage.getItem('account');
                if (data) {
                    accountId = data;
                }
            }
            console.log(accountId);
            commit(Account.CHANGE_ACCOUNT, accountId);
        },
        //退出登录
        logout({ commit }) {
            commit(Account.LOGOUT_ACCOUNT);
        }
    },
    getters: {
        account: (data) => {
            return data;
        },
        accountId: (data) => {
            return data.accountId;
        }
    }
}
