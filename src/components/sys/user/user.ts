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
    this.getroles();
  }

  init() {
    src.post(api.getAlluser, null).then(res => {
      this.userarr = res;
    })
  }
  getroles() {
    src.post(api.getAllroles, null).then(res => {
      this.Roles = res;
      console.log(this.Roles);
    });
  }
  //编辑
  handleEdit(row) {
    this.userobj = row;
    this.userdialogVisible = true;
    this.title = '编辑';
    this.userobj.Roles.map(res => {
      res = Number(res);
      return Object.assign({}, res);
    })
    console.log(row);
  };

  //更改状态
  handleDelete() {
    (this.$refs['ValidateForm1'] as any).validate(v => {
      if (this.userobj.password1 !== this.userobj.password) {
        this.$message.success('两次密码不一致');
        return;
      }
      src.post(api.ModifyRecorduser, { AutoId: this.userobj.AutoId, password: this.userobj.password }).then(res => {
        this.$message.success('密码修改成功');
        this.userdialogVisible1 = false;
      })
    });
  }

  modify(row) {
    this.userdialogVisible1 = true;
    this.$nextTick(() => {
      (this.$refs['ValidateForm1'] as any).resetFields();
    })
    this.userobj = row;
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
    this.userobj.Roles = Array.from(new Set(this.userobj.Roles));
    console.log(this.userobj.Roles);
    this.userobj.Roles = JSON.stringify(this.userobj.Roles.join(","));
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
  /**
   * 删除
   * @param row 
   */
  remove(row, state) {
    if (state !== 1) {
      this.$confirm('确认删除？一旦删除无法恢复！')
        .then(_ => {
          this.changestate(row.AutoId, state);
        })
        .catch(_ => { });
    } else {
      this.changestate(row.AutoId, state);
    }
  }
  changestate(AutoId, state) {
    src.post(api.DeleteRecorduser, { AutoId: AutoId, state: state }).then(res => {
      if (res) {
        this.$message.success(res);
        this.init();
      }
    })
  }
}
