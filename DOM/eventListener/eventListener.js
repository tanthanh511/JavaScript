// 1. DOM event/ event listener
var btn = document.getElementById("btn");
// btn.onclick = function(){
//     console.log(' viec 1 ');
//     console.log('viec 2');
//     alert(' viec 3')
// }
// setTimeout(function(){
//    btn.onclick = function(){}
// }, 3000)

// add & remove

// c1
// btn.addEventListener('click', function(e){
//     console.log(Math.random());
// })

//c2: có thể có nhieefu hàm addEvent để bắt sự kiện liên tục 
function ham1() {
  console.log("viec 1");
}
function ham3() {
  console.log("viec 1");
}
function ham2() {
  console.log("viec 1");
}
btn.addEventListener("click", ham1, ham2, ham3);

setTimeout(function(){
    btn.removeEventListener('click', ham3)
}, 3000)

//JSON 
var json = '{"name":"sonDang"}'

// Stringify : từ JS type -> JSON