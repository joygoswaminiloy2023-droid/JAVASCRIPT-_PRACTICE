
// ### Task -1: 
// Find the lowest number in the array below.
// <br>
// `const heights2 = [167, 190, 120, 165, 137];`

function min(arr){

let min=0;

for(i=0;i<=arr.length;i++){
    if(arr[i]<arr[i+1]){
        min=arr[i];
    }
}
return min;
}
console.log("Lowest Number: ",min([167, 190, 10, 5, 137]))