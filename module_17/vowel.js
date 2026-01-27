let b ="HOspitAl"
let a=b.toLowerCase()
let count=0;
for(let vowel of a){
    if(vowel==="a"|| vowel==="e"||vowel==="i"||vowel==="o"||vowel=="u"){
        count++;
    }
   
}

if(count==0){
    console.log("Vowel Not Founded!");
}
else{
    console.log(count);
}
