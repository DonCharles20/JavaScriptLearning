/**
 * synchronous = Executes line by line consecutvely in  a sequntial manner
 *              code that waits for an operation to complete
 *              
 * asynchronous = allows miltiple operations to be performed concurrently without waiting
 *                 Doesn't block the execution flow and allows the program to continue
 *                 (I/O operations, network requests, fetching data)
 *                 Handled with: callbacks, Promises, Async/Await
 *                  
 */

function display(string, item="") {
    document.getElementById("h1").innerHTML +=
        string + item + "<br>";
}

//------synchronous Code-------
display("TASK 1");
console.log("TASK 1");
display("TASK 2");
console.log("TASK 2");
display("TASK 3");
console.log("TASK 3");

function do2() {
    display("TASK 4");
    console.log("TASK 4");
    display("TASK 5");
    console.log("TASK 5");
    display("TASK 6");
    console.log("TASK 6");
}
function do1(callback) {
    //------asynchronous Code-------
    setTimeout(() => {
        display("TASK 7");
        console.log("TASK 7");
        callback();
    }, 3000);
}

do1(do2);
