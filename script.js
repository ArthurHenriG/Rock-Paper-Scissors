//Select elements
const div=document.querySelector('div');
const button=document.querySelectorAll(".choiceButton");
const result=document.querySelector(".result");
const resetGame=document.querySelector(".btn");
let player=document.querySelector('#player');
let computer=document.querySelector('#computer');
let resultPara=document.createElement('p');
//receives player choice
let playerSelection;
//receives computer choice
let computerSelection;
//count game points 
let playerScore=0;
let computerScore=0;


//return computer choice
function getComputerChoice(){
    const OPTIONS=['Rock','Paper','Scissors'];
    let draw=Math.floor(Math.random() * (3 - 0) + 0);
    let computerChoice=OPTIONS[draw];
    computerChoice=computerChoice.toLowerCase();
    return computerChoice;
};


//Verify who won the round
function playRound(computerSelection, playerSelection){
    
    if (computerSelection === 'rock' && playerSelection === 'scissors') {
        return  computerScore++;
        //return 'You Lose! rock beats scissors';
        
    } else if (computerSelection === 'paper' && playerSelection === 'rock') {
        return computerScore++;
        //return'You Lose! paper beats rock';
    } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
        return computerScore++;
        //return'You Lose! scissors beats paper';
    } else if (computerSelection === 'scissors' && playerSelection === 'rock') {
        return playerScore++;
       // return 'You Win! rock beats scissors';
    } else if (computerSelection === 'rock' && playerSelection === 'paper') {
        return  playerScore++;
       // return'You Win! paper beats rock';
    } else if (computerSelection === 'paper' && playerSelection === 'scissors') {
        return  playerScore++;
        //return 'You Win! scissors beats paper';
    } else if (computerSelection === playerSelection) {
         return 'Draw!';
    } 
    
};

//Reset all button's after the game ended 
resetGame.addEventListener("click",()=>{
    button.forEach((button)=>{
        button.disabled=false;
    }
    )
    player.textContent=`player ${playerScore}`;
    computer.textContent=`computer ${computerScore}`;
    resultPara.textContent='';
})





//Disable button when a player reach 5 points 
function disableButton(){

    button.forEach((button)=>{
        button.disabled=true;
    }
    )
}

//Get's user choice and play the round
button.forEach((button) => {
    button.addEventListener("click",()=>{
      playerSelection=button.value;
      computerSelection=getComputerChoice();
      //resultPara.textContent=playRound(computerSelection,playerSelection) + ' Player Score ' + playerScore + ' Computer Score ' + computerScore; 
     result.appendChild(resultPara);
      //console.log(playerScore,'pc',computerScore,playerSelection,computerSelection);
      playRound(computerSelection,playerSelection)
      player.textContent=`player ${playerScore}`;
      computer.textContent=`computer ${computerScore}`;
      if(computerScore==5 || playerScore==5){
       computerScore==5 ? resultPara.textContent = 'You Lose! Computer Score ' + computerScore + ' x  Your Score '+ playerScore : resultPara.textContent = 'You Win! Computer Score ' + computerScore + ' x  Your Score '+ playerScore ;
         disableButton();
         computerScore=0;
         playerScore=0;
         
      }
     
    });
   
});




