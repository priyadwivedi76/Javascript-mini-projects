const btn=document.querySelector('button')
const body=document.querySelector('.body')

//rgb value
function generateRGB(){
    let firstValue=Math.floor(Math.random()*255);
    let secondValue=Math.floor(Math.random()*255);
    let thirdValue=Math.floor(Math.random()*255);
    let color=`rgb(${firstValue},${secondValue},${thirdValue})`
    return color;
}

//hex code
function generatehexCode(){
    let letters='0123456789ABCDEFG'
    let color='#'
    for(let i=0;i<6;i++){
        color+=letters[Math.floor(Math.random()*16)];
    }
    return color;
}

btn.addEventListener('click',function(){
    body.style.backgroundColor=generateRGB();
})




