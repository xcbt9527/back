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
import htmltepl from "./canvas.html";
@Component({
    template: htmltepl,
    name: 'm-table',
    components: {}
})

export default class updatets extends Vue {

    @Prop({ default: [] }) value: Array<any>;   //v-model的值
    mounted() {
        this.init();
    }
    init() {

    }
}
