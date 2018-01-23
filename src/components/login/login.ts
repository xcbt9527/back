/**
 * Created by momo on 2017/11/13.
 */

import Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';
import htmltepl from "./login.html";
import src from '@/utils/http.ts';
import api from "@/utils/api.ts";
import {Usermodel} from "../../model/user";
import {mapMutations} from 'vuex';
@Component({
  template: htmltepl,
  name: 'login',
  components: {},
})

export default class login extends Vue {
  username: string = '';
  password: string = '';
  loading: boolean = false;
  numberValidateForm: Object = {
    name: null,
    password: null
  }

  submitForm(formName) {
    (this.$refs[formName] as any).validate((valid) => {
      if (valid) {
        src.post(api.login, this.numberValidateForm).then(res => {
          if (res.status !== 10000) {
            this.$message.error(res);
          } else {
            let model: Usermodel = res.data;
            sessionStorage.setItem('key', model.token);
            sessionStorage.setItem('account', JSON.stringify(res.data));
            this.$message.success(res.msg);
            this.$router.push({path: '/index'});
          }
        })
      } else {
        return false;
      }
    });
  };

  resetForm(formName) {
    (this.$refs[formName] as any).resetFields();
  }
}
