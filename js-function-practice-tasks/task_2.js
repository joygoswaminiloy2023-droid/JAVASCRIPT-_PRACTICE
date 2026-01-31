
// ### Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function odd_even(num){//2
    let multi=0;
    let div=0;
    if(num%2===0){
        multi=multi*2;//2*2=4
        return multi;
    }
    else{
        div=num/2;
        return div;
    }
}

console.log("ANS: ", odd_even(3))