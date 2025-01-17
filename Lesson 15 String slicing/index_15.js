//String slicing = creating a substring from a
//                 portion of another string.

//string.slice(start, end)

const fullName = "Don Charles";

let firstName = fullName.slice(0, 3);//will get the first 3 characters
//fullName.slice(0, fullName.indexOf(" ")); this will also work

let lastName = fullName.slice(4, 11);
//fullName.slice(fullName.indexOf(" ") + 1); this will also work it will 
// start from the space and go to the end of the string even if end is not specified

console.log(firstName); //Don
console.log(lastName); //Charles
document.getElementById("p1").textContent = firstName;
document.getElementById("p2").textContent = lastName;

let firstChar = fullName.slice(0, 1);
let lastChar = fullName.slice(-1);//-1 is the last character
//you can also use fullName.slice(9) to get the last character
//using negtive numbers will cause the slice to start from the end of the string
console.log(firstChar); //D
console.log(lastChar); //s
document.getElementById("p3").textContent = firstChar;
document.getElementById("p4").textContent = lastChar;
