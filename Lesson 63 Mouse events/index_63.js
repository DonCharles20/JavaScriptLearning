/**
 * EventListener = Listen for specific events to create interactive webpages
 *                  Mouse events: click, mouseover, mouseout
 *                  .addEventListener(event, callback);
 *                  Callbacks are functions either use
 *                  1. function(){}
 *                  2. ()=>{}
 *                  
 */

const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");


// function changeColor(event){
//     event.target.style.backgroundColor = "tomato";
//     event.target.textContent = "NO! 😡"
//     console.log(event);
// }

myButton.addEventListener("click",(event) =>{
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "WHY! 👺"
    console.log(myButton);
});//dont need to pass the event
//it is passed explictly behind the scenes, automaticly

myButton.addEventListener("mouseover",(event) =>{
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "NO! 😡"
    console.log(myButton);
});
myButton.addEventListener("mouseout",(event) =>{
    myBox.style.backgroundColor = "lightgreen";
    myBox.textContent = "Click Me 😁"
    console.log(myButton);
});