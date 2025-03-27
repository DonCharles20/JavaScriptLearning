/**
 * EventListener = Listen for specific events to create interactive webpages
 *                  key events: keydown, keyup
 *                  .addEventListener(event, callback);
 */
const myBox = document.getElementById("myBox");
const moveAmount = 15;
let x = 0;
let y = 0;
document.addEventListener("keydown",(event) =>{
    event.preventDefault();// prevents the website from scrolling
    
    if (event.key.startsWith("Arrow")) {
        switch (event.key) {
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
            break;
            case "ArrowLeft":
                x -= moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
            break;
            default:
                break;
        }
    }
    myBox.style.top = `${y}px`;
    myBox.style.left = `${x}px`;

});
document.addEventListener("keydown", (event) => {
    myBox.textContent = "😭";
    myBox.style.backgroundColor = "skyblue";
    console.log(`Key down = ${event.key}`);
});

document.addEventListener("keyup", (event) => {
    myBox.textContent = "😒";
    myBox.style.backgroundColor = "red";
    console.log(`Key up = ${event.key}`);
});
