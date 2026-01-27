// ### Task-2: 
// Count how many times a string has the letter `a` or `A`

// ---
let s="afdsdkfhgjasdjhAfdhgkfAA";
let count=0;
let count_2=0;
for(let ch of s){
    if(ch==='A'){
        count++
    }
    else if(ch==='a'){
count_2++;
    }
}

console.log("A:",count,"\na:",count_2);