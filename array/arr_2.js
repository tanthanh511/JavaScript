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
        coin: 20
    },
    {
        id: 6,
        name:'CSS',
        coin: 50
    }
]

// // forEach
// courses.forEach(function(course, i){
//     console.log(i, course);
// })

// every 
courses.every(function(course, index){
   
    if(course.coin <= 0 ){
        console.log('Khóa học thứ: ')+(index)+ ('day là khóa học free');
    }
    return course;
   // console.log(course['coin']);
})


