function getComputerChoice(){
    let arr=["Rock", "Paper", "Scissors"];
    return arr[Math.floor(Math.random()*3)];
}
let playerScore=0;
let computerScore=0;

// Element Selectors;



let choice = document.querySelector("#rps-selection");
let resultDiv = document.querySelector("#results");
let scoreOutput = document.querySelector("#score");
let winner = document.querySelector("#winner");
let btn = document.querySelector("#play-again");
winner.textContent ="Who will win!?"
resultDiv.textContent ="Hit a button to choose your weapon!";
scoreOutput.textContent = "Player: 0 Computer: 0";

function playAgain(){
    winner.textContent ="Who will win!?"
    resultDiv.textContent ="Hit a button to choose your weapon!";
    scoreOutput.textContent = "Player: 0 Computer: 0";
    playerScore=0;
    computerScore=0;
    return;
}

btn.addEventListener("click",playAgain);

function isGameOver(){
    if (playerScore + computerScore == 5){
        resultDiv.textContent = "click play again to... well... play again!"
        if (playerScore >=3){
            winner.textContent = "You win!";
        } else {
            winner.textContent = "Game Over! you got beaten by a computer lol";
        return true;
        }
    } else {
        return false;
    }
}

function scoreKeeper(oneRoundCallBack){

    if (isGameOver()==false){
        if (oneRoundCallBack.slice(0, 8)=="You Win!"){
            playerScore+=1;
        } else if (oneRoundCallBack.slice(0, 9)=="You Lose!") {
            computerScore+=1;
        } else {
            playerScore=playerScore;
            computerScore=computerScore;
        }
        return scoreOutput.textContent = `Player Score: ${playerScore}     Computer Score: ${computerScore}`;
    }
}

function oneRound(playerSelection, computerSelection){
    if (isGameOver()==false){
        let playerChoice = playerSelection.toLowerCase();
        let computerChoice = computerSelection.toLowerCase();
        if (playerChoice === computerChoice ){
            resultDiv.textContent = "draw";
        } else if (playerChoice == "rock" && computerChoice == "paper") {
            resultDiv.textContent = "You Lose! Paper beats Rock";
        } else if (playerChoice == "rock" && computerChoice == "scissors"){
            resultDiv.textContent = "You Win! Rock beats Scissors";
        } else if (playerChoice == "paper" && computerChoice == "rock") {
            resultDiv.textContent =  "You Win! Paper beats Rock";
        } else if (playerChoice == "paper" && computerChoice == "scissors"){
            resultDiv.textContent =  "You Lose! Scissors beat Paper"
        }  else if (playerChoice == "scissors" && computerChoice == "paper") {
            resultDiv.textContent =  "You Win! Scissors beat Paper";
        } else if (playerChoice == "scissors" && computerChoice == "rock"){
            resultDiv.textContent =  "You Lose! Rock beats Scissors";
        }
        
        return resultDiv.textContent;
    }
}

choice.addEventListener("click", (event) => {
    let rockPaperScissorChoice = event.target;

    switch(rockPaperScissorChoice.id){
        case "rock":
            console.log("rock");
            scoreKeeper(oneRound("rock", getComputerChoice()));
            isGameOver();
            break;
        case "paper":
            console.log("paper");
            scoreKeeper(oneRound("paper", getComputerChoice()));
            isGameOver();
            break;
        case "scissors":
            console.log("scissors");
            scoreKeeper(oneRound("scissors", getComputerChoice()));
            isGameOver();
            break;
    }
});

//const playerSelection = "rock";
//const computerSelection = getComputerChoice();
//console.log(oneRound(playerSelection, computerSelection));


