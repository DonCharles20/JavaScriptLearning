//logical operators = user to combine or manipulate boolean values 
//                      (true or false)
//                      AND=&&
//                      OR=||
//                      NOT=!
const temp=20;
document.getElementById("p").textContent=`The temp is ${temp}`;

if(temp>0&&temp<=35){
    console.log("Weather is Cold");
    document.getElementById("p1").textContent="Weather is Cold";
}else if(temp>35||temp<=65){
    console.log("Weather is Good");
    document.getElementById("p1").textContent="Weather is Good";

}else if(temp>65||temp<=100){
    console.log("Weather is Hot");
    document.getElementById("p1").textContent="Weather is Hot";
}

const isSunny=true;
document.getElementById("p2").textContent=`The weather is Sunny: ${isSunny}`;
if(!isSunny){
    console.log("You may need an Umbrella");
    document.getElementById("p3").textContent="You may need an Umbrella";
}else{
    console.log("You don't need an Umbrella");
    document.getElementById("p3").textContent="You don't need an Umbrella";
}