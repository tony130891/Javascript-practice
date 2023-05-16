let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomChoices = Math.floor(Math.random() * 3);
  const computerChoice = choices[randomChoices];
  return computerChoice;
}

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    return "it's a tie";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    return "you win";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    return "you win";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    return "you win";
  } else {
    computerScore++;
    return "you lose";
  }
};

const computerSelection = getComputerChoice();

const game = () => {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt(
      "choose the option, paper, rock or scissors"
    ).toLowerCase;
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
  }

  if (playerScore > computerScore) {
    return "you have beaten the pc";
  } else if (playerScore < computerScore) {
    return "you got beaten by the pc";
  } else {
    return "you tied the game";
  }
};

console.log(game());
