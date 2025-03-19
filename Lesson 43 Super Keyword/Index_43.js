/**
 * super = keyword is used in classes to call the constrcutor or
 *          access the properties and methods of a parent(superclass)
 *          this = this object
 *          super = the parent
 */
function display(String, items){
    const h1 = document.getElementById("h1");
    h1.innerHTML += String + items + "<br>";
}

class Animal {
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    move(speed){
        return `this ${this.name} moves at a speed of ${speed}mph`
    }
    
}
class Rabbit extends Animal{
    constructor(name,age,runSpeed){
        super(name,age);
        this.runSpeed = runSpeed;
    }
    run(){
        return `this ${this.name} can run `+
        super.move(this.runSpeed);
    }
}
class Fish extends Animal{
    constructor(name,age,swimSpeed){
        super(name,age);
        this.swimSpeed = swimSpeed;
    }
    swim(){
        return `this ${this.name} can swim. ` +
        super.move(this.swimSpeed);
    }

}
class Hawk extends Animal{
    constructor(name,age,flySpeed){
        super(name,age);
        this.flySpeed = flySpeed;
    }
    fly(){
        return `this ${this.name} can fly. ` +
        super.move(this.flySpeed);

    }

}

const rabbit = new Rabbit("rabbit", 1, 25);
const fish = new Fish("fish", 1, 25);
const hawk = new Hawk("fish", 1, 25);

console.log(fish.name);
console.log(fish.age);
console.log(fish.swimSpeed);
console.log(fish.swim());
display("Animal name: ",fish.name);
display("Animal Age: ",fish.age);
display("Animal Speed: ",fish.swimSpeed);
display("",fish.swim());