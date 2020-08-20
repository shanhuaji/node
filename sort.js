/* 选择排序 */
function selectSort(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0; i < arr.length; i++) {
      var minIndex = i;
      var min = arr[minIndex];
      for (var j = i + 1; j < arr.length; j++) {
        if (arr[minIndex] > arr[j]) {
          minIndex = j;
          arr[minIndex] = arr[j];
        }
      }
      if (minIndex !== i) {
        var temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
      }
    }
    return arr;
  } else {
    throw new Error("请输入数组"); /* 报错 */
  }
}
/* 冒泡排序 */
function bubbleSort(arr) {
  /* 判断是不是数组 */
  if (Array.isArray(arr)) {
    for (var i = 0; i < arr.length - 1; i++) {
      for (var j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          var temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  } else {
    throw new Error("请输入数组"); /* 报错 */
  }
}
/* 快速排序 */
function quickSort(arr) {
  if (arr.length < 1) return arr;
  var middle = parseInt(arr.length / 2);
  var basic = arr.splice(middle, 1);
  var left = [];
  var right = [];
  for (var i = 0; i < arr.length; i++) {
    if (basic[0] > arr[i]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  /* left是小元素数组  right是大元素的数组 basic[0]单独取出的基点数 */
  return quickSort(left).concat(basic[0], quickSort(right));
}
