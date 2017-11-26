/**
 * Created by momo on 2017/11/26.
 */

export class Usermodel {

  id: number = 0;
  /**
   * 登录名
   */
  loginname: string = null;
  /**
   * 名称
   */
  name: string = null;
  /**
   * 性别
   */
  sex: number = null;
  /**
   * 状态
   */
  state: number = null;
  /**
   *权限
   */
  jurisdiction: number = null;
  /**
   * 最后登录时间
   */
  lastlogintime: string = null;
  /*
   * session ID
   * */
  session_store: string = null;
}
