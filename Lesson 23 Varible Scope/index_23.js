/* varible scope = where a varible is recognized 
                    and accesible (local vs global)*/


/*Functions priotize local varibles*/

let x = 3;//This is a global varible, 
// it can be used anywhere in the program

function1();
function2();
function function1() {
    let x =1;//this is a local varible, 
    // it can only be used within this function.
    console.log(x)
    const f1 = document.getElementById("local");
    if(f1){
        f1.textContent += "Local Varible x: "+x;
    }
}

function function2(){
    //since no local varible is present within this function
    //the global vaarible will be used
    console.log(x)
    const f2 = document.getElementById("global");
    if(f2){
        f2.textContent += "Global Varible x: "+ x;
    }
}