/*
forEach():
every(): 
some():
find():
filter():
map();
reduce();
*/

var courses = [
  {
    id: 1,
    name: "JS",
    coin: 250,
  },
  {
    id: 2,
    name: "React",
    coin: 290,
  },
  {
    id: 3,
    name: "TypeScrip",
    coin: 280,
  },
  {
    id: 4,
    name: "NodeJS",
    coin: 0,
  },
  {
    id: 5,
    name: "HTML",
    coin: 0,
  },
  {
    id: 6,
    name: "React",
    coin: 50,
  },
];

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
// var isCourseReact = courses.find(function(course, index){
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
function coursesHandel(courses, index, originArray){
    // return {
    //     id: courses.id,
    //     name: `Khoa hoc ${courses.name}`,
    //     coin: courses.coin,
    //     coinText: `Gia: ${courses.coin}`,
    //     originArray: originArray
    // }
    return index;
}

var result = courses.map(coursesHandel);
console.log(result.join(' '));

// Reduce(): nhận về 1 giá trị duy nhất sau khi tính toán

// function getTotalGold(course){
//     return courses.reduce(function(total,course ){
//         return total += course.coin;
//     }, 0 )
// }

// console.log(getTotalGold(courses));

//EX: find averageIMDB in movies 
// var watchList = [
//   {
//     Title: "Inception",
//     Year: "2010",
//     Rated: "PG-13",
//     Released: "16 Jul 2010",
//     Runtime: "148 min",
//     Genre: "Action, Adventure, Crime",
//     Director: "Christopher Nolan",
//     Writer: "Christopher Nolan",
//     Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
//     Plot: "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//     Language: "English, Japanese, French",
//     Country: "USA, UK",
//     imdbRating: "8.8",
//     imdbVotes: "1,446,708",
//     imdbID: "tt1375666",
//     Type: "movie",
//   },
//   {
//     Title: "Interstellar",
//     Year: "2014",
//     Rated: "PG-13",
//     Released: "07 Nov 2014",
//     Runtime: "169 min",
//     Genre: "Adventure, Drama, Sci-Fi",
//     Director: "Christopher Nolan",
//     Writer: "Jonathan Nolan, Christopher Nolan",
//     Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//     Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//     Language: "English",
//     Country: "USA, UK",
//     imdbRating: "8.6",
//     imdbVotes: "910,366",
//     imdbID: "tt0816692",
//     Type: "movie",
//   },
//   {
//     Title: "The Dark Knight",
//     Year: "2008",
//     Rated: "PG-13",
//     Released: "18 Jul 2008",
//     Runtime: "152 min",
//     Genre: "Action, Adventure, Crime",
//     Director: "Christopher Nolan",
//     Writer:
//       "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//     Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//     Plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//     Language: "English, Mandarin",
//     Country: "USA, UK",
//     imdbRating: "9.0",
//     imdbVotes: "1,652,832",
//     imdbID: "tt0468569",
//     Type: "movie",
//   },
//   {
//     Title: "Batman Begins",
//     Year: "2005",
//     Rated: "PG-13",
//     Released: "15 Jun 2005",
//     Runtime: "140 min",
//     Genre: "Action, Adventure",
//     Director: "Christopher Nolan",
//     Writer:
//       "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//     Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//     Plot: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//     Language: "English, Urdu, Mandarin",
//     Country: "USA, UK",
//     imdbRating: "8.3",
//     imdbVotes: "972,584",
//     imdbID: "tt0372784",
//     Type: "movie",
//   },
//   {
//     Title: "Avatar",
//     Year: "2009",
//     Rated: "PG-13",
//     Released: "18 Dec 2009",
//     Runtime: "162 min",
//     Genre: "Action, Adventure, Fantasy",
//     Director: "James Cameron",
//     Writer: "James Cameron",
//     Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//     Plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//     Language: "English, Spanish",
//     Country: "USA, UK",
//     imdbRating: "7.9",
//     imdbVotes: "876,575",
//     imdbID: "tt0499549",
//     Type: "movie",
//   },
// ];

// function calculateRating(watchList) {
//   const findAuthor = watchList.filter(function (movie) {
//     return movie.Director == "Christopher Nolan";
//   });
//   const averageIMDB = findAuthor.reduce(function (total, movie) {
//     return total+ Number(movie.imdbRating);
//   }, 0);
//   return averageIMDB / findAuthor.length;
// }

// // Expected results
// console.log(calculateRating(watchList)); // Output: 8.675
