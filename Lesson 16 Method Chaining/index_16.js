// Method Chaining= Calling one Method after another 
//                  in one Continus Line of code.

//No Method Chaining
let userName = window.prompt("Enter Your userName");
userName = userName.trim();
let letter = userName.charAt(0);
letter = letter.toUpperCase();

let extraChars = userName.slice(1);
extraChars = extraChars.toLowerCase();

userName = letter + extraChars;

console.log(userName);
document.getElementById("p1").textContent="No Method Chaining"+userName;


//Method Chaining

let userName2 = window.prompt("Enter Your userName");

userName2 = userName2
    .trim()
    .charAt(0)
    .toUpperCase() +
    userName2
        .trim()
        .slice(1)
        .toLowerCase();

console.log(userName2);
document.getElementById("p2").textContent="Method Chaining"+userName2;
