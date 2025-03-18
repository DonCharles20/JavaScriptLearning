/*.map() = accepts a call back and applies that function
            to each element of an array, then return a new array */

const numbers = [1,2,3,4,5];

const squares = numbers.map(square);


console.log(squares);
document.getElementById("h1").innerHTML = " " + squares;
document.getElementById("h1").innerHTML += "<br>";



function square(element){
    return Math.pow(element,2);
}

const dates = ["2024-1-10","2025-1-10","2023-1-10"];
const formattedDates=dates.map(formatDates);
document.getElementById("h1").innerHTML += " Dates: " + formattedDates;
function formatDates(element){
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]} `
}