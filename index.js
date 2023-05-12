function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomChoices = Math.floor(Math.random() * 3);
  const computerChoice = choices[randomChoices];
  return computerChoice;
}

getComputerChoice();

