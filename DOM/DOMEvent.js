// var h1Element = document.querySelector('h1');

// h1Element.onclick = function(){
//     console.log(Math.random()); 
// };

// input 
var newInput ;
var inputElement = document.querySelector('input[type="text"]');
inputElement.onchange = function(e){
    //newInput= e.target.value;
    console.log(e.target.value);
}
inputElement.oninput = function(e){
    //newInput= e.target.value;
    console.log(e.target.value);
}

//checkbox 
var inputElement = document.querySelector('input[type="checkbox"]');
inputElement.onchange = function(e){
    //newInput= e.target.value;
    console.log(e.target.checked);  
}

//value: in ra value 
var inputElement = document.querySelector('select');
inputElement.onchange = function(e){
    //newInput= e.target.value;
    console.log(e.target.value);  
}