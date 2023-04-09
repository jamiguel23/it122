'use strict'

console.log("hello!")

let firstName = 'Matt';
let lastName = 'Miguel';
let yearsOfStudy = 3;
let goal = 'obtain a job so I can support me and my family comfortably'
let write = document.getElementById('write')
// document.write("My name is " + firstName + " " + lastName + ". I have been at SCC for " + yearsOfStudy + " years non-consecutively and plan to " + goal + " after completing my courses.");

write.textContent = "My name is " + firstName + " " + lastName + ". I have been at SCC for " + yearsOfStudy + " years non-consecutively and plan to " + goal + " after completing my courses."