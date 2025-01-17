//how to accept user input

//1.Easy Way= window prompt
//1.Professional Way=HTML textbox
let myname;
myname=window.prompt("what is your Name?");
console.log(myname);

let username;
document.getElementById("button").onclick=function(){
    username=document.getElementById("mytext").value;
    console.log(username);
    document.getElementById("h1").textContent=`Hello ${username}`;
}

