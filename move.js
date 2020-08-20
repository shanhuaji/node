function move(elem, obj, fn) {
  /* elem.time 给每一元素（elem）添加一个属性（定时器） */
  clearInterval(elem.time);
  var num;
  elem.time = setInterval(() => {
    var bool = true;
    for (let prop in obj) {
      if (prop === "opacity") {
        /* 透明度  因为下边num的变化的速度要/10  透明度扩大100倍 */
        var elemStyle = getStyle(elem, prop) * 100;
      } else {
        var elemStyle = parseInt(getStyle(elem, prop));
      }
      /* 速度  目标距离-实施距离  越近值越小  变化的就越慢 */
      num = (obj[prop] - elemStyle) / 20;
      num = num > 0 ? Math.ceil(num) : Math.floor(num);
      if (obj[prop] !== elemStyle) {
        bool = false;
        if (prop === "opacity") {
          /* 上边扩大了100倍  赋值的时候要缩小100倍 */
          elem.style[prop] = (elemStyle + num) / 100;
          // console.log(elemStyle + num)
        } else {
          elem.style[prop] = elemStyle + num + "px";
          /* bool = true; */
        }
        bool = false;
      }
    }
    /* 没有达到目标值，就一直是false，达到目标值了 停止计时器 */
    if (bool) {
      clearInterval(elem.time);
      console.log("结束了");
      if (fn !== undefined) {
        fn();
      }
    }
  }, 16);
}
/* 获取css属性 */
function getStyle(elem, attr) {
  if (window.getComputedStyle) {
    return window.getComputedStyle(elem, false)[attr];
  } else {
    return elem.currentStyle[attr];
  }
}

/* elem, obj, fn */
/* elem变化的元素  obj变换的属性和值  fn二次运动 可有可无 */
/* oBox.onmouseenter = function () {
  move(oBox, { width: 700, height: 500 }, function () {
    oBox.onmouseleave = function () {
      move(oBox, { width: 100, height: 100 });
    };
  });
}; */
