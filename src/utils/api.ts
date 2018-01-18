/**
 * Created by baird on 17/11/15.
 */
const user = "/api/user/";
const shop = "api/shop/";
const classification = "api/classification/";
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
  //===========================分类================================================//
  getAllclassification: classification + 'getAllclassification',  //获取所有分类
  getclassification: classification + 'getclassification',//修改分类
  Delectclassification: classification + 'Delectclassification',  //删除分类
  Saveclassification: classification + 'Saveclassification',  //保存分类
}
