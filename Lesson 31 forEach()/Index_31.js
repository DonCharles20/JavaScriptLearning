/*foreach() = method used to iterate over the elements
    of an array and applt a specfied function(callback)
    to each element

*/

let numbers =[1,2,3,4,5];
numbers.forEach(display);
document.getElementById("h1").innerHTML += "<br>"
numbers.forEach(double);
numbers.forEach(display);
document.getElementById("h1").innerHTML += "<br>"

function display(element){
    console.log(element);
    document.getElementById("h1").innerHTML += " "+element;
    
}

function double(element, index, array){
    array[index] = element * 2;
}

let names = ["tim","dan","boris"]

names.forEach(upperCase);
names.forEach(display);
document.getElementById("h1").innerHTML += "<br>"

names.forEach(lowerCase);
names.forEach(display);
document.getElementById("h1").innerHTML += "<br>"

names.forEach(captialize);
names.forEach(display);


function upperCase(element, index, array){
    array[index] = element.toUpperCase();
}

function lowerCase(element, index, array){
    array[index] = element.toLowerCase();
}

function captialize(element, index, array){
    array[index] = element.charAt(0).toUpperCase()+element.slice(1);
}