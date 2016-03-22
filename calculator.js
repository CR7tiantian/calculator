var result = document.getElementById("result");
var dot = document.getElementById("dot");
var sum = document.getElementById("sum");
var reduce = document.getElementById("reduce");
var multiply = document.getElementById("multiply");
var division = document.getElementById("division");
var equal = document.getElementById("equal");
var flag = 1; //为零的时候清空文本框，每次点击"="后会将flag设置为0
result.focus(); //文本框获取焦点

//  点击数字出现在文本框
var click = function(event) {
	if (flag == 0) {
		result.value = "";
	}
	flag = 1;
	result.value = result.value + event.target.value;
	return result.value;
};

//  点击数字按钮函数
function count() {
	for (var i = 0; i < 10; i++) {
		document.getElementById(i).onclick = click;
	}
};
count();

//  清零按钮函数
document.getElementById("reset").onclick = function() {
	result.value = ""
};

//  "."按钮
dot.onclick = function() {
	if (flag == 0) {
		result.value = "";
	}
	flag = 1;
	if (result.value.length == 0) {
		result.value = "0";
	}
	result.value = result.value + dot.value;
};

//  加法
sum.onclick = function() {
	var result1 = result.value;
	result.value = "";
	count();
	equal.onclick = function() {
		var result2 = result.value;
		result.value = Number(result1) + Number(result2);
		flag = 0;
	}
};

//  减法
reduce.onclick = function() {
	var result1 = result.value;
	result.value = "";
	count();
	equal.onclick = function() {
		var result2 = result.value;
		result.value = Number(result1) - Number(result2);
		flag = 0;
	}
};

// 乘法
multiply.onclick = function() {
	var result1 = result.value;
	result.value = "";
	count();
	equal.onclick = function() {
		var result2 = result.value;
		result.value = Number(result1) * Number(result2);
		flag = 0;
	}
};

// 除法
division.onclick = function() {
	var result1 = result.value;
	result.value = "";
	count();
	equal.onclick = function() {
		var result2 = result.value;
		if (result2 === "0") {
			result.value = "除数不能为零";
		} else {
			result.value = Number(result1) / Number(result2);
		}
		flag = 0;
	}
};

//  百分号
persent.onclick = function() {
	if (result.value !== "") {
		result.value = Number(result.value) / 100
	}
};

// 负号
reverse.onclick = function() {
	if (result.value !== "") {
		result.value = -Number(result.value);
	}
}
