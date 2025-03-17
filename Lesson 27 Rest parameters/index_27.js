/* rest parameters = (...Rest) allow a function work with a varible
                    number of arguments by bundling them into an array.

                    spread = expands an array into seprate elemnts
                    rest = bundles seperate elements into an array */


function openFridge(...foods){// this will take varibles and put them into an array
    console.log(...foods);//will print the array with the elements from the parameter
    //with the spread operator 
    const print = document.getElementById("h1");
    print.innerHTML += foods.join(', ');
}

function getfood(...foods){
    return foods;
}

const fruit1 = "apples";
const fruit2 = "orange";
const fruit3 = "banana";
const fruit4 = "pear";

openFridge(fruit1,fruit2,fruit3,fruit4);
const foods = getfood(fruit1,fruit2,fruit3,fruit4);

const print2 = document.getElementById("h2");
print2.innerHTML += foods+"<br>";

function sum(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result;

}

const total = sum(1,2,3,4,5);
console.log(`Your total is ${total}`);
const print3 = document.getElementById("h3")
print3.innerHTML +=`Your total is ${total}`

function avg(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result / numbers.length;

}
const total2 = sum(100,20,30,40,50);
console.log(`Your total is ${total2}`);
const print4 = document.getElementById("h4")
print4.innerHTML +=`Your total is ${total2}`

const fullname = combineStrings("Sir", "Theo","II");
function combineStrings(...strings) {
    return strings.join("");
}
const print5 = document.getElementById("h5")
print5.textContent += fullname;