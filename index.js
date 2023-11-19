const Div=document.querySelector('.div');
const Btn=document.querySelector('.btn');
const Btn1=document.querySelector('.btn1');
const Btn2=document.querySelector('.btn2');
const Btn3=document.querySelector('.btn3');
const Btn4=document.querySelector('.btn4');
const Btn5=document.querySelector('.btn5');
const Reset=document.querySelector('.reset');

Btn.addEventListener('click', () => {
    Div.style.backgroundColor = 'violet';
    });
    
    Btn1.addEventListener('click', () => {
    Div.style.backgroundColor = 'dodgerblue'; 
    });
    
    Btn2.addEventListener('click', () => {
    Div.style.backgroundColor = 'yellowgreen';
    });
    
    Btn3.addEventListener('click', () => {
    Div.style.backgroundColor = 'slateblue'; 
    });
    
    Btn4.addEventListener('click', () => {
    Div.style.backgroundColor = 'yellow';
    });
    
    Btn5.addEventListener('click', () => {
    Div.style.backgroundColor = 'navy'; 
    });
    
    Reset.addEventListener('click',()=>{
        Div.style.backgroundColor=""
    })


