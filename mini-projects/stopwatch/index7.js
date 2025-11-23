const start=document.querySelector('#start')
const stop=document.querySelector('#stop')
const display=document.querySelector('#display')
const reset=document.querySelector('#reset')
let sec=0;
let min=0;
let hour=0;
let timer=null
function updateDisplay(){
    let h = hour < 10 ? '0' + hour : hour;
    let m = min < 10 ? '0' + min : min;
    let s = sec < 10 ? '0' + sec : sec;
    display.textContent = `${h}:${m}:${s}`;
}

function startTimer(){
    if(timer){
        return
    }
    timer=setInterval(()=>{
        sec++;
        if(sec>59){
            min++
            sec=0;
        }
        if(min>59){
            hour++
            min=0;
        }
        updateDisplay()
    },1000)
}

function stopTimer(){
    clearInterval(timer)
    timer=null;
}

function resetTimer(){
    stopTimer();
    sec=0;
    min=0;
    hour=0;
    updateDisplay();
}

updateDisplay();
start.addEventListener('click',startTimer);
stop.addEventListener('click',stopTimer);
reset.addEventListener('click',resetTimer);