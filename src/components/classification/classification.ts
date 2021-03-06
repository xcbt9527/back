/**
 * Created by momo on 2018/1/4.
 */
/**
 * Created by momo on 2017/11/13.
 */

import Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';
import htmltepl from "./classification.html";
import src from '@/utils/http.ts';
import api from "@/utils/api.ts";
import { Getter } from 'vuex-class';
import classificationmodel from "@/model/classification.ts";
@Component({
  template: htmltepl,
  name: 'classification',
  components: {}
})

export default class article extends Vue {
  title: string = '标题';
  tree: classificationmodel[] = [];  //树结构
  treearr: classificationmodel[] = [];  //所有数据
  treeobj: classificationmodel = new classificationmodel();  //树结构对象
  treeloading: boolean = false;  //loading
  defaultProps: object = { //树结构编辑对象
    children: 'children',
    label: 'label'
  };
  dialogVisible: boolean = false;  //弹框
  options: Array<any> = [];
  filterText: string = null; //关键字搜索
  mounted() {
    this.init();
  }
  init() {
    this.treeloading = true;
    src.post(api.getAllclassification, null).then(res => {
      if (res) {
        this.treeloading = false;
        this.treearr = res;
      }
    }).catch(e => {
      this.$message.error(e);
      this.treeloading = false;
    })
  }

  /**
   * 编辑
   * @param parent 父节点
   * @param data 自数据
   */
  edit(parent, data) {
    this.title = '编辑';
    this.dialogVisible = true;
    this.treeobj = data;
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
      this.treeobj = new classificationmodel();
    });
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
   * 删除
   * @param data 自数据
   */
  remove(data) {
    this.$confirm('是否删除？')
      .then(_ => {
        src.post(api.Delectclassification, data).then(res => {
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
        if (!this.treeobj.upperlevel) {
          this.treeobj.upperlevel = 0;
        }
        src.post(api.Saveclassification, this.treeobj).then(res => {
          this.dialogVisible = false;
          this.$message.success(res);
          this.init();
        })
      }
    })
  }

  @Watch('filterText')
  filterTextchange(val) {
    (this.$refs.classificationtree as any).filter(val);
  }
}
