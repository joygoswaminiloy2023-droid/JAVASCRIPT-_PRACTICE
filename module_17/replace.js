let a="xoss";
let b=(a.split(""));//[x,o,s,s]
for(let i=0;i<b.length;i++){
    if(b[i]==='x'){
b[i]='y';
    }
    else if(b[i]=='s'){
        b[i]='o';
    }
}

console.log(b.join(''));

//string to array: split("");
//array to string:join("");