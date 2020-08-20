
/* parabola(开始元素, 目标元素) */

/* y = a * x * x + b * x;
      b = (y - a * x * x) / x; */
/* y=移动的距离left */
//   b是数学公式  固定不动的，x，y=两个元素之间的距离
//  a是抛物线的弧度 0.001——0.009
function parabola(elem1, elem2) {
  let time;
  clearInterval(time);
  /* 获取运动元素的left和top */
  let elem1_position = {
    x: elem1.offsetLeft,
    y: elem1.offsetTop,
  };
  /* 两个元素之间的距离 */
  let difference = {
    /* 目标位置的距离-开始位置的距离 =需要运动的距离*/
    x: elem2.offsetLeft - elem1.offsetLeft,
    y: elem2.offsetTop - elem1.offsetTop,
  };
  let a = 0.001;
  /* b在公式中是静止的 固定的值 */
  let b = (difference.y - a * difference.x * difference.x) / difference.x;
  let x = 0; /* 移动的距离 */

  time = setInterval(() => {
    if (elem1.offsetLeft === elem2.offsetLeft) {
      clearInterval(time);
    } else {
      x += 4;
      /* x,y是坐标的原点，所以要加上元素开始的left和top */
      elem1.style.left = elem1_position.x + x + "px";
      elem1.style.top = elem1_position.y + (a * x * x + b * x) + "px";
    }
  }, 16);
}
