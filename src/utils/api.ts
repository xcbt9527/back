/**
 * Created by baird on 17/11/15.
 */
const user = "/api/user/";
const article = "api/article/";
export default {
  //===========================用户===============================================//
  login: user + "login",  //登录
  //===========================文章================================================//
  articleall: article + "articleall",  //获取所有文章
  getarticleRecord: article + "getRecord", //获取单条文章
  SavearticleRecord: article + "SaveRecord",  //保存文章
  delectarticleRecord: article + "delectRecord",  //删除文章
}
