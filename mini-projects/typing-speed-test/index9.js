const input=document.querySelector('#input')
const start=document.querySelector('#start')
const reset=document.querySelector('#reset')
const quote=document.querySelector('#quote')
const time=document.querySelector('#time')
const wpmText=document.querySelector('#wpm')
const accurate=document.querySelector('#accuracy')

let timer=null
let counter=60;
let escalatedTime=0;


start.addEventListener('click',()=>{
    if(timer){
        return;
    }
    timer=setInterval(()=>{
        counter--;
        escalatedTime++;
        time.textContent=counter;
        if(counter==0){
            alert('Time stopped!')
            clearInterval(timer);
        }
    },1000)
    start.textContent='Stop'
    inputEvent();
})
let inputEvent=function(){
    input.addEventListener('input',()=>{
    let value=input.value;
    let result=quote.textContent.trim()
    let accuratePercent=accuracy(value,result)
    accurate.textContent=`${accuratePercent}`
    let finalWPM=calculateWPM(value);
    wpmText.textContent=finalWPM;
})
}

reset.addEventListener('click',()=>{
    startActive=false;
    if(timer==null){
        alert('Already at initial stage')
        return;
    }
    counter=60;
    escalatedTime=0;
    time.textContent=counter;
    accurate.textContent='0'
    clearInterval(timer);
    timer=null;
    input.value=''
    if(start.textContent=='Stop'){
        start.textContent='Start';
    }
})

function accuracy(value,result){
    let correct = 0;
    let minLength = Math.min(value.length, result.length);

    for (let i = 0; i < minLength; i++) {
        if (value.charAt(i) === result.charAt(i)) {
            correct++;
        }
    }

    // Accuracy is based on what the user typed
    let accuracyPercentage = value.length === 0 
        ? 0 
        : Math.floor((correct / value.length) * 100);

    return accuracyPercentage;
}

function calculateWPM(value){
    let valueArray=value.split(' ');
    return valueArray.length <= 0 ? 0 : Math.floor(((valueArray.length/escalatedTime)*60))
}