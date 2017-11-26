/**
 * Created by momo on 2017/11/13.
 */

import Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';
import htmltepl from "./login.html";
import src from '@/utils/http.ts';
import api from "@/utils/api.ts";
@Component({
  template: htmltepl,
  name: 'login',
  components: {}
})

export default class login extends Vue {
  username: string = '';
  password: string = '';
  loading: boolean = false;
  tableData: Array<any> = [{
    date: '2016-05-02',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
  }];
  toLoading() {
    let vm = this;
    this.loading = true;
    src.post(api.login, {username: this.username, password: this.password}).then(res => {
      this.loading = false;
      if (res) {
      } else {
        (this.$router as any).push({name: 'index'});
      }
    })
  }
}
