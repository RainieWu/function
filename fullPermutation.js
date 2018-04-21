/*
	参  数：数组
	返回值：一维数组，各排列结果的元素间用空格分割
*/
function fullPermutation(arr) {
	var result = [];
	if(arr.length == 1) {
		return arr;
	} else {
		for(var i = 0; i < arr.length; i++) {
			var tem = arr.slice();
			var left = tem[i];
			tem.splice(i, 1);
			var right = arguments.callee(tem);
			for(var j = 0; j < right.length; j++) {
				result.push(left + " " + right[j]);
			}
		}
		return result;
	}
}