/* spread operator = ... 
                        allows an iterable such as an
                        array or string to be expanded 
                        into seperate elements
                        (unpacks the elements)*/

let numbers =[1,2,3,5]
let maximum = Math.max(...numbers);
console.log(maximum);
const h1= document.getElementById("h1");
h1.textContent += "Max: "+maximum;

let userName="Don";
let letters = [...userName];
console.log(letters);
const h2= document.getElementById("h2");
h2.textContent += " "+letters;

letters2 = [...userName].join("_")
//.join joins each element in the array with the selected character
console.log(letters2);
const h3= document.getElementById("h3");
h3.textContent += " "+letters2;

let names = ["Tom","Barry","Allen"];
let newNames = [...names].join(" ");//creates a shallow copy of the array
// diffrent array same elements
console.log(newNames)
const h4= document.getElementById("h4");
h4.textContent += " "+newNames;

let places =["downtown, upstate, rock"];
let namesNPlaces =[...names, ...places];
console.log(namesNPlaces);
const h5= document.getElementById("h5");
h5.textContent += " "+namesNPlaces;