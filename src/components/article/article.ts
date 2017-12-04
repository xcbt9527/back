/**
 * Created by momo on 2017/11/13.
 */

import Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';
import htmltepl from "./article.html";
import src from '@/utils/http.ts';
import api from "@/utils/api.ts";
import {Usermodel} from "../../model/user";
import {articlemodel} from "../../model/article";
@Component({
  template: htmltepl,
  name: 'article',
  components: {}
})

export default class article extends Vue {
  articlearr: Array<articlemodel> = [];  //文章列表
  title: string = 'null';
  articledialogVisible: boolean = false;
  articleobj: any = {};
  editorOption: any = {};

  mounted() {
    // console.log(articlemodel);
    this.init();
  }

  init() {
    let account: Usermodel = JSON.parse(sessionStorage.getItem("account"));
    console.log(account.id);
    src.post(api.articleall, {id: account.id}).then(res => {
      this.articlearr = res;
    })
  }

  //编辑
  handleEdit(index, row) {
    src.post(api.getarticleRecord, {id: row.id}).then(res => {
      console.log(res);
      this.articleobj = res;
      this.title = '编辑';
      this.articledialogVisible = !this.articledialogVisible;
    })
  };

  //删除
  handleDelete(index, row) {
    console.log(index, row);
    src.post(api.delectarticleRecord, {id: row.id}).then(res => {
      console.log(res);
    })
  }

  //关闭
  handleClose(done) {
    this.$confirm('关闭将不会保存修改过的内容？')
      .then(_ => {
        done();
      })
      .catch(_ => {
      });
  }

  //新增
  addarticle() {
    this.articledialogVisible = true;
    this.title = '新增';
    this.articleobj = {};
    let account: Usermodel = JSON.parse(sessionStorage.getItem("account"));
    this.articleobj.userid = account.id;
  }

  //保存
  confirm() {

    (this.$refs['ValidateForm'] as any).validate((valid) => {
      src.post(api.SavearticleRecord, this.articleobj).then(res => {
        console.log(res);
      })
    })
  }
}
