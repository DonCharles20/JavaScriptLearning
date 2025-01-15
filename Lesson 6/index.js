//const = a varible that can't be changed
const PI= 3.14159;//if attempted to change after this line
//an error will be thrown
let radius;
let circumference;

console.log(circumference);

document.getElementById("submit").onclick=function(){
    radius=document.getElementById("text").Value;
    radius=Number(radius);
    circumference=2*PI*radius;
    document.getElementById("H3").textContent=circumference;

}