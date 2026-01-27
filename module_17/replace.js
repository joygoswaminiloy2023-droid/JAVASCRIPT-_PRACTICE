let a="xoss";
let b=(a.split(""));
for(let i=0;i<b.length;i++){
    if(b[i]==='x'){
b[i]='y';
    }
    else if(b[i]=='s'){
        b[i]='o';
    }
}
console.log(b.join(''));