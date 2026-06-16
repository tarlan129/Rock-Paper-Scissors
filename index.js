let humanScore = 0;
let computerScore = 0;


const resultDiv = document.querySelector('#result');

function getComputerChoice() {
   const i = Math.floor(Math.random()*3);
   if (i === 0) return "rock";
   else if (i===1) return "paper";
   else return "scissors";
}


function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    let roundMessage = "";
    
    if (humanChoice === computerChoice) {
        roundMessage = `It's a tie! Both chose ${humanChoice}.`;
    }
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        roundMessage = `You win this round! ${humanChoice} beats ${computerChoice}.`;
    }
    else {
        computerScore++;
        roundMessage = `Computer wins this round! ${computerChoice} beats ${humanChoice}.`;
        
    }

    resultDiv.textContent = `${roundMessage} | Current Score - You: ${humanScore} vs Computer: ${computerScore}`;
    if (humanScore === 5) {
        resultDiv.textContent += "\n GAME OVER! Congratulations, you won the game!";
    } 
    else if (computerScore === 5) {
        resultDiv.textContent += "\n GAME OVER! Computer wins the game. Better luck next time!";
    }

    if (humanScore === 5 || computerScore === 5) {
        // Reset scores for a new game
        humanScore = 0;
        computerScore = 0;
    }
}
// 


    const rockBtn = document.querySelector('#rock');
    const paperBtn = document.querySelector('#paper');
    const scissorsBtn = document.querySelector('#scissors');
    

    rockBtn.addEventListener('click', () => playRound('rock'));
    paperBtn.addEventListener('click', () => playRound('paper'));
    scissorsBtn.addEventListener('click', () => playRound('scissors'));




// playRound(getHumanChoice(), getComputerChoice());
// console.log(getHumanChoice());
// console.log(getComputerChoice());
// function getHumanChoice() {
//     const choice = prompt("Enter rock, paper, or scissors:");
//     if (choice === "rock" || choice === "paper" || choice === "scissors") {
//         return choice.toLowerCase();
//     }
//     else {
//         console.log("Invalid choice. Please try again.");
//         return getHumanChoice();
//     }
// }
// function playGame(){
//     for (let i = 0; i < 5; i++) {
//         playRound();
//     }
//     console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);
//     if (humanScore > computerScore) {
//         console.log("Congratulations! You won the game!");
//     }
//     else if (computerScore > humanScore) {
//         console.log("Computer wins the game! Better luck next time!");
//     }
//     else {
//         console.log("The game is a tie!");
//     }
// }