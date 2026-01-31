// ### Task-4  
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
// ---

function count_zero(str){//011001101100
    let count=0;
    let arr=str.split("");//
   for(let i=0;i<arr.length;i++){//i=0 arr[0]=0; i=1 arr[1]=1
    if(arr[i]==="0"){
        count++;
    }
   }
    return count;
}

console.log("NUM OF ZERO'S:",count_zero("011001101100"));//6

