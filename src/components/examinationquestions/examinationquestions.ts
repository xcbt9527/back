/**
 * Created by momo on 2018/1/4.
 */

import Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';
import htmltepl from "./examinationquestions.html";
import src from '@/utils/http.ts';
import api from "@/utils/api.ts";
import { Getter } from 'vuex-class';
import book from "./bookmanage/book.ts";
import exercises from "./bookmanage/exercises.ts";
@Component({
  template: htmltepl,
  name: 'examinationquestions',
  components: { book, exercises }
})

export default class examinationquestions extends Vue {
  mounted() {
  }



}
