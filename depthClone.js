/*
	参  数：任何数据类型
	返回值：对应参数的数据类型，深拷贝后的结果
*/
function depthClone(obj) {
	if(typeof obj == "object") {
		if(obj instanceof Function) {
			return obj;
		} else if(obj instanceof Array) {
			var result = [];
			for(var i = 0; i < obj.length; i++) {
				result[i] = arguments.callee(obj[i]);
			}
			return result;
		} else {
			var result = {};
			var keys = Object.keys(obj);
			for(var i = 0; i < keys.length; i++) {
				result[keys[i]] = arguments.callee(obj[keys[i]]);
			}
			return result;
		}
	} else {
		return obj;
	}
}