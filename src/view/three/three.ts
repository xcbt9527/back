/**
 * Created by baird on 18/1/15.
 */

import Vue from 'vue';
import { Component, Watch, Prop } from 'vue-property-decorator';
import htmltepl from "./three.html";
import * as three from "three";
// const threesrc = new three();
@Component({
    template: htmltepl,
    name: 'three',
    components: {}
})

export default class threeclass extends Vue {

    mounted() {
        this.init();
    }
    init(){
        console.log(three);
    }
}
