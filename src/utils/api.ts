/**
 * Created by baird on 17/11/15.
 */
const user = "/api/user/";
const shop = "api/shop/";
export default {
  //===========================用户===============================================//
  login: user + "login",  //登录
  getAlluser: user + 'getAlluser',  //获取所有用户
  DeleteRecorduser: user + 'DeleteRecord',//修改状态
  SaveRecorduser: user + 'SaveRecord',  //保存信息
  ModifyRecorduser: user + 'ModifyRecord', //修改密码

  //===========================商品================================================//
  getAllshop: shop + 'getAllshop',  //获取所有商品
  DeleteRecordshop: shop + 'DeleteRecord',//修改状态
  SaveRecordshop: shop + 'SaveRecord',  //保存信息
  //===========================文章================================================//
  articleall: shop + "articleall",  //获取所有文章
  getarticleRecord: shop + "getRecord", //获取单条文章
  SavearticleRecord: shop + "SaveRecord",  //保存文章
  delectarticleRecord: shop + "delectRecord",  //删除文章
}
