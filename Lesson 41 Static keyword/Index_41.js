/**
 * static = keyword that defines properties or methods that belong
 *          to a class itself rater than the objects created
 *          from that class (class owns anything static, not the objects)
 */
function display(String, items){
    const h1 = document.getElementById("h1");
    h1.innerHTML += String + items + "<br>";
}
class MathUtil{
    static PI = 3.14159

    static getDiameter(radius){
        return radius * 2;
    }
    static getCircumference(radius){
        return 2 * this.PI * radius;
    }
    static getArea(radius){
        return this.PI * radius * radius;
    }
}

console.log(MathUtil.PI);
display("PI: ",MathUtil.PI);

console.log(MathUtil.getDiameter(2));
display("Diameter: ",MathUtil.getDiameter(2));

console.log(MathUtil.getCircumference(2));
display("Circumfrence: ",MathUtil.getCircumference(2));

console.log(MathUtil.getArea(2));
display("Area: ",MathUtil.getArea(2));

class User{
    static userCount = 0;//belongs to the class not the object
    //need to call the class to access
    constructor(username){
        this.username=username;
        User.userCount++;
    }
    static getUserCount(){
        return `There are ${this.userCount} Users`
    }
    sayHello(){
        return`Hello, I am ${this.username}`;
    }
}

const user1 = new User("Spongebob");
const user2 = new User("Bob");
display("User 1: ",user1.sayHello());
display("User 2: ",user2.sayHello());
display("UserCount: ",User.getUserCount())

