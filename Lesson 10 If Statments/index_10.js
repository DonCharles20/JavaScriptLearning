// IF Statements = if a condition is true, then execute the code block
//                if a condition is false, then skip the code block
//                  or do sowmething else

let age = 25;
if (age >= 21) {//if the condition is true the the code block will execute
    console.log("You can drink alcohol");
} else//if the condition is false then this code block will execute
{
    console.log("You cannot drink alcohol");
}

const text = document.getElementById("text");
const button = document.getElementById("button");
const input = document.getElementById("p");
let age3 = 0;
button.onclick = function () {
    age3 = (Number)(input.value);

    if (age3 >= 18) {
        console.log("You can drive");
        if (age3 >= 21) {
            console.log("You can drink alcohol");
        } else {
            console.log("You cannot drink alcohol");
        }
    }
    else if (age3 < 18) {//if the first condition is false then this condition will be checked
        console.log("You can't drive");
    }else{
        console.log("You are too young to drive");
    }
}
