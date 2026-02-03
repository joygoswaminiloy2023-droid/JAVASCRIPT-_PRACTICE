function ran(min, max){
ran=Math.floor(Math.random()*(max-min+1))+min;
return ran;
}


console.log(ran(1 ,6));