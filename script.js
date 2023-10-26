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
}
