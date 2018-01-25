/**
 * Created by momo on 2018/1/4.
 */
/**
 * Created by momo on 2017/11/13.
 */

import Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';
import htmltepl from "./roles.html";
import src from '@/utils/http.ts';
import api from "@/utils/api.ts";
import { Getter } from 'vuex-class';
import rolesmodel from "@/model/roles.ts";
@Component({
  template: htmltepl,
  name: 'menulist',
  components: {}
})

export default class article extends Vue {
  title: string = '标题';
  tableArray: rolesmodel[] = [];  //树结构
  obj: rolesmodel = new rolesmodel();  //树结构对象
  loading: boolean = false;  //loading
  defaultProps: object = { //树结构编辑对象
    children: 'children',
    label: 'label'
  };
  dialogVisible: boolean = false;  //弹框
  filterText: string = null; //关键字搜索
  menuArray: Array<any> = [];  //树菜单栏结构
  mounted() {
    this.init();
    this.getTreemenu();
  }
  init() {
    this.loading = true;
    src.post(api.getAllroles, null).then(res => {
      if (res) {
        this.loading = false;
        this.tableArray = res;
      }
    }).catch(e => {
      this.$message.error(e);
      this.loading = false;
    })
  }
  getTreemenu() {
    src.post(api.getTreemenu, { showarrroles: 1 }).then(res => {
      this.menuArray = res;
    }).catch(e => {
      this.$message.error(e);
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
    this.obj = data;
    this.$nextTick(() => {
      (this.$refs.tree as any).setCheckedKeys(this.obj.menu_roles);
    })
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
      this.obj = new rolesmodel();
    });
  }
  /**
   * 删除
   * @param data 自数据
   */
  remove(data) {
    this.$confirm('是否删除？')
      .then(_ => {
        src.post(api.Delectmenu, data).then(res => {
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
        if (!this.obj.upperlevel) {
          this.obj.upperlevel = 0;
        }
        this.obj.menu_roles = null;
        let model = (this.$refs.tree as any).getCheckedKeys();
        model = model.join(",");
        this.obj.menu_roles = JSON.stringify(model);

        src.post(api.Saveroles, this.obj).then(res => {
          this.dialogVisible = false;
          this.$message.success(res);
          this.init();
        })
      }
    })
  }
  getkey() {
    src.post(api.getuid, null).then(res => {
      this.obj.Uid = res;
    })
  }

}
