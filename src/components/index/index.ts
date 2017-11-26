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
  tableData: Array<any> = [{
    date: '2016-05-02',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
  }];
}
