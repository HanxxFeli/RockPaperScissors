
// scoring 
let humanScore = 0;
let computerSCore = 0;

// computer choice
function getComputerChoice() { 
    let compChoice = Math.random();

    if (compChoice >= 0 && compChoice < 0.2) { 
        return "Rock";
    }
    else if (compChoice >= 0.2 && compChoice < 0.6) { 
        return "Paper";
    }
    else if (compChoice >= 0.6 && compChoice < 1) { 
        return "Scissors"
    }
}

// human choice 
function getHumanChoice() { 
    let humanChoice = pareInt(prompt("Enter your choice: "));

    return humanChoice;
}

// play function
function playRound(computerChoice, humanChoice) { 

    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice().toUpperCase();
}


console.log(getComputerChoice());