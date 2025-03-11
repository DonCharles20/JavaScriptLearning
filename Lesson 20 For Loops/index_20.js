//for Loop = repeat code a Limited amout of times

//for (initialization; condition; increment) {}

for (let i = 0; i < 5; i++) {
  console.log(i);
  document.getElementById("p").textContent += i + "d ";
}

for (let i = 0; i < 6; i+=2) {//you can also use i++ or i--
    //or increment by 2 (i+=2) or any number you want
  console.log(i);
  document.getElementById("p1").textContent += i + " ";
}

for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
        continue;//this will skip the current iteration
        //skip the even numbers
    }
  console.log(i);
  document.getElementById("p2").textContent += i + " ";
  if (i === 15) {
    break;//stop the loop at 15
  }
}