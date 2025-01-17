//.checked = property that determines the cheked state of an Html checkbox
//or radio button element.

//Gets each element from HTML and sets them to a variable
const checkbox = document.getElementById("checkbox");//get the checkbox element and set it to a variable
const visaBtn = document.getElementById("visaBtn");
const mastercardBtn = document.getElementById("mastercardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const submit= document.getElementById("submit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

submit.onclick = function(){
    if(checkbox.checked){//using the type="checkbox" property in HTML
        //to check if the checkbox is checked
        subResult.textContent = "Thank you for subscribing!";//if checked, display this message
    } else {
        subResult.textContent = "you are not subscribed";//if not checked, display this message
    }

    if(visaBtn.checked){
        paymentResult.textContent = "You have selected Visa";
    } else if(mastercardBtn.checked){
        paymentResult.textContent = "You have selected Mastercard";
    } else if(paypalBtn.checked){
        paymentResult.textContent = "You have selected Paypal";
    }
}