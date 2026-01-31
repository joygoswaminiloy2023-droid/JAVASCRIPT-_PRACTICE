// ### Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function avg(num){
    let len=num.length;//5
    let store=0;
    let a=0;
    for(let sum of num ){//1//2//3
store=store+sum;//1+2=3+3=6
a=store/len;

    }
    return a;

}


console.log("SUM: ",avg(num=[1,2,3,4,5]));