/**
 * Created by baird on 18/1/15.
 */
/**
 * Created by momo on 2018/1/4.
 */
/**
 * Created by momo on 2017/11/13.
 */

import Vue from 'vue';
import { Component, Watch, Prop } from 'vue-property-decorator';
import htmltepl from "./table.html";
@Component({
    template: htmltepl,
    name: 'm-table',
    components: {}
})

export default class updatets extends Vue {

    @Prop({ default: [] }) value: Array<any>;   //v-model的值
    @Prop({ default: false }) isbackpage: boolean;   //是否后台分页
    page:pagemodel = new pagemodel();
    loading:boolean = false;
    pagesizes:Array<number> = [25,50,100, 150, 200];
    get total(){
        return this.value.length;
    }
    get userarr(){
        let arr = this.value.slice(this.page.pagesize*(this.page.currentPage -1),this.page.pagesize*this.page.currentPage);
        if(this.isbackpage===false){
        this.loading = true;
        setTimeout(()=>{
            this.loading = false;
        },1000)
    }
        return arr;
    }
    mounted() {
        this.init();
    }
    init() {

    }
    add(){
        this.$emit('add');
    }
    /**
     * 获取分页大小
     * @param row 
     */
    handleSizeChange(row){
        if(this.isbackpage){
            this.$emit('handleSizeChange',this.page);
        }else{
            
        this.page.pagesize = row;
        }
    }
    /**
     * 获取分页
     * @param row 
     */
    handleCurrentChange(row){
        if(this.isbackpage){
            this.$emit('handleSizeChange',this.page);
        }else{
        this.page.currentPage = row;
        }
    }
}

export class pagemodel {
    currentPage:number=1;
    pagesize:number = 25;
}