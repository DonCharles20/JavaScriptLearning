//Arrow functions = a concise way to write function expressions
//                  good for simple functions that you only use once 
//                  (parameters)=> some code

const intro =(name,age) =>{console.log(`Hello ${name}`)
                           console.log(`you are ${age} years old`)};
intro("don",20);

const display = (String, items) => {document.getElementById("h1")
                                            .innerHTML+= String+ items+"<br>"}

const numbers = [1,2,3,4,5];
const square = numbers.map((element)=>Math.pow(element,2));
console.log(square);
const evenNums = numbers.filter((element)=> element % 2 ===0);
const total = numbers.reduce((accmulator,element) => accmulator + element);
display("numbers: ",numbers);
display("squared numbers: ", square);
display("even numbers",evenNums);
display("total numbers: ", total);
