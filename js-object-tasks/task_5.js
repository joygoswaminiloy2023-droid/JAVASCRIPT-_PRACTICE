// Loop through an object and print the key-value pairs with their `types`

// **Input:**
// <br>

// let myObject = {

//     name: 'John Doe', 
//     age: 25,
//     city: 'Example City',
//     isStudent: true

// };


let my_o ={
name: 'John Doe', 
    age: 25,
    city: 'Example City',
    isStudent: true
}

for(let data in my_o){
    console.log("key:",data,"| Value:",my_o[data],"| type:",typeof my_o[data]);
}

