function getComputerChoice(){
    const OPTIONS=['Rock','Paper','Scissors'];
    let draw=Math.floor(Math.random() * (3 - 0) + 0);
    let computerChoice=OPTIONS[draw];
    computerChoice=computerChoice.toLowerCase();
    return computerChoice;
};
 
function playerChoice(){
    let choice=prompt('Choose rock, paper, scissors');
    choice=choice.toLowerCase();
    return choice;
};

function playRound(computerSelection, playerSelection){
    if(computerSelection==='rock' && playerSelection==='scissors'){
        console.log('You Lose! rock beats scissors');
    }else if(computerSelection==='paper' && playerSelection==='rock'){
        console.log('You Lose! paper beats rock');
    }else if(computerSelection==='scissors' && playerSelection==='paper'){
        console.log('You Lose! scissors beats paper');
    }else if(computerSelection==='scissors' && playerSelection==='rock' ){
        console.log('You Win! rock beats scissors');
    }else if(computerSelection==='rock' && playerSelection==='paper'){
        console.log('You Win! paper beats rock');
    }else if(computerSelection==='paper' && playerSelection==='scissors'){
        console.log('You Win! scissors beats paper');
    }else if(computerSelection===playerSelection){
        console.log('Draw!');
    }else{
        console.log("Oops. Check if you didn't type something wrong!");
    };
};

function game(){
    for(let i=0;i<5;i++){
        let computerSelection=getComputerChoice();
        let playerSelection=playerChoice();
        playRound(computerSelection, playerSelection);
    };
};

console.log(game());