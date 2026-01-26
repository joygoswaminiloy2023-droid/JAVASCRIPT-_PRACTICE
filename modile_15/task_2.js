// 2. Add or remove elements
// Declare an array of 3 tourist destinations
// Add a new tourist destination to your tourist array
// Add two more to your array
// Remove the last tourist destination you have added
// display the final array as output

let des=['Saintmartin', 'CoxBazar', 'Bandaban'];
console.log("Befor add: \n", des);

des.push('Sylhet');
console.log("after add 1: \n", des);

des.unshift('Sazek', 'Rangamati');
console.log("after add start: \n", des);

des.pop();
console.log("Final Array: \n", des);