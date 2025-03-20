/**
 * closure = a Function defined inside of another function,
 *              the inner function has access to the varibles
 *              and scope of the outer function.
 *              Allow for private varibles and state maintenace
 *              Used frequently in JS frameworks:React, Vue, Anuglar
 */
function display(string, item) {
    document.getElementById("h1").innerHTML +=
        string + item + "<br>";
}

function outer() {
    let innermessage = "Hello";// this varible is private

    function inner() {
        console.log(innermessage);
    }
    inner();
}
outermessage = "goodbye";// attepting to override the message varible
// message cannot be changed since it is private
//outermessage is outside of the scope of the function so it is a brand new varible

outer();

function createCounter() {//
    let count = 0;
    function increment() {
        count++;
        console.log(`count increased to ${count}`);
        return `count increased to ${count}`;
    }
    function decrement(){
        count--;
        console.log(`count decreased to ${count}`);
        return `count decreased to ${count}`;

    }
    function getCount(){
        return count;
    }
    return{increment, decrement, getCount};// return the functions to
    //be used by the object of Createcounter()
}

const counter = createCounter();
//the createCounter function is becomes an object
//that intilizes the cout varible
display(counter.increment(), ""); 
display(counter.increment(), ""); 
display(counter.decrement(), ""); 
display(counter.decrement(), ""); 

console.log(`The current count is ${counter.getCount()}`);
display(`The current count is ${counter.getCount()}`, "");