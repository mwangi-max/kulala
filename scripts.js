let btnMain = document.querySelector('#btn1');
let inptMain = document.querySelector('#inpt1');
let para1 = document.querySelector('#hr');
let para2 = document.querySelector('#mn');
let para3 = document.querySelector('#scs');
let para4 = document.querySelector('#fdback');


btnMain.addEventListener('click', function (){
    let message = inptMain.value;
    const hours = 24;
    const minutes = 60;
    const seconds = 60;
   

    if(inptMain.value < 1){
        inptMain.value = '';
            para4.classList.add('beauty');
            para4.innerHTML = 'Kindly input some value from 1...';   
    }
    else(inptMain.value > 1)
    {
        inptMain.value = '';
        
        para1.classList.add('beauty');
        para2.classList.add('beauty');
        para3.classList.add('beauty');
        para1.innerHTML = `${message} day(s) has ${message * 24} hours.` ;
        para2.innerHTML = `${message} day(s) has ${message * 24 * 60} minutes.` ;
        para3.innerHTML = `${message} day(s) has ${message * 24 * 60*60} seconds.`;
       




    }

   


})