var courseApi ="http://localhost:3000/course"
fetch(courseApi)
    .then((response)=> response.json())
    .then(function(courses){
      console.log(courses);
      var courseBlock = document.getElementById('course-box')
      console.log(courseBlock);
      var html= ''
      courses.forEach(function(course) {
         html += `
            <h2>${course.name}</h2>
            <p>${course.description}</p>`
         
      });
      courseBlock.innerHTML= html
    })
 