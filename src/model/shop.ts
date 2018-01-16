/**
 * Created by momo on 2017/11/26.
 */

export class ShopModel {
    /*
    *ID
    */
    AutoId: number = 0;
    /**
     * 详情页图片
     */
    details: string = null;
    /**
     * 商品图片
     */
    picture: string = null;
    /**
     * 状态 1为有效，0为无效
     */
    state: number = 1;
    /**
     * 标题
     */
    title: string = null;
}
