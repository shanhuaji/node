


/* 最大值和最小值 不包含max */
function randomNumber(max, min) {
	if (min === undefined) min = 0
	/* 如果最边的min改成1  随机颜色引用该函数就会出现问题   需要max是255  就默认加1=256  */
	return Math.floor(Math.random() * (max - min)) + min
}


/* 补零  正常数 */
function zeroFill(n1) {
	if (n1 < 10) {
		return "0" + n1;
	} else {
		return n1;
	}
}

/* 随机颜色2 */
function colors() {
	var str = "#";
	for (var i = 0; i < 6; i++) {
		/* 引用random函数写法 */
		str += randomNumber(16).toString(16);
		/* str += Math.floor(Math.random() * 16).toString(16); */
	}
	return str;
}

/* 验证码  */
/* num是几位数 */
function verificationCode(num) {
	var arr = [];
	for (var i = 48; i < 123; i++) {
		if (i > 57 && i < 65) continue;
		if (i > 90 && i < 97) continue;
		var a = String.fromCharCode(i); /* 编码转为字符 */
		arr.push(a); /* 字符放在数组中 */
	}
	arr.sort(function () {
		return Math.random() - 0.5; /* 数组乱序 获取随机值 */
	});
	arr.length = num; /* 改变数组长度 */
	var str = arr.join(""); /* 数组转换为字符 */
	return str;
}

/* 实时时间 */
function displayTime() {
	setInterval(function () {
		timeFormat();
	}, 1000);
}

function timeFormat() {
	var box = document.getElementById("box");
	var date = new Date();
	var year = date.getFullYear(); /* 年 */
	var months = date.getMonth() + 1; /* 月 */
	var da = date.getDate(); /* 日 */
	var hour = date.getHours(); /* 小时 */
	var minutes = date.getMinutes(); /* 分钟 */
	var secound = date.getSeconds(); /* 秒 */
	var str = year + "年" + zeroFill(months) + "月" + zeroFill(da) + "日" + zeroFill(hour) + "时" + zeroFill(minutes) + "分" +
		zeroFill(secound) + "秒"
	box.innerHTML = str; /* 时间放在div中 */
}



/* 返回顶部 */
/* 点击某个按钮  就可以执行这个函数 */
function goTop() {
	var a = setInterval(function () {
		if (document.documentElement.scrollTop <= 0) {
			clearInterval(a);
		} else {
			document.documentElement.scrollTop -= 20;
		}
	}, 16);
}

/* 提前完成渲染 取得css样式 */
/* ele 元素   attr属性  取得的值是带单位的 */
function getStyle(ele, attr) {
	if (window.getComputedStyle) {
		return window.getComputedStyle(ele, false)[attr];
	} else {
		return ele.currentStyle[attr];
	}
}

/* 防抖 */
// fn 需要执行的函数的内容
function shakeProof(fn) {
	var item
	return function () {
		clearTimeout(item)
		item = setTimeout(function () {
			fn()
		}, 1000)
	}
}
/* document.onclick = shakeProof(fn1) */

/* 包含最大值和最小值的随机值 不适合用于随机颜色 */
function randomNum(min, max) {
	/* 保证min是最小值 max是最大值 */
	if (min > max) {
		var item = min
		min = max
		max = item
	}
	return Math.floor(Math.random() * (max - min + 1)) + min
}


/* 获取元素 */
/* num传值，就可以获得多个元素，不传值，只获得一个元素 */
/* 利用num是否传值来判断获取一个元素或多个元素 */
function $(elem, num) {
	if (num === undefined) {
		return document.querySelector(elem);
	} else {
		return document.querySelectorAll(elem);
	}
}


/* 事件侦听 */
/* elem 侦听对象 type 事件类型  fn处理函数 */
function addEvent(elem, type, fn) {
	if (elem.addEventListener) {
		elem.addEventListener(type, fn, false)
	} else {
		elem.attachEVent("on" + type, fn)
	}
}

/* 删除事件侦听 */
function removeEvent(elem, type, fn) {
	if (elem.addEventListener) {
		elem.removeEventListener(type, fn, false);
	} else {
		elem.detachEvent("on" + type, fn);
	}
}

//  边界限定  elem就是移动的元素
function BoundaryLim(elem) {
	var x = document.documentElement.clientWidth;
	var y = document.documentElement.clientHeight;
	/* 上、左 */
	if (elem.offsetLeft <= 0) elem.style.left = 0 + "px";
	if (elem.offsetTop <= 0) elem.style.top = 0 + "px";
	/* 右，下 */
	if (elem.offsetLeft >= x - elem.offsetWidth) {
		elem.style.left = x - elem.offsetWidth + "px";
	}
	if (elem.offsetTop >= y - elem.offsetHeight) {
		elem.style.top = y - elem.offsetHeight + "px";
	}
}
