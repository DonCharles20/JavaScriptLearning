/* array = variable like strucutre that can hold
            more than 1 value */
// arrays have indexes that show order place of the value
// arrays start at 0 and increase till the end of the array

let colors = ["blue","white","red"];

const array = document.getElementById("array");
const array2 = document.getElementById("array2");
const length = document.getElementById("length");
const index = document.getElementById("index");
const array3 = document.getElementById("array3");



for (let i = 0; i < colors.length; i++) {
    const element = colors[i];
    console.log(colors[i]);
    array.textContent += element+" ";
}

colors.push("black");//adds an elemnt to the end of an array 
// and returns the length
colors.pop();//removes and returns the last element of the array
colors.unshift("yellow");//inserts the element at the start of the arrary
let shift = colors.shift();
//removes and returns the first element of the array

for (let index = 0; index < colors.length; index++) {
    const element = colors[index];
    console.log(element);
    array2.textContent += element+" ";
    
}
array2.innerHTML +="<br> removed: " +shift;

length.innerHTML  += "<br> length of Colors: "+colors.length;
index.innerHTML += "<br> index of white: " + colors.indexOf("white");
console.log(colors.indexOf("white"));

colors.sort();
array3.innerHTML+="Sorted: "
for(let color of colors){
    array3.innerHTML +=color+" ";
}
