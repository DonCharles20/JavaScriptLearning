// .reduce() = reduce the elements of an array
//              to a single value
//  array.reduce(callback, intitalvalue);
//The .reduce() method will do a callback 
// for each element on the array
//it will create a varible with the total values
//it will pass the numbers to the desired function and keep the total.

function display(String, items){
    const h1 = document.getElementById("h1");
    h1.innerHTML += String + items + "<br>";
}
function sum(accumulator, element){
    return accumulator + element;
}
function getMax(accumulator, element){
    return Math.max(accumulator,element);
}

const prices = [5, 30, 10, 25, 15, 20, 45, 200, 100];
const total = prices.reduce(sum);
console.log(`$${total.toFixed(2)}`);
display("Prices: ", prices)
display("Total: ",total)
const maximum = prices.reduce(getMax);
display("Maximum: ", maximum);