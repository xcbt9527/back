/**
 * Created by momo on 2017/11/13.
 */

import Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';
import htmltepl from "./index.html";
import src from '@/utils/http.ts';
import api from "@/utils/api.ts";
@Component({
  template: htmltepl,
  name: 'index',
  components: {}
})

export default class index extends Vue {
  menu: Array<any> = [];
  showmenu: Array<any> = ['1', '2'];
  account: any = {};

  mounted() {
    this.init();
    this.getmenu();
  }

  init() {
    this.account = JSON.parse(sessionStorage.getItem("account"));
  }
  getmenu() {
    src.post(api.getTreemenu, null).then(res => {
      this.menu = res;
    })
  }
}
