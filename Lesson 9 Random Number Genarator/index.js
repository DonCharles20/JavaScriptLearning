//Random Number Genarator

//Math.random() generates a random number between 0 and 1 (excluding 1)
//You can change this by multiplying the result by a number ex: Math.random() * 10
//will generate a random number between 0 and 10 (excluding 10)
//you and also add a number to the result ex: Math.random() * 10 + 1
//to include the number multiplied number in the possible results but not 0
//You can also use Math.floor() to round the number down to the nearest whole number
//ex: Math.floor(Math.random() * 10) will generate a random number between 0 and 9

const rollbtn = document.getElementById('rollbtn');
const label1 = document.getElementById('label1');
const label2 = document.getElementById('label2');
const label3 = document.getElementById('label3');
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;


rollbtn.onclick = function(){
    randomNum1 = Math.floor(Math.random() * (max - min + 1)) + min;
    randomNum2 = Math.floor(Math.random() * (max - min + 1)) + min;
    randomNum3 = Math.floor(Math.random() * (max - min + 1)) + min;
    label1.textContent=randomNum1;
    label2.textContent=randomNum2;
    label3.textContent=randomNum3;

    
}

