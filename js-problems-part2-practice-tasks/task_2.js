// ### Task -2: 
// Find the friend with the smallest name.
// <br>
// `const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];`

// ---

function min_name(names){
let min=names[0];

for(let i=0;i<names.length;i++){

    if(names[i].length<min.length){
        min=names[i];
    }
    
}
return min;
}

console.log("Smallest Name:",min_name(['rahim', 'robin', 'rafi', 'ron', 'rashed']));