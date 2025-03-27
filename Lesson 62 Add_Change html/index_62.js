// ------------ Example 1 <h1> -----------

//------------ step 1 Create the Element
// const newH1 = document.createElement("h1");
const newListItem = document.createElement("li");

//------------step 2 Add Attributes/properties
newListItem.textContent ="Call Of Duty: Warzone";
newListItem.id="CODWarzone"//fall guys
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightgreen";
// newH1.textContent ="I like games!";
// newH1.id="myH1";
// newH1.style.color = "salmon";
// newH1.style.textAlign = "center";

//---------- step 3 Append element to DOM
// document.body.append(newListItem);
// const pubg = document.getElementById("PUBG");
document.getElementById("BR").append(newListItem);
//document.getElementById("BR").insertBefore(newListItem,pubg);

const listItems = document.querySelectorAll("#BR li");// gets the id and the li elements within
document.getElementById("BR").insertBefore(newListItem,listItems[2]);// In id of BR allows to shift the item through the list.
//document.body.append(newH1); //adds the element to the end of the html webpage
//document.body.prepend(newH1);//adds the element to the beginning of the html webpage
//document.getElementById("box1").prepend(newH1); gets the newH1 element and puts into the top of box1
//document.getElementById("box1").append(newH1);// gets the newH1 elemenr and puts into the bottom of box1
//const box2 = document.getElementById("box2");
//document.body.insertBefore(newH1,box2);// allows the insertion of elements

//const boxes = document.querySelectorAll(".box");//you can use the class of elements to shift through them
//document.body.insertBefore(newH1,boxes[0]);


//------------Remove HTML Element
//document.getElementById("box1").removeChild(newH1);
//document.getElementById("BR").removeChild(newListItem);