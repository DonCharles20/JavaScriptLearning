//Math= built-in Object that provides 
// a collection of properties and methods


console.log(Math.PI);
console.log(Math.E);

let x = 3.21;
let y = 2;
let z;

z = Math.round(x);//rounds to the nearest integer
document.getElementById("p1").textContent = z;
console.log(z);

z = Math.floor(x);//rounds down to the nearest integer
document.getElementById("p2").textContent = z;
console.log(z);

z = Math.ceil(x);//rounds up to the nearest integer
document.getElementById("p3").textContent = z;
console.log(z);

z = Math.trunc(x);//removes the decimal part
document.getElementById("p4").textContent = z;
console.log(z);

z = Math.pow(x, y);//raises x to the power of y
document.getElementById("p5").textContent = z;
console.log(z);

z = Math.sqrt(x);//returns the square root of x
document.getElementById("p6").textContent = z;
console.log(z);

z = Math.log(x);//returns the natural logarithm of x
document.getElementById("p7").textContent = z;
console.log(z);

z = Math.sin(x);//returns the sine of x
document.getElementById("p8").textContent = z;
console.log(z);

z = Math.cos(x);//returns the cosine of x
document.getElementById("p9").textContent = z;
console.log(z);

z = Math.tan(x);//returns the tangent of x
document.getElementById("p10").textContent = z;
console.log(z);

z = Math.abs(x);//returns the absolute value of x
document.getElementById("p11").textContent = z;
console.log(z);

z = Math.sign(x);//returns the sign of x
document.getElementById("p12").textContent = z;
console.log(z);

let max=Math.max(x,y,z);//returns the largest number
console.log(max);

let min=Math.min(x,y,z);//returns the smallest number
console.log(min);

