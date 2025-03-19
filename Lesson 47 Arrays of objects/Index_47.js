// Array of objects
function display(string, item) {
    document.getElementById("h1").innerHTML +=
        string + item + "<br>";
}

const fruits =[{name: "apple", color:"red", calories: 95},
               {name: "orange", color:"orange", calories: 62},
               {name: "banana", color:"yellow", calories: 105},
               {name: "watermellon", color:"red", calories: 85},
               {name: "pineapple", color:"yellow", calories: 50}];

console.log(fruits[0].name);
fruits.push({name: "grapes", color:"red", calories: 95});
fruits.pop();
fruits.splice(3,4);
console.log(fruits);

fruits.forEach(fruit => {
    console.log(fruit.name);
    display("Fruit Name: ", fruit.name);
});

const fruitNames = fruits.map(fruit => fruit.name);
console.log(fruitNames);
display("Fruit Names: ", fruitNames.join(", "));

const calories95 = fruits.filter(fruit => fruit.calories === 95);
console.log(calories95);
calories95.forEach(fruit => display("Fruit with 95 calories: ", fruit.name));

const maxCalories = fruits.reduce((max, fruit) => fruit.calories > max.calories ? fruit : max);
console.log(maxCalories);
display("Max Calories: ", `${maxCalories.name} with ${maxCalories.calories} calories`);