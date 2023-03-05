function getComputerChoice() {
  const array = ["Paper", "Scissors", "Rock"];
  return array[Math.floor(Math.random() * array.length)];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  if (playerSelection == computerSelection) {
    console.log (`Draw. ${playerSelection} draws with ${computerSelection}`);
    return 0;
  }
  if (playerSelection == "paper" && computerSelection == "rock"
    || playerSelection == "scissors" && computerSelection == "paper"
    || playerSelection == "rock" && computerSelection == "scissors") {
      console.log(`You win. ${playerSelection} beats ${computerSelection}`);
      return "player";
    } 
  else {
    console.log(`You lose. ${computerSelection} beats ${playerSelection}`);
    return "computer";
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let userChoice;
  for (let i = 0; i < 5; i++) {
    do {
      userChoice = prompt("Choose paper, scissors or rock.");
      if (!inputIsValid(userChoice)) {
        alert("Invalid choice, please try again");
      }
    } while (!inputIsValid(userChoice));

    winner = playRound(userChoice, getComputerChoice());
    if (winner == "player") {
      playerScore += 1;
    } else if (winner == "computer") {
      computerScore += 1;
    }
  }
  console.log(`Your score is: ${playerScore}`);
  console.log(`Computer score: ${computerScore}`);
}

function inputIsValid(input) {
  input = input.toLowerCase();
  const choices = ["paper", "scissors", "rock"];
  if (choices.includes(input)) {
    return true;
  }
  return false;
}

game();

