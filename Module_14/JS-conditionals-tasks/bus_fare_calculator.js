/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

var R_price=800;
var age='Student';
console.log("Your Price:");


if(age<10){
    console.log("Free");
}
else if(age==="Student"){
console.log(800*(50/100));
}
else if(age>=60){
  console.log(R_price-(R_price*(15/100)));  
}
else{
    console.log(800);
}

(age==="Student")?console.log(800*(50/100)): (age<10)? console.log("Free"):(age>=60)?  console.log(R_price-(R_price*(15/100))):  console.log(800);