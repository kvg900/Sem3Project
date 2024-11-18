const imgs=document.querySelectorAll('.header-slider ul img');
const prev_btn=document.querySelector('.control-prev');
const next_btn=document.querySelector('.control-next');

let n=0;

function change_slide(){
  for(let i=0;i<imgs.length;i++){
    imgs[i].style.display='none';
  }
  if(n>=0 && n<imgs.length){
  imgs[n].style.display='block';
  }
}
//change_slide();

prev_btn.addEventListener('click', e=>{
  if(n>0 && n<imgs.length){
  n--;
  }
  else{
    n=imgs.length-1;
  }
  change_slide();
})

next_btn.addEventListener('click', e=>{
  if(n>=0 && n<imgs.length-1){
    n++;
  } 
  else{
    n=0;
  }
  change_slide();
})
