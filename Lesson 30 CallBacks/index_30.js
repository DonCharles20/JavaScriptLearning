/*callback = a function that is passdd as an argument 
            to another function.
            used to handle asynchronous operations

            1.reading a file
            2.network requests
            3.interacting with databases*/

sum(displayconsole, 1, 2);/*hello() will be called first before leave()
putting a parenthesis next to leave will cause it to be called immediately */
sum(displayPage, 1, 2);

function sum(callback, x, y){
    console.log(`sloving ${x} plus ${y}`);
    document.getElementById("h1").textContent = `sloving ${x} plus ${y}`;
    let result = x + y
    callback(result);
}
function displayconsole(result){
    console.log(`Result is: ${result}`);
}
function displayPage(result){
    document.getElementById("h2").textContent = `Result is: ${result}`;
}