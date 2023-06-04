const paperBtn = document.querySelector(".paper");
const rockBtn = document.querySelector(".rock");
const scissorsBtn = document.querySelector(".scissors");
const outcomeDiv = document.querySelector(".outcome");
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomChoices = Math.floor(Math.random() * 3);
  const computerChoice = choices[randomChoices];
  return computerChoice;
}

const playRound = (playerSelection, computerSelection) => {
  console.log("1 ", playerSelection, "2 ", computerSelection);
  if (playerSelection === computerSelection) {
    const para = document.createElement("p");
    para.innerText = "it's a tie";
    outcomeDiv.appendChild(para);
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    const para = document.createElement("p");
    para.innerText = "you win";
    outcomeDiv.appendChild(para);
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    const para = document.createElement("p");
    para.innerText = "you win";
    outcomeDiv.appendChild(para);
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    const para = document.createElement("p");
    para.innerText = "you win";
    outcomeDiv.appendChild(para);
  } else {
    computerScore++;
    const para = document.createElement("p");
    para.innerText = "you lose";
    outcomeDiv.appendChild(para);
  }
};

const computerSelection = getComputerChoice();

rockBtn.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  const playerSelection = "rock";
  playRound(playerSelection, computerSelection);
});

paperBtn.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  const playerSelection = "paper";
  playRound(playerSelection, computerSelection);
});

scissorsBtn.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  const playerSelection = "scissors";
  playRound(playerSelection, computerSelection);
});

const game = () => {
  // for (let i = 0; i < 5; i++) {
  //   const playerSelection = prompt(
  //    "choose the option, paper, rock or scissors"
  //   ).toLowerCase;
  //   const computerSelection = getComputerChoice();
  //   playRound(playerSelection, computerSelection);
  // }

  if (playerScore > computerScore) {
    return "you have beaten the pc";
  } else if (playerScore < computerScore) {
    return "you got beaten by the pc";
  } else {
    return "you tied the game";
  }
};

console.log(game());
