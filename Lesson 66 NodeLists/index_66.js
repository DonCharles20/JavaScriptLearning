/**
 * NodeList = Static collections of HTML elements by (id, class, element)
 *              Can be created by using querySelectorAll()
 *              Simlar to an array, but no(map, filter, reduce)
 *              NodeList won't update to automatically reflect changes.
 */

let buttons = document.querySelectorAll(".myButtons");
console.log(buttons); 

const newButton = document.createElement("button");
newButton.textContent = "Button 5";
newButton.classList = "myButtons";
document.body.appendChild(newButton);

buttons = document.querySelectorAll(".myButtons");
console.log(buttons);

setTimeout(()=>{
    buttons.forEach((button) => {
        button.style.backgroundColor = "salmon";
        button.textContent += "➡️"; 
    });
}, 3000);


buttons.forEach(button =>{
    button.addEventListener("click",event=>{
        event.target.style.backgroundColor = "skyblue";
    })
})

buttons.forEach(button =>{
    button.addEventListener("mouseover",event=>{
        event.target.style.backgroundColor = "hsl(205, 100%, 50%)"
    })
})

buttons.forEach(button =>{
    button.addEventListener("mouseout",event=>{
        button.style.backgroundColor = "salmon";
    })
})


buttons.forEach(button => {
    button.addEventListener("click",(event)=>{
        event.target.remove();
        buttons = document.querySelectorAll(".myButtons");
        console.log(button);
    })
})