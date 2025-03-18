//.filter() = creates a new array by filtering out elements


function isEven(element){
    return element%2 === 0;
}
function display(String, items){
    const h1 = document.getElementById("h1");
    h1.innerHTML += String + items + "<br>";
}
function shortWords(element){
    return element.length <= 3;
}
function longWords(element){
    return element.length > 3;
}

let numbers =[1,2,3,4,5,6,7,8,9];
const words = ["Man","Car","Apple","Barry","Ohio"];

let evenNums = numbers.filter(isEven);
const short = words.filter(shortWords);
const long = words.filter(longWords);
display("Numbers: ",numbers);
display("Even Numbers: ",evenNums);
display("Words: ", words);
display("Short Words: ",short);
display("Long words: ", long);


