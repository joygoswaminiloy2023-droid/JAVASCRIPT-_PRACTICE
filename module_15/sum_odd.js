
// Display sum of all the odd numbers from 91 to 129.
let sum=0;

for(let i=91;i<=129;i+=2){
sum=sum+i;
}
console.log("sum of odd:",sum);

// Display sum of all the even numbers from 51 to 85.

let sum_1=0;
let sum_2=0;

for(let i=51;i<=85;i++){
    if(i%2==0){
        sum_1=sum_1+i;
    }
 
}
console.log(sum_1);