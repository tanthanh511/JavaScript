// //lấy ra từng phần tử của mảng 
// var language = 'abcdegh';

// for (const value of language) {
//     console.log(value)
// }

//Lưu ý không dùng để lặp đối tượng (có cách khách để có thể lặp được object )
var User = {
        name: 'tan thanh',
        age: 18
}

for (const value of Object.values(User)) {
    console.log(value);
    console.log(UserArr[value]);
}

for (var value of Object.keys(User)) {
    console.log(User[value]);
}