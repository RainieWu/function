/*
	参  数：数值，整数或小数
	返回值: 数值，两个数相加的结果
*/
function accAdd(num1, num2) {
    try {
        var decimalLength1 = num1.toString().split(".")[1].length;
    } catch(e) {
        var decimalLength1 = 0;
    }
    try {
        var decimalLength2 = num2.toString().split(".")[1].length;
    } catch(e) {
        var decimalLength2 = 0;
    }
    var multiple = Math.pow(10, Math.max(decimalLength1, decimalLength2));
    return (num1 * multiple + num2 * multiple) / multiple;
}