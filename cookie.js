let obj = {
    setCookie(key, value, day) {
      let date = new Date();
      date.setDate(date.getDate() + day);
      /* 给值中的特殊符号编码 */
        document.cookie = `${key}=${encodeURIComponent(value)};expires=${date};path=/`;
    },
    /* 获取cookie相应的值  key是值 */
    getCookie(key) {
      /* 获取cookie中所有的属性和值，从; 分割成数组 */
      /* 给值中的特殊符号解码 */
      let arr = decodeURIComponent(document.cookie).split("; ");
      /* 遍历分割后的数组 */
      for (let i of arr) {
        /* 从=开始分割 */
        let newArr = i.split("=");
        /* 输入的值等于cookie的键值 */
        if (key === newArr[0]) {
          /* 返回相应的属性 */
          return newArr[1];
        }
      }
    },
    /* 删除 */
    /* key删除的cookie中的属性 */
    deCookie(key, value) {
      /* value可以存在也可以不存在 */
      if (value === "undefined") value = 0;
      this.setCookie(key, value, -1);
    },
  };

//   obj.setCookie("添加的属性","值","时间")
//   /* 查询属性对应的值 */
//   obj.getCookie("查询的属性")
//   obj.deCookie("删除的属性")