// 4. Checking if it's an Array
// Instructions:

// Create different variables, each containing either an array or a non-array value.

// Now use isArray to check if each variable is an array.

// Print a message to the console indicating whether each variable is an array or not.

let fruits=['mango', 'lichi', 'orange','banana', 'apple'];
let sub="C o m p u t e r";
let num=20;
let chk=Array.isArray(num);


if(chk==true){
   console.log("Is an Array"); 
}
else{
    console.log("Not an Array")
}
// console.log(Array.isArray(sub));
// console.log(Array.isArray(num));