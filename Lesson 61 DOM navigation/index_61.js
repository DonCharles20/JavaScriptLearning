/**
 * DOM Navigation = The process of navigating through the strcture 
 *                  of an HTML document using JavaScript.
 * // .firstElementChild
 * // .lastElementChild
 * // .nextElementSibling
 * // .previousElementSibling
 * // .parentElement
 * // .children
 */


// -----------.firstElementChild--------------
 const element = document.getElementById("fruits");
 const firstChild = element.firstElementChild;
 firstChild.style.backgroundColor = "orange";

 const ulElements = document.querySelectorAll("ul");
 ulElements.forEach((ulElements, index) => {
    if (index === 0) return;
    const firstChild = ulElements.firstElementChild;
    firstChild.style.backgroundColor = "yellow";
 });

 // ----------.lastElementChild---------------
 const element2 = document.getElementById("fruits");
 const lastChild = element.lastElementChild;
 lastChild.style.backgroundColor = "red";

 const ulElements2 = document.querySelectorAll("ul");
 ulElements2.forEach((ulElements,index) =>{
    if (index === 0) return;
    const firstChild = ulElements.lastElementChild;
    firstChild.style.backgroundColor = "skyblue";
 });

// ------------.nextElementSibling------------
const element3 = document.getElementById("apple");
const nextSibling = element3.nextElementSibling;
nextSibling.style.backgroundColor = "yellow";

// ------------.previousElementSibling------------
const element4 = document.getElementById("potatoes");
const prevSibling = element4.previousElementSibling;
prevSibling.style.backgroundColor = "orange";

// ------------.parentElement------------
const element5 = document.getElementById("carrots");
const parent = element5.parentElement;
parent.style.backgroundColor = "purple";

// ------------.children------------
const element6 = document.getElementById("desserts");
const children = element6.children;//is an array but cannot use the for each method.
console.log(children);

children[1].style.backgroundColor = "green";

