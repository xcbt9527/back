/**
 * Created by momo on 2017/11/26.
 */

export class articlemodel {

  constructor() {
  };

  /**
   * 编号id
   */
  id: number = 0;
  /**
   * 作者id
   */
  userid: number = 0;
  /**
   * 标题
   */
  title: string = null;
  /**
   * 内容
   */
  content: string = null;
  /**
   * 状态 >1为有效
   */
  state: number = 0;
  /**
   * 外链接地址
   */
  article_link: string = null;
  /**
   * 创建日期
   */
  createtime: string = null;
}
