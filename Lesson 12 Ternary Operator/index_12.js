//ternary operator= a shortcut to if(){} and else{} statements
//                  helps to assign a varible based on a condition
//                  condition ? codeIfTrue: codeIfFalse;

let age=window.prompt("How old are you?");
let message= age>= 18? "you are an adult.": "you are not an adult.";
console.log(message);
document.getElementById("p1").textContent=message;

let time=16;
let greeting = time<12?"Good Morning!":"Good Afternoon! ";
document.getElementById("p2").textContent=greeting;