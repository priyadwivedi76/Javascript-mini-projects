const rock=document.querySelector('#rock')
const paper=document.querySelector('#paper')
const scissors=document.querySelector('#scissors')
const userDisplay=document.querySelector('#user-score')
const computerDisplay=document.querySelector('#computer-score')
const scoreboard=document.querySelector('.result')
let userScore=0
let computerScore=0
const reset = document.querySelector('#reset')
reset.addEventListener('click', () => {
    userScore = 0
    computerScore = 0
    userDisplay.textContent = userScore
    computerDisplay.textContent = computerScore
    scoreboard.textContent = "Game reset. Play again!"
    scoreboard.style.color = "black"
})
function computerResponse(){
    let count=Math.floor(Math.random()*3)
    if(count==0){
        return 'rock'
    }else if(count==1){
        return 'paper'
    }else{
        return 'scissors'
    }
}

function showResult(message, result) {
    scoreboard.textContent = message;
    scoreboard.style.color =
        result === 'win' ? 'green' : result === 'lose' ? 'red' : 'gray';
}

rock.addEventListener('click',()=>{
    let computerAns=computerResponse();
    if(computerAns=='rock'){
        scoreboard.textContent='Tie';
        return;
    }else if(computerAns=='scissors'){
        userScore++;
        userDisplay.textContent=userScore
        showResult('Your choice:Rock | Computer choice:Scissor','win')
    }else{
        computerScore++;
        computerDisplay.textContent=computerScore
        showResult(`Your choice:Rock | Computer choice:Paper`,'lose')
    }
})

paper.addEventListener('click',()=>{
    let computerAns=computerResponse();
    if(computerAns=='paper'){
        scoreboard.textContent=`Tie`
        return;
    }else if(computerAns=='rock'){
        userScore++;
        userDisplay.textContent=userScore
        showResult(`Your choice:Paper | Computer choice:Rock`,'win')
    }else{
        computerScore++;
        computerDisplay.textContent=computerScore
        showResult(`Your choice:Paper | Computer choice:Scissor`,'lose')
    }
})

scissors.addEventListener('click',()=>{
    let computerAns=computerResponse();
    if(computerAns=='scissors'){
        scoreboard.textContent=`Tie`
        return;
    }else if(computerAns=='paper'){
        userScore++;
        userDisplay.textContent=userScore
        showResult(`Your choice:Scissors | Computer choice:Paper`,'win')
    }else{
        computerScore++;
        computerDisplay.textContent=computerScore
        showResult(`Your choice:Scissors | Computer choice:Rock`,'lose')
    }
})

