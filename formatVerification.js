/*
	功  能：对手机号码进行格式验证
	参  数：必选，字符串，手机号码
	返回值: 对象，手机号码验证的结果
		{
			isCorrect: true,			// 布尔值，手机号码验证的结果标记
			msg: "手机号码格式正确"		// 字符串，手机号码验证的信息
		}
*/
function phoneNumValid(num) {
    var result = {
        isCorrect: true,
        msg: "手机号码格式正确"
    };
    if(!num) {
    	result.isCorrect = false;
    	result.msg = "手机号码为空";
	} else if(num.length != 11) {
    	result.isCorrect = false;
		result.msg = "手机号码位数错误";
	} else if(!/^1[0-9]{10}$/.test(num)) {
    	result.isCorrect = false;
		result.msg = "手机号码格式错误";
	}
    return result;
}


/*
	功  能：对邮箱地址进行格式验证
	参  数：必选，字符串，邮箱地址
	返回值: 对象，邮箱地址验证的结果
		{
			isCorrect: true,			// 布尔值，邮箱地址验证的结果标记
			msg: "邮箱地址格式正确"		// 字符串，邮箱地址验证的信息
		}
*/
function emailAddressValid(email) {
    var result = {
        isCorrect: true,
        msg: "邮箱地址格式正确"
    };
    if(!email) {
    	result.isCorrect = false;
    	result.msg = "邮箱地址为空";
	} else if(!/^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/.test(email)) {
    	result.isCorrect = false;
		result.msg = "邮箱地址格式错误";
	}
    return result;
}


/*
	功  能：对身份证进行格式、地址编码和校验位的验证
	参  数：必选，字符串，身份证号码
	返回值: 对象，身份证号码验证的结果
		{
			isCorrect: true,			// 布尔值，身份证号码验证的结果标记
			msg: "身份证号码格式正确"	// 字符串，身份证号码验证的信息
		}
*/
function identityCodeValid(code) {
    var result = {
        isCorrect: true,
        msg: "身份证号码格式正确"
    };
    var city = {11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古", 21: "辽宁", 22: "吉林", 23: "黑龙江", 31: "上海", 32: "江苏", 33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东", 41: "河南", 42: "湖北", 43: "湖南", 44: "广东", 45: "广西", 46: "海南", 50: "重庆", 51: "四川", 52: "贵州", 53: "云南", 54: "西藏", 61: "陕西", 62: "甘肃", 63: "青海", 64: "宁夏", 65: "新疆", 71: "台湾", 81: "香港", 82: "澳门", 91: "国外"};
    if(!code) {
        result.isCorrect = false;
        result.msg = "身份证号码为空";
    } else if(!(/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(code))) {
        result.isCorrect = false;
        result.msg = "身份证号码格式错误";
    } else if(!city[code.substr(0, 2)]) {
        result.isCorrect = false;
        result.msg = "地址编码错误";
    } else {
        // 18位身份证验证最后一位校验位
        if(code.length == 18) {
            code = code.split("");
            // 加权因子
            var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
            // 校验位
            var parity = [1, 0, "X", 9, 8, 7, 6, 5, 4, 3, 2];
            var sum = 0, ai = 0, wi = 0;
            for(var i = 0; i < 17; i++) {
                ai = code[i];
                wi = factor[i];
                sum += ai * wi;
            }
            if(parity[sum % 11] != code[17]) {
                result.isCorrect = false;
                result.msg = "校验位错误";
            }
        }
    }
    return result;
}