// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router';
import ElementUI from 'element-ui';
import Vuex from 'vuex';
Vue.use(ElementUI);
Vue.use(Vuex);
Vue.use(ElementUI, {size: 'small'}); //全局配置对象
Vue.config.productionTip = false
const store = new Vuex.Store({
  // 存储状态值
  state: {
    account: {}
  },
  // 状态值的改变方法,操作状态值
  // 提交mutations是更改Vuex状态的唯一方法
  mutations: {
    setaccount(item){
      this.$state.account = item;
    }
  },
  // 在store中定义getters（可以认为是store的计算属性）。Getters接收state作为其第一个函数
  getters: {},
  actions: {}
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
