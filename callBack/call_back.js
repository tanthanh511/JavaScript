// Call Back 
// là hàm 
// được truyên qua đối số 
// là hàm lồng trong hàm 

// function myFunction(param){
//     if(typeof param === 'function'){
//         param("hoc lap trinh");
//     } 
// }

// function myCallBack(value){
//     console.log('value ' + value);
// }

// myFunction(myCallBack)

Array.prototype.map2 = function(CallBack){
    var arrayLength = this.length;
    for (let i = 0; i < arrayLength; i++) {
        CallBack(this[i]);
    }
}
var courses = [
    'js',
    'react',
    'nodejs',
    'c#',
]

console.log(courses.map2((index)=>{
    console.log(index);
}));