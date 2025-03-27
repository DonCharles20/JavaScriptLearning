/**
 *  Promise = An Object that manages asynchronous operations.
 *              Wrap a Promise Object around {asynchronous code}
 *              "I promise to return a value"
 *               PENDING -> RESLOVED OR REJECTED
 *               new Promise((reslove, reject)=>{asynchronous code})
 *               reslove is used to return the value if conditon is met 
 *                          reslove(code or function);
 *               reject is used to return a value if the condtion has NOT been met
 *                          reject(code or function);
 *                  
 * 
 * // Do These Chores In Order
 * 
 * 1. walk The Dog
 * 2. Clean the Kitchen
 * 3. Take out the tash
 */

function walkDog() {
    

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogwalked = true;

            if (dogwalked) {
                resolve("You walk the dog");
            }else{
                reject("you did not walk the dog")
            }
        
        }, 1500);
    })
}

function cleanKitchen() {
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const cleanedKitchen = true;
            if (cleanedKitchen) {
                resolve("You clean the kitchen");
            } else {
                reject("You did not clean the kitchen");
            }
        
        }, 2500);

    })
}

function takeOutTrash() {
    

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const trashOut = true;
            if (trashOut) {
                resolve("you take out the trash");
            } else {
                reject("you did not take out the trash");
            }
        
        }, 3500);

    })
}
//use .then() to method chain the promise objects
// the reslove or reject will return the object and the .then()
// is there to catch the object retuned which is placed into a fucntion
// to be used. return the desired function to use .then() 
walkDog().then(value=> {console.log(value); return cleanKitchen()})
         .then(value => {console.log(value); return takeOutTrash()})
         .then(value =>{console.log(value); return console.log("You finished all the chores")})
         .catch(error => console.error(error));