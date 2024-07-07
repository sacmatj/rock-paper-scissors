
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

    const rpsButtons = document.querySelectorAll("button");
    let isGameover = false;
    const title = document.querySelector("h1");

    rpsButtons.forEach((btn) => {
        btn.addEventListener("click", (event) => {
            if (!isGameover){
                const humanChoiceInput = btn.innerText.toLowerCase();
                playRound(humanChoiceInput, getComputerChoice());
                const playerScoreDisplay = document.querySelector("#playerScore");
                const computerScoreDisplay = document.querySelector("#computerScore");
    
                playerScoreDisplay.innerText = humanScore;
                computerScoreDisplay.innerText = computerScore;

                if (humanScore === 5){
                    title.innerText = "Player Wins!"
                    isGameover = true;
                } else if (computerScore === 5) {
                    title.innerText = "Computer Wins!"
                    isGameover = true;
                }
            }
        })
    })

}

playGame();

