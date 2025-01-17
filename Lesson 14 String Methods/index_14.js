//string methods= allow you to manioulate and work with text(strings)

/*
 * 
 * indexOf - Returns the index of the first occurrence of the specified value ("o").
 * lastIndexOf - Returns the index of the last occurrence of the specified value ("l").
 * length - Returns the length of the string.
 * trim - Removes whitespace from both ends of the string.
 * toUpperCase - Converts the string to uppercase letters.
 * toLowerCase - Converts the string to lowercase letters.
 * repeat - Constructs and returns a new string which contains the specified number of copies of the string.
 * startsWith - Determines whether the string starts with the specified characters ("D").
 * endsWith - Determines whether the string ends with the specified characters ("l").
 * includes - Determines whether the string contains the specified characters ("a").
 * replaceAll - Returns a new string with all matches of a pattern replaced by a replacement.
 * padStart - Pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length (15 in this case).
 * padEnd - Pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length (15 in this case).
 */

let userName="    Don charl"
console.log(userName.charAt(0));
document.getElementById("p1").textContent=userName.charAt(0);
//charAt - Returns the character at the specified index (0 in this case).

console.log(userName.indexOf("o"));
document.getElementById("p2").textContent=userName.indexOf("o");
//indexOf - Returns the index of the first occurrence of the specified value ("o").

console.log(userName.lastIndexOf("l"));
document.getElementById("p3").textContent=userName.lastIndexOf("l");
//lastIndexOf - Returns the index of the last occurrence of the specified value ("l").

console.log(userName.length);
document.getElementById("p4").textContent=userName.length;
//length - Returns the length of the string.

userName=userName.trim();
console.log(userName);
document.getElementById("p5").textContent=userName;
//trim - Removes whitespace from both ends of the string.

result=userName.toUpperCase();
console.log(result);
document.getElementById("p6").textContent=result;
//toUpperCase - Converts the string to uppercase letters.

result=userName.toLowerCase();
console.log(result);
document.getElementById("p7").textContent=result;
//toLowerCase - Converts the string to lowercase letters.

result=userName.repeat(2);
console.log(result);
document.getElementById("p8").textContent=result;
//repeat - Constructs and returns a new string which contains the specified number of copies of the string.

result=userName.startsWith("D");
console.log(result);
document.getElementById("p9").textContent=result;
//startsWith - Determines whether the string starts with the specified characters ("D").

result=userName.endsWith("l");
console.log(result);
document.getElementById("p10").textContent=result;
//endsWith - Determines whether the string ends with the specified characters ("l").

result=userName.includes("a");
console.log(result);
document.getElementById("p11").textContent=result;
//includes - Determines whether the string contains the specified characters ("a").

let phoneNumber ="123-456-7890"
result=phoneNumber.replaceAll("-"," ");
console.log(result);
document.getElementById("p12").textContent=result;
//replaceAll - Returns a new string with all matches of a pattern replaced by a replacement.
//replaces all "-" with " ".

result=phoneNumber.padStart(15,"0");
console.log(result);
document.getElementById("p13").textContent=result;
//padStart - Pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length (15 in this case).
//adds "0" to the beginning of the string.

result=phoneNumber.padEnd(15,"0");
console.log(result);
document.getElementById("p14").textContent=result;
//padEnd - Pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length (15 in this case).
//adds "0" to the end of the string.








