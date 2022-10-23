function getComputerChoice() {
    const compChoice = ['rock', 'paper', 'scissors'];
    return compChoice[Math.floor(Math.random() * compChoice.length)];

}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie! You both picked " + playerSelection;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore += 1;
        return "You win! Rock beats Scissors";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore += 1;
        return "You win! Paper beats Rock";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore += 1;
        return "You win! Scissors beats Paper";
    } else {
        compScore += 1;
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

let playerScore = 0;
let compScore = 0;

function game() {
    while (playerScore < 3 && compScore < 3) {
        const playerSelection = prompt("Start the game by picking among 'Rock, Paper, Scissors'").toLowerCase();
        const computerSelection = getComputerChoice();
        console.log("Player: " + playerSelection);
        console.log("Computer: " + computerSelection);
        console.log(playRound(playerSelection, computerSelection));
    }
    winner();
}

function winner() {
    if (compScore === 3) {
        console.log("The computer wins the match! Better luck next time!");
    }
     else  {
        console.log("You win the match! Way to go!")
    }
}

game();