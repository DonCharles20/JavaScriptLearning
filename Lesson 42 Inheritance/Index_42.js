/**
 * Inheritance = allows a new class to inherirt properties and methods 
 *                  from an existing class (parent -> child) 
 *                  helps with code reusablity
 */
function display(String, items){
    const h1 = document.getElementById("h1");
    h1.innerHTML += String + items + "<br>";
}

class Animal {
    alive = true;
    eat(){// the animial class and any child class can use this method
        //as long as they extend the class
        return `This ${this.name} is eating`;
    }
    sleep(){
        return `This ${this.name} is sleeping`;
    }
}
class Rabbit extends Animal{
    name = "rabbit";

    run(){
        return`This ${this.name} is running`;
    }
}
class Fish extends Animal{
    name = "fish";
    swim(){
        return`This ${this.name} is swimming`;
    }

}
class Hawk extends Animal{
    name = "hawk";
    fly(){//This method belongs to the Hawk class
        //not other class besides it can use it
        return`This ${this.name} is flying`;
    }

}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(rabbit.alive);
console.log(rabbit.eat());
console.log(rabbit.sleep());
console.log(rabbit.run());
display("Rabbit alive: ",rabbit.alive);
display("",rabbit.eat());
display("",rabbit.sleep());  
display("",rabbit.run());  