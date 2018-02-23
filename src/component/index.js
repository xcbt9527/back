/**
 * Created by baird on 18/1/15.
 */

import vue from 'vue';

//组件
import update from "./update/index.ts";
import canvas from "./canvas/canvas.ts";
import mtable from "./table/table.ts";
import mtree from "./tree/tree.ts";
//引入组件
vue.component('m-update', update);
vue.component('m-canvas', canvas);
vue.component('m-table', mtable);
vue.component('m-tree', mtree);
