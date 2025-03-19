/**
 * Shuffling an Array
 */
function display(string, item) {
    document.getElementById("h1").innerHTML +=
        string + item + "<br>";
}
function shuffle(array){
    for (let i = array.length - 1; i > 0; i--) {
        const random = Math.floor(Math.random() * (i + 1));
        
        [array[i], array[random]] = [array[random], array[i]];
    }
}

const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

console.log("Original array:", cards);
display("Original array: ", cards.join(", "));

shuffle(cards);

console.log("Shuffled array:", cards);
display("Shuffled array: ", cards.join(", "));