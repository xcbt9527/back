/**
 * Created by baird on 18/2/22.
 */

import Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';
import htmltepl from "./filmvip.html";
@Component({
  template: htmltepl,
  name: 'filmvip',
  components: {}
})

export default class filmvip extends Vue {
  view: View = new View();
  showflimvip: boolean = false;
  patUrl = ["http://www.wmxz.wang/video.php?url=", "http://yun.mt2t.com/yun?url=", "http://api.51ckm.com/jx.php?url=", "http://www.vipjiexi.com/yun.php?url=", "https://a8da8d.3wap.cc/xx88.php?url=", "http://www.662820.com/xnflv/index.php?url=", "http://www.0335haibo.com/tong.php?url="];
  // "http://www.1717yun.com/jx/ty.php?url=", "http://api.baiyug.cn/vip/index.php?url=","https://api.47ks.com/webcloud/?v=",
  mounted() {
    this.init();
  }

  init() {
    (this.$refs['iframe'] as any).src = '';
    console.log((this.$refs['iframe'] as any).src)
  }

  analysis() {
    (this.$refs['dynamicValidateForm'] as any).validate((valid) => {
      if (valid) {
        this.showflimvip = true;
        (this.$refs['iframe'] as any).src = this.patUrl[this.view.line] + this.view.website;
      } else {
        return false;
      }
    });
  }
}
/**
 * Created by momo on 2017/11/26.
 */

export class View {


  website: string = null;
  line: number = 0;
}
