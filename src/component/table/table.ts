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
    pagesize:number = 25;
    get total(){
        return this.value.length;
    }
    get userarr(){
        console.log(this.value.slice(this.pagesize*(this.currentPage -1),this.pagesize*this.currentPage))
        return this.value.slice(this.pagesize*(this.currentPage -1),this.pagesize*this.currentPage);
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
        console.log(row);
    }
    /**
     * 获取分页
     * @param row 
     */
    handleCurrentChange(row){
        console.log(row);
    }
}
