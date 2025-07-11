
const choices = ["rock","paper","scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScore");
const computerScoreDisplay = document.getElementById("computerScore");
let playerScore = 0;
let computerScore = 0;
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");

button1.onclick = function() {
    playGame("rock");
}
button2.onclick = function() {
    playGame("paper");
}
button3.onclick = function() {
    playGame("scissors");
}

function playGame(playerChoice){
    let computerChoice = choices[Math.floor(Math.random()*3)];
    let result = "";

    if(playerChoice===computerChoice){
        result="IT'S A TIE";
    }
    else{
        switch(playerChoice){
            case "rock":
                result= (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "paper":
                result= (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissors":
                result= (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }
        playerDisplay.textContent = `PLAYER: ${playerChoice}`;
        computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
        resultDisplay.textContent =result;

        resultDisplay.classList.remove("greenText","redText");

        switch(result){
            case "YOU WIN!":
                resultDisplay.classList.add("greenText");
                playerScore++;
                playerScoreDisplay.textContent = `Player Score: ${playerScore}`
                playerScore.classList.add("greenText");
                break;
            case "YOU LOSE!":
                resultDisplay.classList.add("redText");
                computerScore++;
                computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
                computerScore.classList.add("redText");
                break;
        }

}

