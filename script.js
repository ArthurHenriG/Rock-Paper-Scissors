function getComputerChoice(){
    const OPTIONS=['Rock','Paper','Scissors']
    let draw=Math.floor(Math.random() * (3 - 0) + 0);
    let computerChoice=OPTIONS[draw]
    console.log(OPTIONS)
    return computerChoice;
}