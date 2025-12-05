/**
* 获取当前时间 xxxx-xx-xx
*/
function getDate(selectedDate) {
    let today = selectedDate;
    let year = today.getFullYear();
    let month = (today.getMonth() + 1).toString().padStart(2, '0'); // 月份从0开始，所以要加1，并确保是两位数
    let day = today.getDate().toString().padStart(2, '0');
    return date = `${year}-${month}-${day}`;
}

/**
 * 获取中文日期
 */
function getChineseDate(selectedDate) {
    let today = selectedDate;
    let year = today.getFullYear();
    let month = (today.getMonth() + 1).toString().padStart(2, '0'); // 月份从0开始，所以要加1，并确保是两位数
    let day = today.getDate().toString().padStart(2, '0');
    return date = `${year}年${month}月${day}日`;
}

/**
 * 判断是否是小数
 * @param {*} num 
 * @returns 
 */
function isDecimal(num) {
    // 转换为数字后判断是否为有限数字且包含小数部分
    const parsedNum = parseFloat(num);
    return !isNaN(parsedNum) && isFinite(parsedNum) && parsedNum % 1 !== 0;
}

/**
 * 获取前n天日期
 * @param {*} n 
 * @returns 
 */
function getPreviousDay(selectedDate, n) {
    // 创建一个新的Date对象（默认为当前日期）
    let date = selectedDate;

    // 将日期设置为前n天
    let previousDate = new Date(date);
    previousDate.setDate(date.getDate() - n);

    // 获取月、日
    let month = previousDate.getMonth() + 1; // 月份从0开始，需要加1
    let day = previousDate.getDate();

    // 返回日期字符串
    return `${month}月${day}日`; //07月17日
}

/**
 * 获取前n个月
 * @param {*} n 
 * @returns 
 */
function getPreviousMonth(selectedDate, n) {
    // 创建一个新的Date对象（默认为当前日期）
    let date = selectedDate;

    let previousMothDate = new Date(date);

    previousMothDate.setMonth(previousMothDate.getMonth() - n);

    return previousMothDate.toLocaleDateString('zh-CN', { month: '2-digit' });
}