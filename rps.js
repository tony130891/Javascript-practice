const paperBtn = document.querySelector(".paper");
const rockBtn = document.querySelector(".rock");
const scissorsBtn = document.querySelector(".scissors");
const outcomeDiv = document.querySelector(".outcome");
const playerScoreSpan = document.querySelector(".player-score");
const computerScoreSpan = document.querySelector(".computer-score");
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomChoices = Math.floor(Math.random() * 3);
  const computerChoice = choices[randomChoices];
  return computerChoice;
}

const playRound = (playerSelection, computerSelection) => {
  const para = document.createElement("p");
  if (playerSelection === computerSelection) {
    para.innerText = "it's a tie";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    para.innerText = "you win";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    para.innerText = "you win";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    para.innerText = "you win";
  } else {
    computerScore++;
    para.innerText = "you lose";
  }
  outcomeDiv.appendChild(para);
};

const checkForWinner = (playerScore, computerScore) => {
  if (playerScore === 5) {
    const h2 = document.createElement("h2");
    h2.innerText = `you won ${playerScore} times against ${computerScore}`;
  }
  if (computerScore === 5) {
    const h2 = document.createElement("h2");
    h2.innerText = `you lost ${computerScore} times against ${playerScore}`;
  }
  outcomeDiv.append(h2);
};

const computerSelection = getComputerChoice();

const updatedScore = (playerScore, computerScore) => {
  playerScoreSpan.textContent = `player score: ${playerScore}     `;
  computerScoreSpan.textContent = `computer score: ${computerScore}   `;
};

rockBtn.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  const playerSelection = "rock";
  playRound(playerSelection, computerSelection);
  updatedScore(playerScore, computerScore);
  checkForWinner(playerScore, computerScore);
});

paperBtn.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  const playerSelection = "paper";
  playRound(playerSelection, computerSelection);
  updatedScore(playerScore, computerScore);
  checkForWinner(playerScore, computerScore);
});

scissorsBtn.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  const playerSelection = "scissors";
  playRound(playerSelection, computerSelection);
  updatedScore(playerScore, computerScore);
  checkForWinner(playerScore, computerScore);
});
