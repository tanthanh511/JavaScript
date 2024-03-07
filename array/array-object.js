// function arrToObj(arr){
//     function objHandler(obj, item){
//          obj[item[0]] = item[1];
//          return obj;
//     }
//     return arr.reduce(objHandler,{})
// }

function arrToObj(arr) {
  return arr.reduce((obj, item) => {
    obj[item[0]] = item[1];
    return obj;
  }, {});
}

var arr = [
  ["name", "Sơn Đặng"],
  ["age", 18],
];
console.log(arrToObj(arr));
