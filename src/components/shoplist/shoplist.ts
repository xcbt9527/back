/**
 * Created by momo on 2018/1/4.
 */
/**
 * Created by momo on 2017/11/13.
 */

import Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';
import htmltepl from "./shoplist.html";
import src from '@/utils/http.ts';
import api from "@/utils/api.ts";
@Component({
  template: htmltepl,
  name: 'shoplist',
  components: {}
})

export default class article extends Vue {
  userarr: Array<any> = [];  //用户列表
  title: string = 'null';
  userdialogVisible: boolean = false;
  userdialogVisible1: boolean = false;
  userobj: any = {};
  editorOption: any = {};

  mounted() {
    // console.log(articlemodel);
    this.init();
  }

  init() {
    src.post(api.getAllshop, null).then(res => {
      this.userarr = res;
    })
  }

  //编辑
  handleEdit(row) {
    this.userobj = row;
    this.userdialogVisible = true;
    this.title = '编辑';
  };


  //新增
  addarticle() {
    this.userdialogVisible = true;
    this.title = '新增';
    this.userobj = {
      AutoId: 0
    };
  }

  //保存
  confirm() {

    (this.$refs['ValidateForm'] as any).validate((valid) => {
      if (valid) {
        src.post(api.SaveRecordshop, this.userobj).then(res => {
          this.userdialogVisible = false;
          this.$message.success('保存成功');
          this.init();
        })
      }
    })
  }
}
