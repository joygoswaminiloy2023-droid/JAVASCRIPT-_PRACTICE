// const a= isNaN("11");
// console.log(a);
const b= isNaN(2-10);
console.log(b);


//  explanation:

// isNaN() stands for “is Not a Number” and returns a boolean value.
// Although "11" is a string, isNaN() first converts it into a number.
// Since "11" can be converted to the number 11, it is a valid number,
// therefore isNaN("11") returns false.