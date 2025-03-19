/**
 * nested objects = Objects inside of other Objects.
 *                  Allows you to represent more complex data strcutres
 *                  child Object enclosed by a parent Object
 * 
 *                  Person{Address{}, ContactInfo{}}
 *                  ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}
 */
function display(string, item) {
    document.getElementById("h1").innerHTML +=
        string + item + "<br>";

}

const person = {
    fullName: "Rhys Strongfork",
    age: 30,
    isStudent: false,
    hobbies: ["Mustache", "Atlas", "Zero's Friend"],
    address: {
        Planet: "Promethea",
        Location: "Meridian Metroplex",
        Building: "Atlas HQ"
    }
}
console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);
console.log(person.fullName);
console.log(person.hobbies[2]);
console.log(person.address.Building);
for (const place in person.address) {
    console.log(person.address[place]);
}

display("Full Name: ", person.fullName);
display("Age: ", person.age);
display("Is Student: ", person.isStudent);
display("Hobby: ", person.hobbies[2]);
display("Building: ", person.address.Building);
for (const place in person.address) {
    display(place + ": ", person.address[place]);
}

class Person {
    constructor(name, age, ...address) {
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}
class Address {
    constructor(street, city, country) {
        this.street = street;
        this.city = city;
        this.country = country;

    }
}

const person1 = new Person("Zero", 25, "Promethea", "Meridian Metroplex", "Atlas HQ");
const person2 = new Person("Vault Hunter", 22, "Outer Space", "Santuary III","None");

console.log(person1.name);
console.log(person1.age);
console.log(person1.address.street);
console.log(person1.address.city);
console.log(person1.address.country);
console.log(person2.name);
console.log(person2.age);
console.log(person2.address.street);
console.log(person2.address.city);
console.log(person2.address.country);
document.getElementById("h1").innerHTML+= "<br>";

display("Name: ", person1.name);
display("Age: ", person1.age);
display("Street: ", person1.address.street);
display("City: ", person1.address.city);
display("Country: ", person1.address.country);
document.getElementById("h1").innerHTML+= "<br>";

display("Name: ", person2.name);
display("Age: ", person2.age);
display("Street: ", person2.address.street);
display("City: ", person2.address.city);
display("Country: ", person2.address.country);