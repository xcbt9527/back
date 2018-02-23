/**
 * Created by baird on 17/11/15.
 */
const api = "/api/";
const user = api + "user/";
const shop = api + "shop/";
const menu = api + "menu/";
const classification = api + "classification/";
const publiclib = api + "public/";
const roles = api + "roles/";
const notepad = api + "notepad/";
/**
 * 书本架构
 */
const book = ['bookframework/', 'chapter/', 'exercuses'];
const bookframework = api + book[0];
const chapter = api + book[1];
const exercuses = api + book[2];
export default {

  /**
   * 公用
   */
  getuid: publiclib + "getuid",  //获取key（唯一id）
  /**
   * 用户
   */
  login: user + "login",  //登录
  getAlluser: user + 'getAlluser',  //获取所有用户
  DeleteRecorduser: user + 'DeleteRecord',//删除
  SaveRecorduser: user + 'SaveRecord',  //保存信息
  ModifyRecorduser: user + 'ModifyRecord', //修改密码
  /**
   * 商品
   */
  getAllshop: shop + 'getAllshop',  //获取所有商品
  DeleteRecordshop: shop + 'DeleteRecord',//修改状态
  SaveRecordshop: shop + 'SaveRecord',  //保存信息
  /**
   * 分类
   */
  getAllclassification: classification + 'getAllclassification',  //获取所有分类
  getclassification: classification + 'getclassification',//获取分类
  Delectclassification: classification + 'Delectclassification',  //删除分类
  Saveclassification: classification + 'Saveclassification',  //保存分类
  getTreeclassification: classification + 'getTreeclassification',  //获取树分类
  /**
   * 菜单栏
   */
  getAllmenu: menu + 'getAllmenu',  //获取所有菜单
  getmenu: menu + 'getmenu',//获取菜单
  Delectmenu: menu + 'Delectmenu',  //删除分菜单
  Savemenu: menu + 'Savemenu',  //保存菜单
  getTreemenu: menu + 'getTreemenu', //获取树状菜单
  /**
   * 权限控制
   */
  getAllroles: roles + 'getAllroles',  //获取所有权限
  getTreeroles: roles + 'getTreeroles',//获取树状权限
  getroles: roles + 'getroles',  //获取单条
  Delectroles: roles + 'Delectroles',  //删除
  Saveroles: roles + 'Saveroles', //保存

  /**
   * 记事本
   */

  getAllnotepad: notepad + 'getAllnotepad',  //获取所有信息
  getnotepad: notepad + 'getnotepad',  //获取单条
  Delectnotepad: notepad + 'Delectnotepad',  //删除
  Savenotepad: notepad + 'Savenotepad', //保存
  /**
   * 书本
   */
  getAllbookframework: bookframework + 'getAll',  //获取所有信息
  getbookframework: bookframework + 'getOne',  //获取单条
  Delectbookframework: bookframework + 'Delect',  //删除
  Savebookframework: bookframework + 'Save', //保存
  /**
   * 书本
   */
  getAllchapter: chapter + 'getAll',  //获取所有信息
  getAlltreechapter: chapter + 'getAlltree',  //获取树形结构
  getchapter: chapter + 'getOne',  //获取单条
  Delectchapter: chapter + 'Delect',  //删除
  Savechapter: chapter + 'Save', //保存
  /**
   * 书本
   */
  getAllexercuses: exercuses + 'getAll',  //获取所有信息
  getexercuses: exercuses + 'getOne',  //获取单条
  Delectexercuses: exercuses + 'Delect',  //删除
  Saveexercuses: exercuses + 'Save', //保存
}
