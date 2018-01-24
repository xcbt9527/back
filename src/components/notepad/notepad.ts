/**
 * Created by momo on 2018/1/4.
 */
/**
 * Created by momo on 2017/11/13.
 */

import Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';
import htmltepl from "./notepad.html";
import src from '@/utils/http.ts';
import api from "@/utils/api.ts";
import { Getter } from 'vuex-class';
import notepadmodel from "@/model/notepad.ts";
@Component({
  template: htmltepl,
  name: 'notepad',
  components: {}
})

export default class article extends Vue {
  title: string = '标题';
  Array: notepadmodel[] = [];  //树结构
  Arrayobj: notepadmodel = new notepadmodel();  //树结构对象
  loading: boolean = false;  //loading
  dialogVisible: boolean = false;  //弹框
  filterText: string = null; //关键字搜索
  mounted() {
    this.init();
  }
  init() {
    this.loading = true;
    src.post(api.getAllnotepad, null).then(res => {
      if (res) {
        this.loading = false;

        this.Array = res;
      }
    }).catch(e => {
      this.$message.error(e);
      this.loading = false;
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
  /**
   * 编辑
   * @param parent 父节点
   * @param data 自数据
   */
  edit(data) {
    this.title = '编辑';
    this.dialogVisible = true;
    this.Arrayobj = data;
  }
  /**
   * 新增
   * @param data 自数据（可空）
   */
  append(data) {
    this.title = '新增';
    this.dialogVisible = true;
    this.$nextTick(() => {
      (this.$refs['ValidateForm'] as any).resetFields();
      this.Arrayobj = new notepadmodel();
    });
  }
  /**
   * 删除
   * @param data 自数据
   */
  remove(data) {
    this.$confirm('是否删除？')
      .then(_ => {
        src.post(api.Delectnotepad, data).then(res => {
          this.$message.success(res);
          this.dialogVisible = false;
          this.init();
        }).catch(e => {
          this.$message.success(e);
          this.dialogVisible = false;
        });
      })
      .catch(_ => { });
  }
  /**
   * 保存
   */
  confirm() {
    (this.$refs['ValidateForm'] as any).validate((valid) => {
      if (valid) {
        src.post(api.Savenotepad, this.Arrayobj).then(res => {
          this.dialogVisible = false;
          this.$message.success(res);
          this.init();
        })
      }
    })
  }
 
  editor(val) {
    this.Arrayobj.content = val;
  }
}
