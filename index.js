function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomChoices = choices[Math.floor(Math.random() * choices.length)];
  return randomChoices;
}

function rounds(playerSelection, computerSelection) {
  if ("rock" == "Paper") {
    return "you lose! Paper beats rock";
  } else if ("rock" == "scissors") {
    return "you won!";
  } else {
    return "give it another try!";
  }
}
