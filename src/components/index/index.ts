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
  menu: Array<any> = [{title: '文章管理', index: '1', children: [{path: '/article', title: '文章管理', index: '1-1'}]}];
  showmenu: Array<any> = ['1'];
}
