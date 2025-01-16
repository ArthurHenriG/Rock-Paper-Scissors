//var
const button=document.querySelectorAll("button");
const result=document.querySelector(".result");

//receives player choice
let playerSelection;
//receives computer choice
let computerSelection=getComputerChoice();


function getComputerChoice(){
    const OPTIONS=['Rock','Paper','Scissors'];
    let draw=Math.floor(Math.random() * (3 - 0) + 0);
    let computerChoice=OPTIONS[draw];
    computerChoice=computerChoice.toLowerCase();
    return computerChoice;
};

/*
function playerChoice(value){
    let choice=value;
    choice=choice.toLowerCase();
    return choice;
};
*/

button.forEach((button) => {
    button.addEventListener("click",()=>{
        playerSelection=button.value;
    });
});



function playRound(computerSelection, playerSelection){
    if (computerSelection === 'rock' && playerSelection === 'scissors') {
        return 'You Lose! rock beats scissors';
    } else if (computerSelection === 'paper' && playerSelection === 'rock') {
         return'You Lose! paper beats rock';
    } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
        return'You Lose! scissors beats paper';
    } else if (computerSelection === 'scissors' && playerSelection === 'rock') {
        return 'You Win! rock beats scissors';
    } else if (computerSelection === 'rock' && playerSelection === 'paper') {
         return'You Win! paper beats rock';
    } else if (computerSelection === 'paper' && playerSelection === 'scissors') {
        return 'You Win! scissors beats paper';
    } else if (computerSelection === playerSelection) {
         return 'Draw!';
    } else {
         return "Oops. Check if you didn't type something wrong!";
    }
    
};




const teste=document.querySelector(".teste");

function game(){
    for(let i=0;i<5;i++){
        teste.textContent+= playRound(computerSelection, playerSelection);
    };
};

game();
