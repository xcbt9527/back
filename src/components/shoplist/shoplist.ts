/**
 * Created by momo on 2018/1/4.
 */
/**
 * Created by momo on 2017/11/13.
 */

import Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';
import htmltepl from "./shoplist.html";
import src from '@/utils/http.ts';
import api from "@/utils/api.ts";
import { Getter } from 'vuex-class';
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
      if (res) {
        this.userarr = res;
      }
    })
  }

  handleClose(done) {
    this.$confirm('关闭将不保存未保存数据')
      .then(_ => {
        this.init();
        done();
      })
      .catch(_ => { });
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
      AutoId: 0,
      details: '',
      picture: '',
      state: 1,
      title: '',
      editor: '12312312312312313',
    };
  }

  //删除
  remove(row) {
    src.post(api.DeleteRecordshop, { AutoId: row.AutoId }).then(res => {
      this.$message.success(res);
      this.init();
    }).catch(e => {
      this.$message.success(e);
    })
  }

  //保存
  confirm() {
    (this.$refs['ValidateForm'] as any).validate((valid) => {
      if (valid) {
        src.post(api.SaveRecordshop, this.userobj).then(res => {
          this.userdialogVisible = false;
          this.$message.success(res);
          this.init();
        }).catch(e => {
          this.$message.success(e);
        })
      }
    })
  }
  editor(val) {
    this.userobj.details = val;
  }
  update(e) {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.onloadend = function () {
      // 图片的 base64 格式, 可以直接当成 img 的 src 属性值
      let dataURL = reader.result;
      let img = new Image();
      img.src = dataURL;
      e.value = dataURL;
    };
    reader.readAsDataURL(file); // 读出 base64
  }
}
