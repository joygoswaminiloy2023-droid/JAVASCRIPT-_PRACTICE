function bmi(){
const w=parseFloat(document.getElementById('weight').value);
const h=parseFloat(document.getElementById('height').value);


document.getElementById('result').innerText='height= '+h+ "\n" +'weight= '+w;


if(!w||!h){
    document.getElementById('result').innerText="Please Enter Valid Numbers";
    return;

}


var catagory="";

var cal=w/(h/100)**2;

if(cal<18.5){
    catagory="underweight";

}
else if(cal<25){
    catagory="Normal Weight";
}
else if(cal<30){
 catagory="Over weight";
}
else{
    catagory="Obese";
}
    document.getElementById('result').innerText=catagory;

}

