let b ="HOspitAl"//OIA
// let a=b.toLowerCase()
let upper=b.toUpperCase();//HOSPITAL
let count=0;
for(let i=0;i<b.length;i++){//0
    if(upper[i]==="A"|| upper[i]==="E"||upper[i]==="I"||upper[i]==="O"||upper[i]=="U"){
        count++;//1//2//3
    }
   
}

if(count==0){
    console.log("Vowel Not Founded!");
}
else{
    console.log(count);
}
// //a//e//i//o//u//A//E