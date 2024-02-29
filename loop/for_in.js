var myInfo= {
    name:'thanh ',
    age: 18 ,
    address:'DaLat'
}

// lấy value trong key 
for (const key in myInfo) {
   console.log(myInfo[key]);
}
// lấy key 
for (const key in myInfo) {
    console.log(key);
}


//EX2 
var object = {
    name: 'Nguyen Van A',
    age: 18
}

function run(object) {
    var result= [];
  for (var key in object ){
     result.push('thuoc tinh ' + [key] + 'co gia tri '+ object[key]);
  }
  return result;
}
console.log(run(object));