/**
 * element selectors = Methods used to target and manipulate HTML elements
 *                      They allow you to select one or multiple HTML elemetns
 *                      from the DOM (Document Object Model);
 * 
 * 
 *                  1. document.getElementById() // Element OR Null
 *                  2. document.getElementByClassName() // Html Collection
 *                  3. document.getElementByTagname() // Html Collection
 *                  4. document.querySelector() // Element OR Null
 *                  5. document.querySelectorAll() //NodeList
*/

const myheading= document.getElementById("my-heading");
myheading.style.backgroundColor ="yellow";
myheading.style.textAlign ="center";
console.log(myheading);

const games = document.getElementsByClassName("games");
//cannot use .forEach() you will need to type cast using Array.from(nameOfArray)
games[0].style.backgroundColor = "Blue";
for(let game of games){
    game.style.backgroundColor="red"
}

Array.from(games).forEach(game =>{
    game.style.backgroundColor = "orange"
})

const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");

console.log(h4Elements);

h4Elements[0].style.backgroundColor = "green";

for(let h4Element of h4Elements){
    h4Element.style.backgroundColor ="purple"

}
for(let liElement of liElements){
    liElement.style.backgroundColor ="skyblue"
}

const element = document.querySelector(".games");
element.style.backgroundColor ="red";


const otherElements = document.querySelectorAll(".games");
otherElements[1].style.backgroundColor ="wheat";
console.log(otherElements)

