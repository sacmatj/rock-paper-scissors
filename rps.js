
const gameOptions = ["rock", "paper", "scissors"]

let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){ //randomly generate computer choice
    const computerChoice = gameOptions[Math.floor(Math.random()*3)];
    return computerChoice;
}

function getHumanChoice() {
    let isValidResponse = false;
    let humanChoice;
    while (!isValidResponse){
        humanChoice = prompt("Choose Rock, Paper or Scissors");
        if (gameOptions.includes(humanChoice)) {
            isValidResponse = true;
        }
    }
    return humanChoice;

}

function playRound(humanChoice, computerChoice){

    if (humanChoice === "rock"){
        if (computerChoice === "paper"){
            computerScore++;
        } else if ( computerChoice === "scissors"){
            humanScore++;
        }
        else {
            console.log("it's a Tie!")
        }
    } 

    if (humanChoice === "paper"){
        if (computerChoice === "scissors"){
            computerScore++;
        } else if ( computerChoice === "rock"){
            humanScore++;
        }
        else {
            console.log("it's a Tie!")
        }
    } 

    if (humanChoice === "scissors"){
        if (computerChoice === "rock"){
            computerScore++;
        } else if ( computerChoice === "paper"){
            humanScore++;
        }
        else {
            console.log("it's a Tie!")
        }
    } 

}

function playGame() {

    for (let i = 0; i < 5; i++){
        playRound(getHumanChoice(), getComputerChoice());
        console.log(`Current Score \nHuman: ${humanScore} Computer: ${computerScore}`);
    }

    if (humanScore > computerScore){
        console.log("Human Wins!")
    } else if (humanScore < computerScore){
        console.log("Computer Wins!")
    } else {
        console.log("It's a draw!")
    }
}

playGame();

