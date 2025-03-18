/**
 * Class = (ES6 feature) provides a more strcutred and cleaner way to
 *  work with objects comared to traditional constrcutor functions
 *  ex static keyword, encapsulation, inheritance
 */

class Product {
    constructor(name,price) {
        this.name=name;
        this.price = price;
    }

    displayProduct(){
        return `${this.name} \n Price $${this.price.toFixed(2)}`
    }
    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);

    }
}

function display(String, items){
    const h1 = document.getElementById("h1");
    h1.innerHTML += String + items + "<br>";
}
const salesTax = .05;

const product1 = new Product("Soda", 5.99);
const product2 = new Product("Ship", 2500.99);
const total = product1.calculateTotal(salesTax);
const total2 = product2.calculateTotal(salesTax);
display("Product 1: ",`${product1.displayProduct()}, Total Plus Tax: $${total}`);
display("Product 2: ",`${product2.displayProduct()}, Total Plus Tax: $${total2}`);


