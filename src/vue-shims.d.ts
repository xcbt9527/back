/**
 * Created by momo on 2017/11/13.
 */
declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}
declare module "*.html" {
  let template: string;
  export default template;
}
