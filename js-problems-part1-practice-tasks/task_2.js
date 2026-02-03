// ### Task-2: 
// You are given an array of numbers. Count how many times the a number is repeated in the array. 

// sample-input: 
// numbers = [5,6,11,12,98, 5]

// find: 5

// output: 2
let f;
function find(f){//5
    let count=0;

    let numbers=[4,6,11,3,2,5];//5//6//11//12//5//5

    if(typeof(f)!=="number"){
        console.log("Enter A valid input_which is a Number")
    }
    else{
  for(let num of numbers){
 if(f===num){
    count++;//1//1//1//1//2//3
    return count;
 }
  }
}

}

console.log(find(5));