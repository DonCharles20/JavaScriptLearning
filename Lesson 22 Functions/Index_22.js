// function = A section of reusable code.
//              Declare code once, use it when ever you want.
//              Call the function to excute that code.


function happyBirthday(username, age){
    console.log("Happy Birthday to you!");
    console.log(`Happy Birthday to ${username}!`)
    console.log(`you are ${age} years old.`)
    let one = document.getElementById("one")
    if(one){
        one.innerHTML+=` Happy Birthday to you! <br> Happy Birthday to ${username}! <br> you are ${age} years old.`
    }
}

happyBirthday("Don",22);

function add(x,y){
    let result= x+y;
    return result;
}
function subtract(x,y){
    return x-y;
}
function multiply(x,y){
    return x*y
}
function divide(x,y){
    return x/y;
}
function isEven(number){
    return number % 2 === 0 ? true:false;
}

console.log(add(5,5));
console.log(subtract(5,5));
console.log(multiply(11,11));
console.log(divide (25,5));
console.log(isEven(10));
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");

if(two||three||four||five||six){
    two.innerHTML+="5+5 is "+ add(5,5);
    three.innerHTML+="5-5 is "+ subtract(5,5);
    four.innerHTML+="11 x 11 is "+ multiply(11,11);
    five.innerHTML+="25/5 is "+ divide(25,5);
    six.innerHTML+="is 10 even?: "+ isEven(10);
}