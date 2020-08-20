


/* type传送方式  url文件地址  sucess返回结果  date发送参数 */
/* get或post情况下使用 */
threeinOne({
    type: "get",
    url: "date.php",
    sucess: res=> {},
    date: {
      name: "admin",
      age: 18,
    },
  });
/* jionp情况下使用 */
  /* threeinOne({
    type: "jsonp",
    url: this.url,
    sucess: (res) => {
      this.res = res.s;
      this.display();
    },
    date: {
      wd: this.val,
      cb: "askdjghasjd",
      dateName: "cb",
    },
  }); */





function threeinOne({type,url,sucess={},date}){
    var str=""
    for(var prop in date){
        str+=`${prop}=${date[prop]}&`
    }
    if(type==="get" || type==="jsonp"){
        // url = url + "?shan=" + new Date().getTime() + "&"+str;
        url=url+"?"+str+"_shan"+new Date().getTime()
    }
    if(type==="get" || type==="post"){
        var xhr=new XMLHttpRequest()
        xhr.open(type,url,true)
        xhr.onload=function(){
            if(xhr.status===200){
                sucess(xhr.responseText)
            }
        }
        if(type==="get"){
            console.log("get")
            xhr.send()
        }else if(type==="post"){
            console.log("post")
            xhr.setRequestHeader( "Content-type","application/x-www-form-urlencoded");
            xhr.send(str)
        }
    }else if(type==="jsonp"){
        console.log("jsonp")
        var script=document.createElement("script")
        script.src=url
        document.body.appendChild(script)
        window[date[date.dateName]]=function(res){
            sucess(res)/* 利用函数传参将后台传回的数据传出去 */
        }
    }
    
}