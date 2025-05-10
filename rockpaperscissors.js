
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
    let humanChoice = prompt("Enter your choice: ");

    return humanChoice;
}



// Play the Game
function playGame() { 

    // scoring 
    let humanScore = 0;
    let computerScore = 0;

    // play function
    function playRound(computerPick, humanPick) { 
        let compPick = computerPick.toLowerCase();
        let humPick = humanPick.toLowerCase();
        let roundWinner = 0;

        // tie scenario 
        if (compPick === humPick) { 
            roundWinner = 2; // no one wins
            console.log("Game is a Tie!")
        } else {   
            // computer wins
            if (compPick === "rock" && humPick === "scissors") { 
                console.log("Computer Wins! Rock beats Scissors");
            } else if (compPick === "paper" && humPick === "rock") {
                console.log("Computer Wins! Paper beats Rock");
            }
            else if (compPick === "scissors" && humPick === "paper") {
                console.log("Computer Wins! Scissors beats Paper");
            } else { 
                console.log(`You Win! ${humPick} beats ${compPick}!`); // human wins
                roundWinner = 1;
            }   
        }

        // check if human or computer won and increment score
        if (roundWinner === 0) { 
            computerScore++;
        } else if (roundWinner === 1) { 
            humanScore++;
        } 
    } 

    // play 5 rounds 
    let playRounds = 0
    while (playRounds < 5) { 
        playRound(getComputerChoice(), getHumanChoice());
        playRounds++;

        // display scores
        console.log(`Human Score: ${humanScore}`);
        console.log(`Computer Score: ${computerScore}`);
    }

    console.log(`Final Score: Human ${humanScore} - Computer ${computerScore}`)
    if (humanScore > computerScore) { 
        console.log("Human Wins!");
    } else { 
        console.log("Computer Wins");
    }

}

// call playGame function
playGame();


