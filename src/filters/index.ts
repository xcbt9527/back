import utils from 'utils';
import momentLib from 'moment';


/**
 * 
 * @param value 过滤的值
 * @param display 
 */
export function moment(value: string, display: string) {
    let newDate = momentLib(value);
    if (newDate.isValid()) {
        if (display === undefined)
            display = "YYYY-MM-DD";
        return newDate.format(display);
    } else
        return value;

}