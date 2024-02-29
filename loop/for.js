/*
    Vòng lặp - Loop 
- for : Lặp với điều kiện đúng 
- for/in: lặp qua key của đối tượng 
- for/of: lặp qua value của đối tượng 
- while: Lặp khi điều kiện đúng 
- do/while: lặp ít nhất 1 lần, sau lặp theo điều kiện đúng 
*/

//EX1
function getRandNumbers( len, min, max){
    var arr = [];
    for(let i = 0; i < len; i++){
     arr.push(Math.floor( Math.random() * (max - min) + min));
    }
    return arr;
}

var len = 5;
var min = 1 ;
var max = 6;

console.log(getRandNumbers(len, min,max))

//EX2

var arr = ["hi", "ha", "ho", "he", "hic"];

var arrLength = arr.length;
for (var i = 0; i < arrLength; i++) {
  console.log(arr[i]);
}


// EX ngược từ 100-1
for (let i = 100; i >1; i--) {
  console.log(i);
}

// EX cong them 5 vao moi gia tri
for (let i = 0; i < 100; i+=5){
  console.log(i);
}