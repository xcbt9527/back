/**
 * Created by momo on 2018/1/4.
 */
/**
 * Created by momo on 2017/11/13.
 */

import Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';
import htmltepl from "./user.html";
import src from '@/utils/http.ts';
import api from "@/utils/api.ts";
@Component({
  template: htmltepl,
  name: 'user',
  components: {}
})

export default class article extends Vue {
  userarr: Array<any> = [];  //用户列表
  title: string = 'null';
  userdialogVisible: boolean = false;
  userdialogVisible1: boolean = false;
  userobj: any = {};
  editorOption: any = {};
  Roles: Array<any> = [];
  mounted() {
    // console.log(articlemodel);
    this.init();
  }

  init() {
    src.post(api.getAlluser, null).then(res => {
      this.userarr = res;
    })
  }

  //编辑
  handleEdit(row) {
    this.userobj = row;
    this.userdialogVisible = true;
    this.title = '编辑';
  };

  //更改状态
  handleDelete() {
    src.post(api.ModifyRecorduser, { password: this.userobj.password }).then(res => {
      this.$message.success('密码修改成功');
      this.userdialogVisible1 = false;
    })
  }

  modify(row) {
    this.userobj = row;
    this.userdialogVisible1 = true;
    this.title = '修改密码';
  }

  //新增
  addarticle() {
    this.userdialogVisible = true;
    this.title = '新增';
    this.$nextTick(() => {
      (this.$refs['ValidateForm'] as any).resetFields();
    });
  }

  //保存
  confirm() {

    (this.$refs['ValidateForm'] as any).validate((valid) => {
      if (valid) {
        src.post(api.SaveRecorduser, this.userobj).then(res => {
          this.userdialogVisible = false;
          this.$message.success('保存成功');
          this.init();
        })
      }
    })
  }
}
