/**
 * ClassList = Element property in JavaScript used to interact
 *              with an element's list of classes (CSS classes)
 *              Allows you to make reusable classes for many elements
 *              across your webpage
 * 
 *              .add()
 *              .remove()
 *              .toggle(remove if present, add if not)
 *              .replace(oldClass, newClass)
 *              .contains()
 */

const myButton = document.getElementById("myButton");
const myH1 = document.getElementById("myH1");

myH1.classList.add("enabled");
myButton.classList.add("enabled");
//myButton.classList.remove("enabled");

myButton.addEventListener("mouseover", (event) => {
    event.target.classList.add("hover");
})

myButton.addEventListener("mouseout", (event) => {
    event.target.classList.remove("hover");
})

myButton.addEventListener("click", (event => {
    if (event.target.classList.contains("disabled")) {

        event.target.textContent += "😑";

    } else {
        event.target.classList.replace("enabled", "disabled");
    }

}))

let buttons = document.querySelectorAll(".myButtons");
buttons.forEach(button =>{
    button.classList.add("enabled");
})
buttons.forEach(buttons => {
    buttons.addEventListener("mouseover", event =>{
        event.target.classList.toggle("hover");
    })
})

buttons.forEach(button => {
    button.addEventListener("mouseout", event =>{
        event.target.classList.toggle("hover");
    })
})

buttons.forEach(button => {
    button.addEventListener("click", event =>{
        event.target.classList.replace("enabled", "disabled");
    })
})

