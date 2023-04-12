'use strict'

console.log("hello world")

let form = document.querySelector('form') 

function handleSubmit(event) {
  event.preventDefault();

  console.log('inside handle submit', +event.target.temp.value);


}
form.addEventListener('submit' , handleSubmit);