//Switch = can be an efficient replacemnt to many else if statments

let day=window.prompt("Enter day number from 1-7");

switch((Number)(day)){
    case 1:
        console.log("Monday");
        document.getElementById("p").textContent="Monday";
        break;//break statments are here to prevent other cases from going
    case 2:
        console.log("Tuesday");
        document.getElementById("p").textContent="Tuesday";
        break;
    case 3:
        console.log("Wednesday");
        document.getElementById("p").textContent="Wednesday";
        break;
    case 4:
        console.log("Thursday");
        document.getElementById("p").textContent="Thursday";
        break;
    case 5:
        console.log("Friday");
        document.getElementById("p").textContent="Friday";
        break;
    case 6:
        console.log("Saturday");
        document.getElementById("p").textContent="Saturday";
        break;
    case 7:
        console.log("Sunday");
        document.getElementById("p").textContent="Sunday";
        break;
    default:
        console.log(`${day} is not a day`);
        document.getElementById("p").textContent=`${day} is not a day`;
        break;
    
}