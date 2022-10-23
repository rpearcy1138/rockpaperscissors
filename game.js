function getComputerChoice() {
    const compChoice = ['rock', 'paper', 'scissors'];
    return compChoice[Math.floor(Math.random() * compChoice.length)];
    
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie! You both picked " + playerSelection;
     } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats Scissors";
     } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper beats Rock";
     } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! Scissors beats Paper";
     } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
     }
}

const playerSelection = prompt("Start the game by picking among 'Rock, Paper, Scissors'").toLowerCase();
const computerSelection = getComputerChoice();
console.log("Player: " + playerSelection);
console.log("Computer: " + computerSelection);

console.log(playRound(playerSelection, computerSelection));
