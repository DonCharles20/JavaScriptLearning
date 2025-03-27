const myButton = document.getElementById("myButton");
const myImg =document.getElementById("myImg");

myButton.addEventListener("click",(event)=>{
    // using display will remove the photo completely
    if (myImg.style.display === "none") {
        myImg.style.display="block";
        myButton.textContent = "Hide";

    }else{
    myImg.style.display = "none";
    myButton.textContent = "show";
    }
})

myButton.addEventListener("click",(event)=>{
    /**
     * using visablity will reserve the space for the photo
     */
    if (myImg.style.visibility === "hidden") {
        myImg.style.visibility="visible";
        myButton.textContent = "Hide";

    }else{
    myImg.style.visibility = "hidden";
    myButton.textContent = "show";
    }
})