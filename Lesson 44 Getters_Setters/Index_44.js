/**
 * getter = special method that makes a property readable
 * setter = sepcial method that makes a propertiy writeable
 *  validate and modify a value when reading/writing a property.
 */
function display(String, items){
    const h1 = document.getElementById("h1");
    h1.innerHTML += String + items + "<br>";
}
class Rectangle{

    constructor(width,height){
        this.width = width;
        this.height = height;
    }

    set width(newWidth){//used to retrive values and 
        if (newWidth > 0) {
            this._width =newWidth;
        }else{
            console.error("width must be a postive number");
        }
    }

    set height(newHeight){
        if (newHeight > 0) {
            this._height =newHeight;
        }else{
            console.error("width must be a postive number");
        }
    }
    get width(){
        return `${this._width.toFixed(1)}cm`;
    }
    get height(){
        return `${this._height.toFixed(1)}cm`;
    }
    get area(){
        return `${(this._width *this._height).toFixed(1)} cm^2`;
    }
}

const rectangle = new Rectangle(100, 200);
console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);
display("Rectangle width:",rectangle.width);
display("Rectangle height:",rectangle.height);
display("Rectangle area:",rectangle.area);

class Person{
    constructor(firstName, lastName, age){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age = age;
    }
    set firstName(newFirstName){
        if(typeof newFirstName ==="string" && newFirstName.length>0){
            this._firstName = newFirstName;
        }else{
            console.error("First name must me a non-empty string");
        }
    }
    set lastName(newlastName){
        if(typeof newLastName ==="string" && newlastName.length>0){
            this._lastName = lastName;
        }else{
            console.error("last name must me a non-empty string");
        }
    }
    set age(newAge){
        if (typeof newAge === "number" && newAge>=0) {
            this._age = age;
        }else{
            console.error("age must me a non-negative number ");
        }
    }
    get firstName(){
        return this._firstName;
    }
    get lastName(){
        return this._lastName;
    }
    get age(){
        return this._age;
    }
    get fullName(){
        return this._firstName + " " + this._lastName;
    }
}
const person = new Person("man","tan",30);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
display("Person First Name: ", person.firstName);
display("Person Last Name: ", person.lastName);
display("Person Age: ", person.age);