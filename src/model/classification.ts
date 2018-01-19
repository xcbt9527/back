/**
 * Created by momo on 2017/11/26.
 */

export default class classificationmodel {

  constructor() {
  };

  /**
   * id
   */
  AutoId: number = 0;
  /**
   * 名称
   */
  label: string = null;
  /**
   * 上一级id
   */
  upperlevel: number = null;
  /**
   * 状态 1为正常，0为已删除
   */
  status: number = 1;
  /**
   * 编号
   */
  Code: string = null;
  /**
   * 树结构对象
   */
  children: childrenmodel[] = [];
}
class childrenmodel {
  /**
     * id
     */
  AutoId: number = 0;
  /**
   * 名称
   */
  label: string = null;
  /**
   * 上一级id
   */
  upperlevel: number = 0;
  /**
   * 状态 1为正常，0为已删除
   */
  status: number = 1;
  /**
  * 编号
  */
  Code: string = null;
  /**
   * 树结构对象
   */
  children: childrenmodel[] = [];
}
