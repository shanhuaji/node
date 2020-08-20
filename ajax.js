/* $ajax({
    type: "post",
    url: "http://127.0.0.1/JS2004/test/php/table.php",
    // 传输的值
    data: {
      name: account.value,
      age: oPass.value,
    },
    async: "true",
  }).then((date) => {
    //   then成功返回的数据
    console.log(date);
  }); */

  function $ajax(option) {
    let promise = new Promise((resolve, reject) => {
      let ajax = new XMLHttpRequest();
      /* 传值就是post 否则默认get */
      option.type = option.type || "get";
      /* 判断网址是否存在 */
      if (!option.url) {
        throw new Error("请输入正确的接口地址");
      }

      if (option.data) {
        /* 找到对象类型中的最后一个object */
        if (
          Object.prototype.toString.call(option.data).slice(8, -1) ===
          "Object"
        ) {
          option.data = objtostring(option.data).slice(0, -1);
        }
      }
      /* 时间戳，减少缓存问题 */
      let date = new Date().getTime()
      option.url += "?" +date+"&"
      if (option.data && option.type === "get") {
        option.url += option.data;
      }
     
      /* 同步还是异步 */
      if (option.async === false || option.async === "false") {
        option.async = false;
      } else {
        option.async = true;
      }

      ajax.open(option.type, option.url, option.async);

      /* 发送数据 */
      if (option.data && option.type === "post") {
        ajax.setRequestHeader(
          "Content-type",
          "application/x-www-form-urlencoded"
        );
        ajax.send(option.data);
      } else {
        ajax.send();
      }
      /* 外部接收后台的返回数据 */
      if (option.async) {
        ajax.onreadystatechange = function () {
          if (ajax.readyState === 4) {
            if (ajax.status === 200) {
              resolve(ajax.responseText);
            } else {
              reject("请输入正确的接口地址");
            }
          }
        };
      } else {
        /* 同步 */
        if (ajax.status === 200) {
          /* 验证success是不是一个函数 */
          resolve(ajax.responseText);
        } else {
          reject("请输入正确的接口地址");
        }
      }
    });

    return promise;
  }
  /* 对象转为字符串  通过send发送 */
  function objtostring(obj) {
    let arr = [];
    for (let value in obj) {
      arr.push(value + "=" + obj[value] + "&");
    }
    return arr.join("");
  }
