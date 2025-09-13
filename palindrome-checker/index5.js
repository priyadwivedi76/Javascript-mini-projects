const checkBtn=document.querySelector('#checkBtn')
const input=document.querySelector('#wordInput')
const result=document.querySelector('#result')
checkBtn.addEventListener('click', ()=>{
    let value=input.value;
    let checkedValue=palindrome(value);
    result.textContent=checkedValue ? 'Palindrome found successfully' : 'Value is not palindrome'

    input.value='';
})

function palindrome(value){
    let original=value;
    let ReversedString=''
    for(let i=0;i<value.length;i++){
        ReversedString=value.charAt(i)+ReversedString;
    }
    return original==ReversedString;
}