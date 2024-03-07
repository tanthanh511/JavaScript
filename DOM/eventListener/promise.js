// resolve: Thành công
// reject: thất bại

//3 trạng thái của promise
// pending
//
// var promise = new Promise(function(resolve, reject){
//     // resolve([
//     //     {
//     //         id:1,
//     //         name:'JS'
//     //     }
//     // ])

//     reject('co loi')
// });

// promise
//     .then(function(courses){
//         //console.log('successully');
//         //onsole.log(courses);
//         return 1;
//     })
//     .then(function(courses){
//         //console.log('successully');
//         console.log(courses);
//         return 2
//     })
//     .then(function(courses){
//         //console.log('successully');
//         console.log(courses);
//     })
//     .catch(function(error){
//         console.log(error);
//     })
//     .finally(function(){
//         console.log('done');
//     })

var users = [
  {
    id: 1,
    name: "tanthanh",
  },
  {
    id: 2,
    name: "trong vy ",
  },
  {
    id: 3,
    name: "tan phu",
  },
];

var comments = [
  {
    id: 1,
    userId: 1,
    content: "ban oi lam xong chua",
  },
  {
    id: 2,
    userId: 2,
    content: "Chua xong ban oi  ",
  },
  {
    id: 3,
    userId: 1,
    content: "cam ơn nha ^^",
  },

];



function getComment() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(comments);
    }, 1000);
  });
}

function getUsersByIds(userIds) {
  return new Promise(function (resolve) {
    var result = users.filter(function (user) {
      return userIds.includes(user.id);
    });
    setTimeout(function () {
        resolve(result);
      }, 1000);
  });
}

getComment()
    .then(function (comments) {
        var userIds = comments.map(function (comment) {
            return comment.userId;
        });
        return getUsersByIds(userIds)
            .then(function (users) {
                return {
                    users:users,
                    comments:comments
                }
        });
    })

    .then(function(data){
        console.log(data);
        var commentBlock = document.getElementById('comment-block')
        var html = ''
        data.comments.forEach(function(comment){
            var user = data.users.find(function(user){
                return user.id ===comment.userId
            });
            html +=`<li>${user.name}: ${comment.content}</li>`
        });
        commentBlock.innerHTML = html
    })
