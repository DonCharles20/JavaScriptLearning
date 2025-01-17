//While loop = repeat code while a specified condition is true
//while (condition) {}
//do while loop = excutes code at least once and then repeats while a specified condition is true
//do {} while (condition);

let userName = window.prompt("Enter your name");
let password;

while (userName === ""|| userName === null) { 
    //if the user enters nothing or cancels
    //the prompt will keep appearing
  userName = window.prompt("Enter your name");
}

do{
    password = window.prompt("Enter your password");
}while(userName === ""|| userName === null);

console.log("Hello " + userName);
window.alert("Hello " + userName);
document.getElementById("p1").textContent="You are " + userName;
document.write("<br>");//creates a line break in html
document.getElementById("p2").textContent=("Your password is " + password);