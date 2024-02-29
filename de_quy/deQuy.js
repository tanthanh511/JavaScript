// EX: input: var a = ['a','a','b','c','c']
// output:  var a = ['a', 'b', 'c']
// có một cách giải quyết đó là dùng hàm Set trong JS KQ trả về là đối tượng

 var arr = ['a','a','b','c','c'];
// console.log([...(new Set(a))]);

function deleteElementLoop (arr){
    var seen = {}
    var kq = [];
    for (let i = 0; i < arr.length; i++) {
        var item = arr[i]
        console.log( arr[i]);
        if(!seen[item] ){
            seen[item]= true;
            kq.push(item);
        }
    }
    return kq;  
}
var re =deleteElementLoop(arr)
console.log(re);

//EX: đếm ngược từ 10 -1 

// function countDown(num){
//     if(num>0){
//         console.log(num);
//         return countDown(num - 1 );
//     }
//     return num;
// }

// countDown(5);


// Giai thừa 
// function giaiThua(num){
//     if (num > 0) {
//         return num * giaiThua(num - 1);
//     }
//     return 1;
// }

// console.log(giaiThua(6));