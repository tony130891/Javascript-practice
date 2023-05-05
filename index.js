let playerScore = 0;
let computerScore = 0;

const computerPlay = () => {
  const arrayChoices = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * arrayChoices.length);
  return arrayChoices[randomChoice];
};

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    return `It's a tie ${playerSelection}`;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    return "you lost, rock crushes scissors";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    return "you won, scissors cuts paper";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    return "you lost, paper covers rock";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    computerScore++;
    return "you lost, paper covers rock";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    return "you won, rock crushes scissors";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    return "you lost, scissors cuts paper";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    return "you won, paper covers rock";
  }
};

const playerSelection = "rock";

const game = () => {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt(
      "choose rock, paper, scissors",
      "rock, paper , scissors"
    ).toLowerCase();
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
  }
  if (playerScore > computerScore) {
    return "you are the winner";
  } else if (playerScore < computerScore) {
    return "you lost to a computer";
  } else {
    return "you tied with the computer";
  }
};

game();
