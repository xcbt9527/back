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
    currentPage:number = 1;
    pagesize:number = 10;
    loading:boolean = false;
    pagesizes:Array<number> = [10,20,50, 100, 150];
    get total(){
        return this.value.length;
    }
    get userarr(){
        this.loading = true;
        let arr = this.value.slice(this.pagesize*(this.currentPage -1),this.pagesize*this.currentPage);
        setTimeout(()=>{
            this.loading = false;
        },1000)
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
        this.pagesize = row;
    }
    /**
     * 获取分页
     * @param row 
     */
    handleCurrentChange(row){
        this.currentPage = row;
    }
}
