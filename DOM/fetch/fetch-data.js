var postAPI = 'https://jsonplaceholder.typicode.com/posts'
fetch(postAPI)
    .then(function(response){
         return response.json();
    })
    .then(function(posts){
        var test = document.getElementById('posts-box');
        var html = '';
        console.log(posts);
        html += (posts.map(function(post){
            return `<li>
                <h2> ${post.title}</h2>
                <p>${post.body}</p>
            </li>`
        })).join('');
       test.innerHTML = html
    })