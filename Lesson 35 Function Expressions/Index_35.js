//Function declaration = define a resuable block of code
//                      that performs a specfific task
function display(String, items){
    const h1 = document.getElementById("h1");
    h1.innerHTML += String + items + "<br>";
}
// function expressions = a way to define function as 
//                          values or varibles.
/**
 * used in:
 * 1. callbacks in asynchronous operations
 * 2. higher-order functions
 * 3. closures
 * 4. Event listeners
 */
const hello = function(){
    console.log("hello");
};
const display2 = function(){
    const h1 = document.getElementById("h1");
    h1.innerHTML += String + items + "<br>";
};

hello;
setTimeout(function(){
    console.log("goodBye");
},3000)

display("Hello!","");
setTimeout(function() {
    display("Goodbye! ","");
}, 4000);//needs to be passed as a functions to work
// or the function will be called immediately 