// // reduce 
// Array.prototype.reduce2 = function(callback, result){ 
//     let i = 0;
//     if(arguments.length < 2){
//         i = 1;
//         result = this[0];

//     }
//     for (; i < this.length; i++) { 
//        result= callback(result, this[i], i, this);        
//     }
//     return result;
// }

// const numbers = [1, 2, 3, 4, 5]
// const result = numbers.reduce2((total, number, index, array)=> {
//     console.log(total, number, index, array);
//     return total +number;
// })

// console.log(result);


// // some()


// Array.prototype.some2 = function(cb){
//     for(index in this){
//         if(this.hasOwnProperty(index)){
//            if( cb(this[index], index, this)){
//                 return true; 
//            }
//         }
//     }
//     return false;
// }

// Array.prototype.some3 = function(cb){
//     var output = true ;
//     for(index in this){
//         if(this.hasOwnProperty(index)){
//            if( cb(this[index], index, this)){
//                 output; 
//                 break;
//            }
//         }
//     }
// }

// var courses = [
//     {
//         name: 'thanh',
//         age: 10,
//         isCheck: true
//     },
//     {
//         name: 'vy',
//         age: 10,
//         isCheck: false
//     },
//     {
//         name: 'phu',
//         age: 10,
//         isCheck: true
//     }
// ]



// var result1 = courses.some2((course, i)=>{
//     console.log(course, i);
//     return course.isCheck;
// })

// console.log(result1);


// every()

var courses = [
    {
        name: 'thanh',
        age: 10,
        isCheck: true
    },
    {
        name: 'vy',
        age: 10,
        isCheck: true
    },
    {
        name: 'phu',
        age: 10,
        isCheck: true
    }
]


Array.prototype.every2 = function(cb){
    
    for( index in this){
        if(this.hasOwnProperty(index)){
           var result = cb(this[index], index, this)
           if(result != true ){
                return false
           }
        }
    }
    return true;
}

var result1 = courses.every2((course, i)=>{
    console.log(course, i);
    return course.isCheck;
})

console.log(result1);


