// ### Task-3: 
// Write a function to count the number of vowels in a string.


function str(maria){//Joy
// 

let count=0;
    //lowercase
if(typeof(maria)!=="string"){
    console.log("Input a String!");
}
else{

    let up=maria.toUpperCase();//JOY
    console.log(up);//JOY
for(let vowel of up){
if(vowel==="A" || vowel==="E" || vowel==="I" || vowel==="O" || vowel==="U"){
    count++;
}
}
}
return console.log("NUMBERS OF VOWEL:",count);


}

console.log(str("joy"));