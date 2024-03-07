// innerHTML: có thể thêm cả element, text, property, làm việc bên trong 
//outerHTML : làm việc thẻ gốc mà lấy ghi đè lên  

// var boxElement = document.querySelector('.main');

// boxElement.innerHTML = '<h1>cố lên</h1>';
// console.log(boxElement.querySelector('h1').innerText);

// // EX2
// //C1
var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java']

// function render(courses) {
//     var newList = document.querySelector('ul');
//     for(let i = 0 ; i <courses.length; i++){
//         newList.innerHTML += `<li>${courses[i]}</li>`;
//     }
//     return newList
// }
// //C2
// function render1(courses){
//     var newLi = document.querySelector('ul');
//     var arr =[];
//     for (const i in courses) {
//       arr.push(`<li>${courses[i]}</li>`)
//       var newString = arr.join(' ')
//     }
//     newLi.innerHTML=newString;
// }

// render1(courses)


var getH1 = document.querySelector('h1');
    getH1.clientLeft('20');
console.log(getH1);