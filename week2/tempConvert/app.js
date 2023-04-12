'use strict'

console.log("hello world")

let form = document.querySelector('form') 

function handleSubmit(event) {
  event.preventDefault();

  let faren = document.getElementById('faren')

  let temp = +event.target.temp.value;
//to check if temp is truthy or falsy
  console.log(temp);
  if(!temp){

  faren.textContent = "please enter a number"

  }else{
    
    let degFahren = 9 / 5 * temp + 32
    
    faren.textContent = `You entered ${temp} C! After some magic that comes to ${degFahren} F. Wow, much temperature`
  }
  
}
form.addEventListener('submit' , handleSubmit);