const display=document.querySelector('#display');

function appendValue(value){
    display.value+=value;
}

function clearValue(){
    display.value='';
}

function back(){
    display.value=display.value.slice(0,-1);
}

function calculate(){
    try{
        display.value=eval(display.value);
    }catch(e){
        display.value='Error';
    }
}
