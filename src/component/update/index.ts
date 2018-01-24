/**
 * Created by baird on 18/1/15.
 */

import Vue from 'vue';
import { Component, Watch, Prop } from 'vue-property-decorator';
import htmltepl from "./index.html";
@Component({
  template: htmltepl,
  name: 'm-update',
  components: {}
})

export default class updatets extends Vue {

  @Prop({ default: true }) value: string; //获取v-model
  update() {
    (this.$refs.file as any).click();
  }

  updateimg(e) {
    let vm = this;
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.onloadend = function () {
      // 图片的 base64 格式, 可以直接当成 img 的 src 属性值
      let dataURL = reader.result;
      let img = new Image();
      img.src = dataURL;
      vm.$emit('update:base64', dataURL);
    };
    reader.readAsDataURL(file); // 读出 base64
  }
}
