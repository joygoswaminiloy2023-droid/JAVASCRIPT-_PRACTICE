// ### Task-4: 
// Write a function to find the longest word in a given string.

// sample-input: 
// I am learning Programmin to become a programmer

// sample-output: Programming

function sentence(sen){//// I am learning Programming to become a programmer
let len="";//11//proramming
    let arr=sen.split(" ");
   for(let i=0; i<arr.length;i++){
   if(arr[i].length>len.length){//1//2
    len=arr[i];
   }
   }
   return len;
}

console.log(sentence("I am learning Programming to become a programmer"));