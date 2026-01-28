// ### Task-4

// Count the `number of properties`.

// **Input:**
// <br>
// ```js
// let student = {
//     name: 'Ariana Grande',
//     age: 21,
//     city: 'Gaibandha',
//     isStudent: true
// };

let student ={
    name:'miu',
    age:22,
    city:'mj',
    isstudent:true
};

let pro= Object.keys(student);//pro=['name' ,age ,city, isstudent];
console.log(pro);//['name' ,age ,city, isstudent];
let count=pro.length;//count= pro.length
console.log(count)//4