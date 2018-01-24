
export default class notepadmodel {
    /**
     * 自增长id
     */
    AutoId: number = 0;
    /**
     * 菜单栏名称
     */
    label: string = null;
    /**
     * 文本内容
     */
    content: string = '';
    /**
     * 状态
     */
    status: number = 0;
    /**
     * 提醒时间
     */
    remindingtime: string = null;
}