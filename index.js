function getComputerChoice() {
  const option = ["Rock", "Paper", "Scissors"];
  const randomChoices = option[Math.floor(Math.random() * option.length)];
  return randomChoices;
}

function winner(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "draw";
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    return "player";
  } else {
    return "computer";
  }
}

function rounds(playerSelection, computerSelection) {
  const result = winner(playerSelection, computerSelection);
  if (result == "draw") {
    return "it's a draw";
  } else if (result == "player") {
    return "You won";
  } else {
    return "The pc won";
  }
}

function getPlayerChoice() {
  let validateInput = false;
  while (validateInput == false) {
    const choice = prompt("rock paper scissors");
    if (choice == null) {
      continue;
    }
    const choiceLower = choice.toLowerCase();
    If(option.includes(choiceLower));
    {
      validateInput = true;
      return choiceLower;
    }
  }
}

getPlayerChoice();

function game() {
  console.log("welcome");
  for (let i = 0; i < 5; i++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log(rounds(playerSelection, computerSelection));
  }
}

game();
