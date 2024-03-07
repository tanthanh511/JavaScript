/*
1.Tạo mảng 
    - Cách tạo 
    - Sử dụng cách nào? Tại sao ?
    - Kiểm tra dât type
2.Truy xuất mảng 
    - độ dài mảng 
    - lấy phần tử theo index 
*/

// var text = [
//     'thanh',
//     'thắng',
//     'vỹ',
//     'du',
//     'đỏ',
//     null,
//     NaN,
//     function(){
//     },
//     {}
// ]
//console.log(Array.isArray(text));// cách kiểm tra mảng

// cách 2 không nên sử dụng bởi vì nó khởi tạo  nên sẽ tốn thời gian hơn
// var text = new Array(
//   "thanh",
//   "thắng",
//   "vỹ",
//   "du",
//   "đỏ",
//   null,
//   NaN,
//   function () {},
//   {}
// );
//console.log(text.length);// lấy độ dài mảng
//console.log(text[0]);// lấy phần tử index
//----------------------------------------
// làm việc với array
var language = ["JS", "HTML", "css"];

var language2 = ["JS", "HTML", "css"];
//console.log(language.toString());// chuyển đổi mảng sang chuỗi
//console.log(language.join(' - '));// chuyển đổi mảng sang chuỗi
//console.log(language.split()) // chuyển đổi chuổi thành mảng;
//console.log(language.pop());// xóa phần tử cuối mảng và trả về phần tử đã xóa
//console.log(language.shift());// xóa phần tử đầu mảng và trả về phần tử đã xóa
// console.log(language.push('Dart', 'python'));// thêm một hoặc nhiều phần tử vào cuối mảng và trả về độ dài mới của mảng
// console.log(language.unshift('java', 'php')); // thêm một phần tử vào đầu mảng và trả về độ dài mới của mảng
// console.log(language.splice(1,0,'hi')); // tham số đàu tiên là vị trí phàn tử, tiếp theo là vị trí end để xóa , cuối là phần tử muốn thêm  nếu muốn thêm một phần tử thì vị trí end đặt là 0
// console.log(language.concat(language2)); // nối mảng
// console.log(language.slice(1,2)); // cắt phần tử trong mảng

//ex
function getLastElement(array) {
  //return array[array.length-1]
  //return array.at(-1)
  //return array[1]
}

//console.log(getLastElement(language));


var arr = [7 ,69 ,2 ,221, 221,221]
//console.log(arr.sort((a,b) => a-b));
var arr1 =arr
let arr2 = [];
Array.prototype.push.apply(arr2, arr1);

function endArr(arr){
  arr.pop();
  
  var endArr = arr;
  //console.log(endArr);
   return endArr.reduce(function(total, arr ){
      return total += arr
  },0)
}

//console.log(endArr(arr1));

function firseArr(arr){
  arr.shift();
  var firseArr = arr;
  //console.log(firseArr);
   return firseArr.reduce(function(total, arr ){
      return total += arr
  },0)
}
//console.log(firseArr(arr2));


function lengthMaxSum(arr){
  var dem = 0;
  var newMax = Math.max(...arr)
  for (let i = 0; i < arr.length; i++) {
    if (newMax == arr[i]) {
      dem++
    }
  }
  console.log(dem);
}

lengthMaxSum(arr);



  



//console.log(miniMaxSum(arr1));
