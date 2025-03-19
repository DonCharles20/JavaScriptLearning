/**
 * destructuring = estract values from arrays and objects,
 *                  then assign them to varibles in a convenient way
 *                  [] = to perform array destructring
 *                  {} = to perform object destrcuting
 *                  5 examples
 *          ------EXAMPLE 1------       
 *  Swap the value of two varibles
 */
function display(string,item) {
    document.getElementById("h1").innerHTML +=
    string + item +"<br>";

}

//  ------EXAMPLE 1------       
// Swap the value of two varibles
let a = 2;
let b = 5;
[a,b]=[b,a];
console.log(a);
console.log(b);
display("a: ",a);
display("b: ",b);

//  ------EXAMPLE 2------       
// Swap the value of two Elements in an array
const names = ["Ally", "Anderson", "Simon", "Nox","Theo"]; 
[names[1],names[3]]=[names[3],names[1]];
console.log(names);
display("names: ", names);

//  ------EXAMPLE 3------
// Assign array elements to varibles
const [name1, name2, name3, ...othernames] = names;

console.log(name1);
console.log(name2);
console.log(name3);
console.log(othernames);
display("name1: ", name1);
display("name2: ", name2);
display("name3: ", name3);
display("othernames: ", othernames);

//  ------EXAMPLE 4------
// Extract values from objects

const car1={
    brand: "Honda",
    type: "sedan",
    year: "2025"
}
const car2={
    brand: "Ford",
    type: "SUV",
    year: "2025",
    active: "no"
}
const {brand, type, year, active} = car2;
console.log(brand);
console.log(type);
console.log(year);
console.log(year);
display("carName: ", brand);
display("type: ", type);
display("year: ", year);
display("Active: ", active);

//  ------EXAMPLE 5------
// Destrcuture In function parameters;

function displayCar({brand, type, year, active ="yes"}){
    console.log(`Car: ${brand}, ${type}, ${year}, ${active}`);
    display("Car: ", `${brand}, ${type}, ${year}, ${active}`);
}

displayCar(car1);


