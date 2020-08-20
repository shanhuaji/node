

// var ops = {
//     prev: this.prev,/* 前一页 */
//     next: this.next,/* 后一页 */
//     pageCont: this.pageCont,/* 前一页和后一页之间装页码的div */
//     date: this.res,/* 查询数据库并返回的所有内容 转换的对象 */
//     num: 3,/* 一页显示几行 */
//     index: 0, /* 页码 */
//     cont: this.tbcontent,/* tobody */
//   };
//   new Page(ops);


class Page {
  constructor(ops) {
    this.prev = ops.prev;
    this.next = ops.next;
    this.pageCont = ops.pageCont;
    this.date = ops.date;
    this.num = ops.num;
    this.index = ops.index || 0;
    this.cont = ops.cont;
    this.init();
    this.addEvent();
    this.display();
  }
  init() {
    /* this.date. 所有的tobody中的tr */
    /* num 一页中放几行 得出页码 */
    this.maxNum = Math.ceil(this.date.length / this.num);
    // console.log(this.pageCont)
    var str = "";
    for (var i = 0; i < this.maxNum; i++) {
      str += `<li class="page-link">${i + 1}</li>`;
      // str += `<li class="page-item" index="${i}"><a class="page-link">${i+1}</a></li>`;
    }

    this.pageCont.innerHTML = str;
    this.setActive();
  }
  setActive() {
    /* this.pageCont   页码li的父元素 */
    this.pageCont.children[0].style.backgroundColor = "red";
    // for (let i = 0; i < this.pageCont.children.length; i++) {
      // this.pageCont.children[i].className="page-item"
    // }
    // this.pageCont.children[this.index].className="page-item active"
    // console.log(this.pageCont.children)
  }
  addEvent() {
    var that = this;
    /* 上一页 */
    this.prev.addEventListener("click", function () {
      that.index--;
      if (that.index < 0) {
        that.index = 0;
      }
      that.colors();
      that.display();
      // console.log(that.index)
    });
    /* 下一页 */
    this.next.addEventListener("click", function () {
      that.index++;
      if (that.index > that.maxNum - 1) {
        that.index = that.maxNum - 1;
      }
      that.colors();
      that.display();
      console.log(that.index);
    });
    /* 点击页码 */
    for (let i = 0; i < this.pageCont.children.length; i++) {
      this.pageCont.children[i].onclick = function () {
        that.index = i;
        that.colors();
        that.display();
      };
    }
  }
  display() {
    var str = "";
    for (var i = this.num * this.index; i < this.num * this.index + 3; i++) {
      if (i < this.date.length) {
        // console.log(this.date[i].id)
        str += `<tr>
                    <td>${this.date[i].id}</td>
                    <td>${this.date[i].peopleName}</td>
                    <td>${this.date[i].sex}</td>
                    <td>${this.date[i].className}</td>
                    <td class="rem"><button class="btn btn-primary" id="gem">删除</button></td>
                    <td class="modify"><button type="button" class="btn btn-primary" id="change" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">修改</button></td>
                  </tr> `;
      }
    }
    tbcontent.innerHTML = str;
  }
  /* 页码变换的颜色 */
  colors() {
    for (var j = 0; j < this.pageCont.children.length; j++) {
      this.pageCont.children[j].style.backgroundColor = "";
    }
    this.pageCont.children[this.index].style.backgroundColor = "red";
  }
}
