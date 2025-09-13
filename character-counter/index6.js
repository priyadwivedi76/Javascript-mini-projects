const textInput=document.querySelector('textarea')
const count=document.querySelector('.char-count')
const countParent=document.querySelector('.counter')
const maxlength=49
textInput.addEventListener('input',()=>{
    let currentValue=textInput.value;
    count.textContent=currentValue.length;

    if(currentValue.length>maxlength){
        textInput.value=currentValue.substring(0,maxlength);
    }
})