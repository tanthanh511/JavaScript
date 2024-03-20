
var courseApi ="http://localhost:3000/course"

function start(){
   getCourses(renderCourses);
   handleCreateForm();
}

start();

function getCourses(callback){
   fetch(courseApi)
      .then(function(response){
         return response.json()
      })
      .then(callback);
}

function renderCourses(courses){
   console.log(courses);
   var courseBox = document.getElementById('course-box')
   var html = courses.map(function(course){
      return `
         <li>
            <h2>${course.name}</h2>
            <p>${course.description}</p>
            <button onclick="deleteCourse(${course.id})">&times;</button>
         </li>
      `
   });
   courseBox.innerHTML = html.join('')
}

function handleCreateForm(){
   var createBtn = document.getElementById('create')
   createBtn.onclick = function(){
      var name = document.querySelector('input[name="name"]').value
      var description = document.querySelector('input[name="description"]').value
      var formData= {
         name : name,
         description: description
      }
      createCourse(formData)
   }
}

function createCourse(data, callback){
   var option = {
      method: "POST",
      body: JSON.stringify(data)
   }
   fetch(courseApi, option)
      .then(function(response){
         response.json();
      })
      .then(callback)
}

function handleDeleteCourses(){
   var option = {
      method: "DELETE"
   }
   fetch(courseApi + '/'+ id, option)
      .then(function(response){
         response.json();
      })
      .then(function(){
         getCourses(renderCourses)
      })
}



 