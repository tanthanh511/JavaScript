// vòng lặp lồng để có thể lấy ra giá trị trong mảng đó
var myArr =[
    [1,2],
    [3,4],
    [5,6]
]
var length = 0
for (var i = 0; i < myArr.length; i++) {
    for (var j = 0; j < myArr[i].length; j++) {
     console.log(myArr[i][j]);   
    }
}

