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
import htmltepl from "./tree.html";
@Component({
    template: htmltepl,
    name: 'm-tree',
    components: {}
})

export default class updatets extends Vue {

    @Prop({ default: [] }) value: Array<any>;   //v-model的值
    @Prop({ default: [] }) showarr: Array<any>;   //展示列表
    @Prop({ default: 'children' }) children: string;   //展示标题
    @Prop({ default: 'right' }) fixed: void;   //是否固定漂浮
    mounted() {
        this.init();
    }
    get Arr() {
        return this.value;
    }
    init() {

    }
    append() {
        this.$emit('btnclick', 'add', {});
    }
    /**
     * 
     * @param status edit:编辑;remove:删除
     * @param row 
     */
    btn(status, row) {
        this.$emit('btnclick', status, row);
    }
}
