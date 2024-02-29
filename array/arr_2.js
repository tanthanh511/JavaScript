/*
forEach():
every(): 
some():
find():
filter():
map();
reduce();
*/

var courses= [
    {
        id: 1,
        name:'JS',
        coin: 250
    },
    {
        id: 2,
        name:'React',
        coin: 290
    },
    {
        id: 3,
        name:'TypeScrip',
        coin: 280
    },
    {
        id: 4,
        name:'NodeJS',
        coin: 0
    },
    {
        id: 5,
        name:'HTML',
        coin: 0
    },
    {
        id: 6,
        name:'React',
        coin: 50
    }
]

// // forEach
// courses.forEach(function(course, i){
//     console.log(i, course);
// })

// // every: tất cả trong mảng phải thỏa mãn một điều kiện gì đó     
// courses.every(function(course, index){
//     if(course.coin <= 0 ){
//         console.log('Khóa học thứ: '+(index)+ 'day là khóa học free');
//     }
//     return course;
// })

// // Some: chỉ cần một phần tử thỏa mãn điều kiện gì đó là s trả về đúng 
// var isFree = courses.some(function(course, index){
//     return course.coin ===0;
// })
// console.log(isFree);

// // find: tìm kiếm tra về duy nhất 1 phần tử thỏa mãn 
// var isCourseReact = courses.some(function(course, index){
//     return course.name === 'React';
// })
// console.log(isCourseReact);

// // filter: tìm kiếm tra về nhiều phần tử thỏa mãn 
// var listCourses = courses.filter(function(course, index){
//     return course.name === 'React';
// })
// console.log(listCourses);

// //EX: tìm tất lượt thích lớn hơn 5
// const sports = [
//     {
//         name: 'Bóng rổ',
//         like: 6
//     },
//     {
//         name: 'Bơi lội',
//         like: 5
//     },
//     {
//         name: 'Bóng đá',
//         like: 10
//     },
// ]

// console.log(getMostFavoriteSport(sports)) 

// function getMostFavoriteSport(sports){
//    return  sports.filter(function(sport){
//         return sport.like > 5;
//     })
// } 

// // map(): duyệt qua mảng và trả về phần tử mà ta return (có thể thêm thuoc tinh cua mang)
// function coursesHandel(courses, index, originArray){
//     // return {
//     //     id: courses.id,
//     //     name: `Khoa hoc ${courses.name}`,
//     //     coin: courses.coin,
//     //     coinText: `Gia: ${courses.coin}`,
//     //     originArray: originArray
//     // }
//     return courses.name;
// }

// var result = courses.map(coursesHandel);
// console.log(result.join(' '));

// Reduce(): nhận về 1 giá trị duy nhất sau khi tính toán  

var result = courses.reduce(function(kq,value ){
    return kq += value.coin;
}, 0 )

console.log(result);