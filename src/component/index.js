/**
 * Created by baird on 18/1/15.
 */

import vue from 'vue';

//组件
import update from "./update/index.ts";
import canvas from "./canvas/canvas.ts";
//引入组件
vue.component('m-update', update);
vue.component('m-canvas', canvas);
