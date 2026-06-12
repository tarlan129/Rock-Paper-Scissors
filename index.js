function getComputerChoice() {
   const i = Math.floor(Math.random()*3);
   if (i === 0) {
    return "rock";
   }
   else if (i===1) {
    return "paper";
   }
   else{
    return "scissors";
   }
}

function getHumanChoice() {
    const choice = prompt("Enter rock, paper, or scissors:");
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice.toLowerCase();
    }
    else {
        console.log("Invalid choice. Please try again.");
        return getHumanChoice();
    }
}
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    console.log(`You chose ${humanChoice}, computer chose ${computerChoice}.`);
    if (humanChoice === computerChoice) {
        console.log ("It's a tie!");
    }
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("You win this round!");
        humanScore++;
    }
    else {
        console.log("Computer wins this round!");
        computerScore++;
    }
}
function playGame(){
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    }
    else if (computerScore > humanScore) {
        console.log("Computer wins the game! Better luck next time!");
    }
    else {
        console.log("The game is a tie!");
    }
}
playGame();

// playRound(getHumanChoice(), getComputerChoice());
// console.log(getHumanChoice());
// console.log(getComputerChoice());