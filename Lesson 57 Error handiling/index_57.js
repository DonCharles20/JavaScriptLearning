/**
 * Error = An Object that is created to represent a problem tat occurs
 *          occur often with user input or establishing a connection.
 * 
 *          If errors are not handled they can interrupt a program
 *          causing it to crash.
 * 
 *          common errors:
 *          1. NETWORK ERRORS
 *          2. PROMISE REJECTION
 *          3. SECURITY ERRORS
 *          
 *          Error handlers:
 *          try{} = encloses code that might potentially cause an error
 *          catch{} = catch and handle any thrown Errors from try{}
 *          finally{} = (optional) Always executes. USed mostly for clean up
 *          ex. close files, close connections, release resources 
 *          
 */
function display(...items) {
    document.getElementById("h1").innerHTML +=
        items + "<br>";
}

try {
    display("Printing x");
    console.log(x);// will log object to console
} catch (error) {
    display("Check error in console");
    console.error(error);// will log and highlight object to console
}finally{
    // CLOSE FILES
    // CLOSE CONNECTIONS
    // RELEASE RESOURCES
    display("finally{} has excuted");
    console.log("Always executes");
}
console.log("end of 1st try catch");

try {
    const dividend = Number(window.prompt("Enter a dividend"));
    const divisor = Number(window.prompt("Enter a divisor"));
    const result = dividend/divisor;

    if (divisor == 0 ) {
        throw new Error("You can't divide by Zero!");
    }
    if (isNaN(dividend)||isNaN(divisor)) {
        throw new Error("Values must be a number");
        
    }
    
    console.log(result);
    display(`Your result is: ${result}`)
} catch (error) {
    display("Might to be an error in your input. Check console");
    console.error(error);
}
console.log("end of 2nd try catch");
