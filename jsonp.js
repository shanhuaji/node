// jsonp("jsonp.php",function(res){
//     /* res就是后台传回的数据 */
//     console.log(res)
// },{
//     a:10,/* 传到后台的属性和值 */
//     b:20,/* 传到后台的属性和值  */
//     qwe:"cb",/* qwe是传到后台的属性 */
//     dateName:"qwe"/* 上边的属性qwe更改 此处必须更改 */
// })

function jsonp(url,cb,date){
    var str=""
    for(var prop in date){
        str+=`${prop}=${date[prop]}&`
    }
    var script=document.createElement("script")
    script.src=url+"?"+str+"_shan="+new Date().getTime()
    document.body.appendChild(script)
    window[date[date.dateName]]=function(res){
        cb(res)/* 利用函数传参将后台传回的数据传出去 */
    }

}