/**
 * constrcutor = special method for defining the 
 * properties and methods of objects
 */
function display(String, items){
    const h1 = document.getElementById("h1");
    h1.innerHTML += String + items + "<br>";
}
function Car(make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color =color,
    this.drive = function(){
        return `you are driving the ${this.make} ${this.model}`
    }
}

const car1 = new Car("Ford","Mustang",2024,"red");
const car2 = new Car("Dodge","Charger",2025,"blue");

display("Car 1: ", `${car1.make} ${car1.model}, ${car1.year}, ${car1.color}`);
display("",car1.drive());
console.log("Car 1: ", `${car1.make} ${car1.model}, ${car1.year}, ${car1.color}`)
display("Car 2: ", `${car2.make} ${car2.model}, ${car2.year}, ${car2.color}`);
console.log("Car 1: ", `${car2.make} ${car2.model}, ${car2.year}, ${car2.color}`)
display("",car2.drive());

