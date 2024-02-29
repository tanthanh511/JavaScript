function User (firstName, lastName, avatar){
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar
}

var author = new User('Thanh', 'Huynh', 'avatar');
var user = new User('Vỹ', 'Nguyễn', 'avatar');

//thêm một thuộc tính trong lớp 
author.title = 'hông có gì '

console.log(author);
console.log(user);

