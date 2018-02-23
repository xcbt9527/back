/**
 * Created by momo on 2018/1/4.
 */

import Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';
import htmltepl from "./book.html";
import src from '@/utils/http.ts';
import api from "@/utils/api.ts";
import { Getter } from 'vuex-class';
import examinationquestionsclass from "@/model/examinationquestions.ts";
import classchapter from "@/model/chapter.ts";
@Component({
    template: htmltepl,
    name: 'book',
    components: {}
})

export default class book extends Vue {
    title: string = '标题';
    Arr: examinationquestionsclass[] = [];  //书结构
    Arrchaptertree: classchapter[] = [];  //文章树结构
    obj: examinationquestionsclass = new examinationquestionsclass();  //树结构对象
    chapterobj: classchapter = new classchapter();  //树结构对象
    loading: boolean = false;  //loading
    dialogVisible: boolean = false;  //弹框
    chapterdialogVisible: boolean = false;  //弹框
    defaultProps: any = {
        children: 'children',
        label: 'title'
    }

    mounted() {
        this.init();
    }

    init() {
        this.loading = true;
        this.getchaptertree();
        src.post(api.getAllbookframework, null).then(res => {
            if (res) {
                this.loading = false;

                this.Arr = res;
            }
        }).catch(e => {
            this.$message.error(e);
            this.loading = false;
        })
    }
    getchaptertree() {
        src.post(api.getAlltreechapter, null).then(res => {
            if (res) {
                this.Arrchaptertree = res;
            }
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
            .catch(_ => {
            });
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
    }
    handleNodeClick(data) {
        this.chapterobj.upperlevel = data.AutoId;
    }
    handleNodeClick1(data) {
        this.chapterobj.bookId = data.AutoId;
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
            this.obj = new examinationquestionsclass();
        });
    }

    /**
     * 删除
     * @param data 自数据
     */
    remove(data) {
        this.$confirm('是否删除？')
            .then(_ => {
                src.post(api.Delectbookframework, data).then(res => {
                    this.$message.success(res);
                    this.dialogVisible = false;
                    this.init();
                }).catch(e => {
                    this.$message.success(e);
                    this.dialogVisible = false;
                });
            })
            .catch(_ => {
            });
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
                src.post(api.Savebookframework, this.obj).then(res => {
                    this.dialogVisible = false;
                    this.$message.success(res);
                    this.init();
                })
            }
        })
    }
    editor(row) {
        this.chapterobj.content = row;
    }
    confirmchapter() {
        (this.$refs['chapterValidateForm'] as any).validate((valid) => {
            if (valid) {
                if (!this.chapterobj.upperlevel) {
                    this.chapterobj.upperlevel = 0;
                }
                src.post(api.Savechapter, this.chapterobj).then(res => {
                    this.chapterdialogVisible = false;
                    this.$message.success(res);
                    this.init();
                })
            }
        })
    }
    treeclick(status, row) {
        let model = row;
        if (status === 'add') {
            this.chapterdialogVisible = true;
            this.chapterobj = new classchapter();
            this.title = '新增';
            this.$nextTick(() => {
                (this.$refs['chapterValidateForm'] as any).resetFields();
                this.chapterobj.bookId = model.AutoId;
                console.log(model.AutoId);
            });
        }
    }
}
