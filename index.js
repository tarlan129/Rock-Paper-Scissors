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
        return choice;
    }
    else {
        console.log("Invalid choice. Please try again.");
        return getHumanChoice();
    }
}
console.log(getHumanChoice());
console.log(getComputerChoice());