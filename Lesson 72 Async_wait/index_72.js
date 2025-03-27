/**
 * Async/Await = async = makes a function return a promise
 *               await = makes an async function wait for a promise
 *              
 *               Allows you write asynchronous code in a synchronous manner
 *               async doesnt have resloe or reject parameters
 *               everything Await is plaed in an event queue
 * 
 *               if using async to on a fucntion the contaits either reslove
 *                or reject there will be a RefrenceError
 *                  
 *                  when using async where will be no need to method chain .then()
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

//await is only valid in a async function name(){}
async function doChores() {

    try {
        const walkDogResult = await walkDog();
        console.log(walkDogResult);
    
        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);
    
        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);
    
        console.log("finished chores");
    } catch (error) {
        console.log(error);
    }
    
}
doChores();