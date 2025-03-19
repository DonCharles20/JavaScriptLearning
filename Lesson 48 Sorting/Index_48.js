/**
 *  sort() = method used to sort elements of an array in place.
 *          sorts elements as strings in lexicographic order, not alphabetical
 *          lexicographic= (alphabet + numbers + symbols) as strings
 *
 */
function display(string, item) {
    document.getElementById("h1").innerHTML +=
        string + item + "<br>";
}

const numbers = [1, 2, 0, 4, 7, 6, 5, 3, 10, 8, 12, 9];
numbers.sort();
display("Lexicographic order: ", numbers);
console.log("Lexicographic order:", numbers);

numbers.sort((a, b) => a - b); // Sort in ascending order
display("Ascending order: ", numbers);
console.log("Ascending order:", numbers);

const fruits = [
    { name: "apple", color: "red", calories: 95 },
    { name: "orange", color: "orange", calories: 62 },
    { name: "banana", color: "yellow", calories: 105 },
    { name: "watermelon", color: "red", calories: 85 },
    { name: "pineapple", color: "yellow", calories: 50 }
];

fruits.sort((a, b) => a.calories - b.calories);
display("Fruits sorted by calories: ", JSON.stringify(fruits));
console.log("Fruits sorted by calories:", fruits);

fruits.sort((a, b) => a.name.localeCompare(b.name));
display("Fruits sorted by name: ", JSON.stringify(fruits));
console.log("Fruits sorted by name:", fruits);
