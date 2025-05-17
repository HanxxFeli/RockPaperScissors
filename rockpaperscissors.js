
// player choice 
const rockBtn = document.querySelector("#rock-btn"); // get btn for rock
const paperBtn = document.querySelector("#paper-btn"); // get btn for paper
const scissorsBtn = document.querySelector("#scissors-btn"); // get btn for scissors

// image source of the player choices
const rockBtnImg = rockBtn.getAttribute("src"); 
const paperBtnImg = paperBtn.getAttribute("src");  
const scissorsBtnImg = scissorsBtn.getAttribute("src");  

// Add an event listener to the images
rockBtn.addEventListener("click", playGame);
paperBtn.addEventListener("click", playGame);
scissorsBtn.addEventListener("click", playGame);

// src of chosen Image by the player and computer
let chosenImageSrc = ""
let compChosenImageSrc = ""


// computer choice
function getComputerChoice() { 
    let compChoice = Math.random();

    if (compChoice >= 0 && compChoice < 0.2) { 
        compChosenImageSrc = rockBtnImg;
        return "Rock";
    }
    else if (compChoice >= 0.2 && compChoice < 0.6) { 
        compChosenImageSrc = paperBtnImg;
        return "Paper";
    }
    else if (compChoice >= 0.6 && compChoice < 1) { 
        compChosenImageSrc = scissorsBtnImg;
        return "Scissors"
    }
}

// function for determining player choice
 function getPlayerChoice(event) {
    let selectedId = event.target.id;
    let humanPick = "";
    
    
    switch (selectedId) { 
        case ("rock-btn"):
            humanPick = "Rock";
            chosenImageSrc = rockBtnImg;
            break;
        case ("paper-btn"):
            humanPick = "Paper";
            chosenImageSrc = paperBtnImg;
            break;
        case ("scissors-btn"):
            humanPick = "Scissors"; 
            chosenImageSrc = scissorsBtnImg;
            break;
    };

    return humanPick;
 }


 // scoring 
let humanScore = 0;
let computerScore = 0;


// Play the Game
function playGame(event) {  
    let gameResult = "";
    
    // play function
    function playRound(computerPick, humanPick) { 

        let roundWinner = 0;

        // tie scenario 
        if (computerPick === humanPick) { 
            roundWinner = 2; // no one wins
            gameResult = "Game is a Tie!";
        } else {   
            // computer wins
            if (computerPick === "Rock" && humanPick === "Scissors") { 
                gameResult = "Computer Wins! Rock beats Scissors";
            } else if (computerPick === "Paper" && humanPick === "Rock") {
                gameResult = "Computer Wins! Paper beats Rock";
            }
            else if (computerPick === "Scissors" && humanPick === "Paper") {
                gameResult = "Computer Wins! Scissors beats Paper";
            } else { 
                gameResult = `You Win! ${humanPick} beats ${computerPick}!`; // human wins
                roundWinner = 1;
            }   
        };

        // check if human or computer won and increment score
        if (roundWinner === 0) { 
            computerScore++;
        } else if (roundWinner === 1) { 
            humanScore++;
        };
    };

    // console.log(`Final Score: Human ${humanScore} - Computer ${computerScore}`)
    // if (humanScore > computerScore) { 
    //     console.log("Human Wins!");
    // } else { 
    //     console.log("Computer Wins");
    // }

    // call the playRound function 
    let computerPick = getComputerChoice();
    let humanPick = getPlayerChoice(event);

    playRound(computerPick, humanPick);

    // get the game results
    let gameResultTag = document.querySelector("#game-result");
    gameResultTag.textContent = gameResult;

    // get the p tags that holds the player and computer score
    let playerScoreValue = document.querySelector("#player-score");
    let compScoreValue = document.querySelector("#computer-score");

    // update the values for the scores
    playerScoreValue.textContent = humanScore;
    compScoreValue.textContent = computerScore;

    // get the player and computer choices img 
    let playerImgChoice = document.querySelector("#player-choice-img");
    let compImgChoice = document.querySelector("#computer-choice-img");
    
    // set the img to the source of the chosen image
    playerImgChoice.setAttribute("src", chosenImageSrc);
    compImgChoice.setAttribute("src", compChosenImageSrc);


};

