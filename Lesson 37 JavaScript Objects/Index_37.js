/**
 * object = acollection of related properties and/or methods
 * can represetn real world objects (people, products, places)
 * objects = value, function()}
 *
 */
function display(String, items){
    const h1 = document.getElementById("h1");
    h1.innerHTML += String + items + "<br>";
}

const Character={
    name:"hatMan",
    power:"hat Spawning",
    age: 25,
    currentlyActive: true,
    sayHello: function(){return "Hats to All!"}
}

const Character2={
    name:"Rover",
    power:"shapeshifting",
    age: 22,
    currentlyActive: false,
    sayHello: function(){return "I can be whatever I want!"}
}

display("Character 1:",Character.name);
display("Power: ",Character.power);
display("Age: ",Character.age,"");
display("Active: ",Character.currentlyActive);
display("Gretting: ",Character.sayHello());
document.getElementById("h1").innerHTML+="<br>";
display("Character 2:",Character2.name);
display("Power: ",Character2.power);
display("Age: ",Character2.age);
display("Active: ",Character2.currentlyActive);
display("Gretting: ",Character2.sayHello());



