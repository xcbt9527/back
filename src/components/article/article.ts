/**
 * Created by momo on 2017/11/13.
 */

import Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';
import htmltepl from "./article.html";
import src from '../../utils/http';
import api from "../../utils/api";
@Component({
  template: htmltepl,
  name: 'article',
  components: {}
})

export default class article extends Vue {

}
