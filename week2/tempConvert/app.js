'use strict'

console.log("hello world")

let form = document.querySelector('form') 

function handleSubmit(event) {
  event.preventDefault();

  // console.log('inside handle submit', +event.target.temp.value);

  let temp = +event.target.temp.value;
  
  let degFahren = 9 / 5 * temp + 32
  
  let faren = document.getElementById('faren')
  console.log(faren);

  faren.textContent = `You entered ${temp} C! After some magic that comes to ${degFahren} F. Wow, much temperature`


}
form.addEventListener('submit' , handleSubmit);