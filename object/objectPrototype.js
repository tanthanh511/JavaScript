function User (firstName, lastName, avatar){
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar
}

//thêm một thuộc tính trong lớp
User.prototype.className = 'F8';
User.prototype.age ;

var author = new User('Thanh', 'Huynh', 'avatar', 18);
var user = new User('Vỹ', 'Nguyễn', 'avatar',19);

console.log(author);
console.log(user);

User()



