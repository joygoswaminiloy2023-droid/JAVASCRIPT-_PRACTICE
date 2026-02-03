// ### Task-1: 
// Write a function to convert temperature from Celsius to Fahrenheit.

// ---

//1cel=33.8f

function t_convert(Celsius){
    const c=33.8;
    console.log(typeof(Celsius));
if(typeof(Celsius)!=="number"){
    console.log("Enter a Valid Number");
}
else{
    let f=(Celsius*(9/5))+32;

    return f;
}
}

console.log("c to f:",t_convert(100),"F");