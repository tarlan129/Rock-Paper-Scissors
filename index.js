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
        return choice.atoLowerCase();
    }
    else {
        console.log("Invalid choice. Please try again.");
        return getHumanChoice();
    }
}
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    }
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        return "You win this round!";
    }
    else {
        computerScore++;
        return "Computer wins this round!";
    }
}
playRound(getHumanChoice(), getComputerChoice());
// console.log(getHumanChoice());
// console.log(getComputerChoice());