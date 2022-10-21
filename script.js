const button=document.querySelector('.start');
const btnstop=document.querySelector('.stop');
const btnres=document.querySelector('.reset');

let hrs=min=sec=ms=0,starttimer;
button.addEventListener('click', ()=>{

    button.classList.add('start-active');
    btnstop.classList.remove('stop-active');
starttimer=setInterval(()=>{
    ms++;//ms=ms+1;
    if(ms==100){
        sec++;
        ms=0
    }
    if(sec==60){
        min++;
        sec=0;
    }
    if(min==60){
        hr++;
        min=0;
    }
  updatedisplay()

},10)
  });

  

btnstop.addEventListener('click', ()=>{
  clearInterval(starttimer);
  button.classList.remove('start-active');
  btnstop.classList.add('stop-active');
    });

    

btnres.addEventListener('click', ()=>{
    hrs=min=sec=ms=0;
    clearInterval(starttimer);
    updatedisplay();
    button.classList.remove('start-active');
    btnstop.classList.remove('stop-active');
   
    });
function updatedisplay(){
//Formated display
    phrs=hrs<10?'0'+hrs:hrs;
    pmin=min<10?'0'+min:min;
    psec=sec<10?'0'+sec:sec;
    pms=ms<10?'0'+ms:ms;
//Output
    document.querySelector('.hrs').innerText=phrs;

    document.querySelector('.min').innerText=pmin;
    
    document.querySelector('.sec').innerText=psec;
    
    document.querySelector('.ms').innerText=pms;
    

}