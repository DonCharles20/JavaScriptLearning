import{PI, getCircumfrence, getVolume, getArea} from './mathUtil.js'
/**
 * ES6 Module = An external file that contains reusable code
 *              that can bimported into other JavaScript files.
 *              Can contain Varibles, classes, functions ... and more
 *              Intodcuded as part of the ECMAScript 2015 update
 * 
 */

console.log(PI);

function display(string, item="") {
    document.getElementById("h1").innerHTML +=
        string + item + "<br>";
}
const circumfrence = getCircumfrence(10);
const area = getArea(10);
const volume = getVolume(10);

console.log(`${circumfrence.toFixed(2)}cm`);
display("Circumference: ", `${circumfrence.toFixed(2)}cm`);

console.log(`${area.toFixed(2)}cm`);
display("Area: ", `${area.toFixed(2)}cm`);

console.log(`${volume.toFixed(2)}cm`);
display("Volume: ", `${volume.toFixed(2)}cm`);