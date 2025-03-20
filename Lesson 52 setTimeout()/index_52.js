/**
 * setInterval() = A function in JavaScript that repeatedly executes a specified function 
 *                 or code snippet with a fixed time delay between each call.
 *                 
 *                 setInterval(callback, delay)
 *                 
 *                 - callback: The function to execute repeatedly.
 *                 - delay: The time interval (in milliseconds) between each execution of the callback.
 *                 
 *                 The setInterval() function continues to execute the callback until it is explicitly stopped 
 *                 using clearInterval(intervalId), where intervalId is the identifier returned by setInterval().
 *                 
 *                 Note: The actual interval may vary slightly depending on the workload of the JavaScript runtime environment.
 */
/**
 * setTimeout() = function in JavaScript that allows you to shedule
 *                  the execution of a function after an amount of time(miliseconds)
 *                  Times are approximate (varies beased on the workload of javaScript runtime env.)
 *                  
 *                  setTimeout(callback, delay)
 *                  clearTimeout(timeoutid) = can cancel a timeout before it triggers
 */

function display(string, item="") {
    document.getElementById("h1").innerHTML ="";
    document.getElementById("h1").innerHTML +=
        string + item + "<br>";
}
function display2(string, item="") {
    document.getElementById("h2").innerHTML ="";
    document.getElementById("h2").innerHTML +=
        string + item + "<br>";
}
function display3(string, item="") {
    document.getElementById("h3").innerHTML ="";
    document.getElementById("h3").innerHTML +=
        string + item + "<br>";
}

function sayHello() {
    display3("hello!", "");
}

setTimeout(sayHello, 3000);
setTimeout(function () { display3("How are you!", ""); }, 6000);

const timeoutid = setTimeout(() => display3("Goodbye!", ""), 9000);
clearTimeout(timeoutid);

function timer() {
    let count = 0;
    let time;

    function start() {
        time = setInterval(function () { count++; }, 1000);
        display2("Starting Time!");

    }
    function stop() {
        clearInterval(time);
        display2("stoping Time!");
    }
    function displayCount(){
        return count;
    }
    return { start, stop, displayCount };
}

const myTimer = timer();
setInterval(() => display("count: ", myTimer.displayCount()), 1000);