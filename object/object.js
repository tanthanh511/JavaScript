var myInfo = 'TanThanh';
var Object = {
    name: 'HTT',
    age: 20,
    location:'95 lý nam đế P8',
    [myInfo]: 'Khong co gi',
    getName: function(){
        this.name
    }
}

//console.log(Object['name']);
//console.log(Object.name);


// khi gọi thì ta để ngoài không để nó trong cặp dấu nháy đơn nếu trong cặp dấu nháy đơn thì nó sẽ tìm trong cái obj
// console.log(Object[myInfo]);
console.log(Object);

// delete key 
delete Object.location;

console.log( typeof Object.getName());