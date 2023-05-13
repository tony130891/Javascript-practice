function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomChoices = Math.floor(Math.random() * 3);
  const computerChoice = choices[randomChoices];
  return computerChoice;
}

getComputerChoice();

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    return "it's a tie";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "you win";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "you win";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "you win";
  } else {
    return "you lose";
  }
};

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
