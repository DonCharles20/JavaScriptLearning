/**
 * Date objects = Objects that contain values that represent date and times
 *                  these date objects can be changed and formatted
 */
//Date(year, month, day, hour, minute, second, ms)
function display(string, item) {
    document.getElementById("h1").innerHTML +=
        string + item + "<br>";
}
function display2(string, item) {
    document.getElementById("h2").innerHTML +=
        string + item + "<br>";
}
function display3(string, item) {
    document.getElementById("h3").innerHTML +=
        string + item + "<br>";

}

function convertTo12Hour(hour) {
    const period = hour >= 12 ? "PM" : "AM"; // Determine AM or PM
    const adjustedHour = hour % 12 || 12; // Convert 0 or 12 to 12, and other hours to 12-hour format
    return `${adjustedHour} : ${date.getMinutes()} ${period}`;
}

const date = new Date();

console.log(date);
/**
 * setInterval(function, within miliseconds)
 * function can either be function(){} or ()=>{}
 * put what you want the program to do within the function
 * will constanty run every milisecond of choice.
 */
setInterval(() => {
    const date = new Date();
    document.getElementById("h1").innerHTML="";
    display("Current Date: ", date);
}, 1000);//will update in real time

const month = date.getMonth();
const day = date.getDate(); // getDate() returns the day of the month
const year = date.getFullYear();
display2("Todays Date in Numbers: ",`${month + 1}-${day}-${year}`); // month + 1 to make it 1-indexed

setInterval(()=>{
    document.getElementById("h3").innerHTML = " ";
    display3("Current Time in 12 hour: ", `${convertTo12Hour(date.getHours())}`)}
    ,1000);
