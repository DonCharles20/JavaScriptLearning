//type conversion = change the datatype of a value to another
//                      (Strings,Numbers,Booleans)
let age = window.prompt("how old are you?");//Window.prompt turns inputs intp a string datatypes
age = Number(age);//converts the string into Number(int)
age += 1;
console.log(age, typeof age);
document.getElementById("pn").textContent= `${age} type: `+ typeof age;


let x = "Pizza";
let y = "pizza";
let z = "pizza";

x= Number(x);//trying to convert a non number in a string will give Nan,
//Not A Number but will still show the change in datatype.
y=String(y);//will turn anthing into a string guardless of primative datatype
z=Boolean(z);//Converting a non boolean in a string will true if not empty
//and false if empty, this can be used to edge case empty strings

console.log(x,typeof x);
console.log(y,typeof y);
console.log(z,typeof z);

document.getElementById("p1").textContent= x+" type: "+typeof x;
document.getElementById("p2").textContent=y+" type: "+typeof y;
document.getElementById("p3").textContent=z+" type: "+typeof z;