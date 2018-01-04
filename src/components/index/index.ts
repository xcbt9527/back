/**
 * Created by momo on 2017/11/13.
 */

import Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';
import htmltepl from "./index.html";
@Component({
  template: htmltepl,
  name: 'index',
  components: {}
})

export default class index extends Vue {
  menu: Array<any> = [{
    title: '用户管理',
    index: '1',
    children: [{path: '/sysuser', title: '系统用户管理', index: '1-1'}]
  }, {title: '商品管理', index: '2', children: [{path: '/shoplist', title: '商品管理', index: '2-1'}]}];
  showmenu: Array<any> = ['1', '2'];
  account: any = {};

  mounted() {
    this.init();
  }

  init() {
    this.account = JSON.parse(sessionStorage.getItem("account"));
  }
}
