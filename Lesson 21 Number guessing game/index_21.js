const minNum=1;
const maxNum=100;
const answer = Math.floor(Math.random() *(maxNum - minNum +1));//will roll a number bewteen max and min

let attempts = 0;
let guess;
let running = true;

const submit= document.getElementById("submit");


console.log(answer);
const randomNumElement = document.getElementById("randomnum");
if (randomNumElement) {
    randomNumElement.textContent += answer;
}

document.getElementById("submit").addEventListener("click", function() {
    if (!running) return; // Exit if the game is no longer running

    const inputBox = document.getElementById("inputbox");
    let guess = Number(inputBox.value);

    const alertEle = document.getElementById("alert");
    if (alertEle) {
        alertEle.textContent = ""; // Clear previous alert message
    }

    if (isNaN(guess)) {
        window.alert("Please enter a valid number");
    } else if (guess < minNum || guess > maxNum) {
        window.alert("Please enter a valid number");
    } else {
        attempts++;
        if (guess < answer) {
            window.alert("TOO LOW! TRY AGAIN!");
            //const alertEle = document.getElementById("alert");
            if (alertEle) {
                alertEle.textContent += "TOO LOW! TRY AGAIN! ";
            }
        } else if (guess > answer) {
            //window.alert("TOO HIGH! TRY AGAIN!");
            const alertEle = document.getElementById("alert");
            if (alertEle) {
                alertEle.textContent += "TOO HIGH! TRY AGAIN! ";
            }
        } else {
            window.alert(`CORRECT! The answer was ${answer}. It took you ${attempts} attempts.`);
            //will roll a number bewteen max and min
            const victory = document.getElementById("victory")
            if(victory){
                victory.textContent += `CORRECT! The answer was ${answer}. It took you ${attempts} attempts. New Number.`
            }
            answer = Math.floor(Math.random() *(maxNum - minNum +1));
        }
    }

});
