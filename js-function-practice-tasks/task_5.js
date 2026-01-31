// ### Task-5 
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return `Even`. If odd return `Odd`

function odd_even(num){
    if(num%2==0){
        console.log("Even");
    }
    else{
       console.log("Odd");
    }
    return num;
}

console.log("NUM IS: ",odd_even(5));