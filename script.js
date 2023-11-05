function getComputerChoice(){
    let arr=["Rock", "Paper", "Scissors"];
    return arr[Math.floor(Math.random()*3)];
}

function oneRound(playerSelection, computerSelection){
    let playerChoice = playerSelection.toLowerCase();
    let computerChoice = computerSelection.toLowerCase();
    if (playerChoice === computerChoice ){
        return "draw";
    } else if (playerChoice == "rock" && computerChoice == "paper") {
        return "You Lose! Paper beats Rock";
    } else if (playerChoice == "rock" && computerChoice == "scissors"){
        return "You Win! Rock beats Scissors";
    } else if (playerChoice == "paper" && computerChoice == "rock") {
        return "You Win! Paper beats Rock";
    } else if (playerChoice == "paper" && computerChoice == "scissors"){
        return "You Lose! Scissors beat Paper"
    }  else if (playerChoice == "scissors" && computerChoice == "paper") {
        return "You Win! Scissors beat Paper";
    } else if (playerChoice == "scissors" && computerChoice == "rock"){
        return "You Lose! Rock beats Scissors";
    }
}

function game(){
    let playerScore=0;
    let computerScore=0;
    for (let i=1; i<=5; i++){
        let playerSelection = prompt("pick Rock, Paper or Scissors", "rock");
        let winner = oneRound(playerSelection, getComputerChoice());
        console.log(winner);
        if (winner.slice(0, 8)=="You Win!"){
            playerScore+=1;
        } else if (winner.slice(0, 9)=="You Lose!") {
            computerScore+=1;
        } else {
            playerScore=playerScore;
            computerScore=computerScore;
            i--;
        }
        console.log(playerScore);
        console.log(computerScore);
    }

}
game();

//const playerSelection = "rock";
//const computerSelection = getComputerChoice();
//console.log(oneRound(playerSelection, computerSelection));


