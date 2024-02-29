var arr = [3, 5, 2, 4, 6, 10, 7];

// find min
// function findMin(arr){
//     var min = arr[0];
//     length = 0;
//     for (let i = 0; i < arr.length; i++) {
//        if(min > arr[i]){
//         min = arr[i]
//        }
//     }
//     return min;
// }
// console.log(findMin(arr));

//console.log(findMin(arr));

// // find max
// function findMax (arr){
//     var max = arr[0] ;
//     var length= 0;
//     for (var i = 0; i < arr.length; i++) {
//         if(max < arr[i] )
//         {
//             max = arr[i];
//         }
//     }
//     return max;
// }
//  console.log(findMax(arr));

 // arrange array min -> max

    var length = 0;
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1 ; j < arr.length; j++) {
        if(arr[i]> arr[j]){
            // var tam = arr[i];
            // arr[i] = arr[j];
            // arr[j] = tam;
            HoanVi(arr[i], arr[j])
        }
      }
    }


 console.log(arr);



