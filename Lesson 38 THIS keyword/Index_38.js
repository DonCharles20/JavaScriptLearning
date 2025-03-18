/** this = refrence to the object where This is used
 *          (the obhect depends on the immediate context)
 *           Object.name =this.name;
 *           The this keyword does not work with arrow functions "=>"
 */
function display(String, items){
    const h1 = document.getElementById("h1");
    h1.innerHTML += String + items + "<br>";
}
const shape = {
    type: "circle",
    radius: 10,
    getArea: function() {
        return Math.PI * this.radius ** 2;
    },
    getCircumference: function() {
        return 2 * Math.PI * this.radius;
    }
};

console.log(`Type: ${shape.type}`);
console.log(`Area: ${shape.getArea()}`);
console.log(`Circumference: ${shape.getCircumference()}`);
display("shape: ", shape.type);
display("Area: ", shape.getArea());
display("Circumfrence: ", shape.getCircumference());