function getComputerChoice(){
    let arr=["Rock", "Paper", "Scissors"];
    return arr[Math.floor(Math.random()*3)];
}



function oneRound(playerSelection, computerSelection){
    let resultDiv = document.querySelector("#results");
    let playerChoice = playerSelection.toLowerCase();
    let computerChoice = computerSelection.toLowerCase();
    resultDiv.textContent="";
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

let choice = document.querySelector("#rps-selection");

choice.addEventListener("click", (event)=> {
    let rockPaperScissorChoice = event.target;

    switch(rockPaperScissorChoice.id){
        case "rock":
            console.log("rock");
            oneRound("rock", getComputerChoice());
            break;
        case "paper":
            console.log("paper");
            oneRound("paper", getComputerChoice());
            break;
        case "scissors":
            console.log("scissors");
            oneRound("scissors", getComputerChoice());
            break;
    }
});




function game(){
}

//const playerSelection = "rock";
//const computerSelection = getComputerChoice();
//console.log(oneRound(playerSelection, computerSelection));


