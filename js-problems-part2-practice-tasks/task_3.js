// ### Task-3: 
// Your task is to calculate the `total budget` required to buy electronics:

//         laptop = 35000 tk
//         tablet = 15000 tk
//         mobile = 20000 tk

// Write a JavaScript function named `calculateElectronicsBudget` that takes in the number of `laptop, tablets, and mobile` and returns the `total money required`.


function budget(items){
 let price =0;
for(let item of items){
price+=item.price;
}
return price;
}

console.log("Total Price: ",
    budget(
        [

    {name:"laptop", price:35000 },
    {name:"tablet", price:15000 },
    {name:"mobile", price:20000 }
    
]
)
);