// = assignment operator
// == equality operator(compare values)
// === strict equality operator(compare values and data types)
// != not equal operator
// !== strict not equal operator

const PI=3.14;
document.getElementById("p").textContent=PI;

if(PI=="3.14"){//== compare values
    console.log("That is PI");
    document.getElementById("p1").textContent="That is PI";
}else{
    console.log("That is not PI");
    document.getElementById("p1").textContent="That is not PI";
}

if(PI==="3.14"){//=== compare values and data types
    console.log("That is PI");
    document.getElementById("p2").textContent="That is PI";
}else{
    console.log("That is not PI");
    document.getElementById("p2").textContent="That is not PI";
    //false because PI is a number datatype but "3.14" is a string datatype
}
//can be helpful when comparing values and data types
// if you want to make sure inputs are in the correct data type
//since inputs are string datatypes, you can use === to compare them to a number datatype

if(PI!=3.14){//!= not equal operator
    console.log("That is not PI");
    document.getElementById("p3").textContent="That is not PI";
}else{
    console.log("That is PI");
    document.getElementById("p3").textContent="That is PI";
}

if(PI!==3.14){//!== strict not equal operator
    console.log("That is not PI");
    document.getElementById("p4").textContent="That is not PI";
}else{
    console.log("That is PI");
    document.getElementById("p4").textContent="That is PI";
}