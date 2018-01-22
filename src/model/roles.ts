
export default class rolesmodel {
    /**
     * 自增长id
     */
    AutoId: number = 0;
    /**
     * 菜单栏名称
     */
    label: string = null;
    /**
     * 唯一ID
     */
    Uid: string = null;
    /**
     * 上一级
     */
    upperlevel: number = 0;
    /**
     * 菜单地址
     */
    link: string = null;
    /**
     * icon
     */
    icon: string = null;
    /**
     * 所有菜单栏
     */
    menu_roles: string = null;
}