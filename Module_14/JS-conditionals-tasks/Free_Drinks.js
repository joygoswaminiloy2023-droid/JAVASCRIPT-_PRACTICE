/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

// Menu
var burger_1= 600;
var burger_2=100;
var coke=30;

// Order
var order=burger_2;

if(burger_1<=order){
    console.log("Coke Free");
}
else{
    console.log("Add coke: ", burger_2+coke);
}