function buttons(){
  const button_1= document.getElementById('bt_1');
    const button_2=document.getElementById('bt_2');
    const ans=document.getElementById('ans');

button_1.addEventListener('mouseover',()=>{
    button_1.style.display="none"
        ans.innerText='You have No Option';
});

   button_1.addEventListener('mouseout', () => {
        button_1.style.display = "inline-block"; 
           ans.innerHTML='<i class="fa-solid fa-face-grin-squint-tears" style="color: rgba(255, 212, 59, 1);"></i> <i class="fa-solid fa-face-grin-squint-tears" style="color: rgba(255, 212, 59, 1);"></i> <i class="fa-solid fa-face-grin-squint-tears" style="color: rgba(255, 212, 59, 1);"></i>';
    });


button_2.addEventListener('click',()=>{

ans.innerText='You have taken a step toward success in life.';
});


}
buttons();