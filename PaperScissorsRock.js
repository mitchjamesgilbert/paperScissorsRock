function getComputerChoice() {
  const array = ["paper", "scissors", "rock"];
  return array[Math.floor(Math.random() * array.length)];
}


function playRound(playerChoice) {
  playerChoiceMade = true;
  let computerChoice = getComputerChoice();
  let computerArt = document.querySelector('.computer-art');
  playerArt.textContent = playerAscii[`${playerChoice}`];
  computerArt.textContent = computerAscii[`${computerChoice}`];
  let result;
  if (computerChoice == playerChoice) {
    computerScore ++;
    playerScore ++;
    result = "It is a draw";
  }
  else if (playerChoice == "paper" && computerChoice == "rock"
    || playerChoice == "scissors" && computerChoice == "paper"
    || playerChoice == "rock" && computerChoice == "scissors") {
      result = "You win!";
      playerScore ++;
    }
  else {
    result = "You lose";
    computerScore ++;
  }
  instructions.textContent = `You picked ${playerChoice}. 
                              Computer picked ${computerChoice}. ${result}`
  playerDisplay.textContent = `Player score: ${playerScore}`;
  computerDisplay.textContent = `Computer score: ${computerScore}`;
  timeoutActive = true;
  setTimeout(reset, 2500);
}


function reset() {
  instructions.textContent = "Choose paper, scissors or rock"
  playerArt.textContent = "";
  computerArt.textContent = "";
  playerChoiceMade = false;
  timeoutActive = false;  
}


const playerAscii = {
  rock: `
    ________
---'   _____)
      (_____)
      (_____)
       (____)
---.___(___)
`,

  scissors: `
    _______      
---'   ____)____
          ______)
      __________)
     (____)
---.__(___)
`,

  paper:  `
     _______      
---'    ____)___
           _____)
          _______)
         _______)
---.__________) 
`
}

const computerAscii = {

  rock: `
   ________
  (_____   '---
  (_____)
  (_____)   
  (____)
   (___)___'---
   `,

  scissors: `
        _______
   ____(____   '---
  (______
  (__________
        (____)
        (___)__'--- 
        `,

  paper: `
        _______
    ___(____    '--- 
   (_____
  (_______
   (_______
     (__________'---    
    
        `        
} 


let playerChoice;
let playerChoiceMade = false;
let timeoutActive = false;
let playerScore = 0;
let computerScore = 0;

const paperButton = document.querySelector('.paper');
const scissorButton = document.querySelector('.scissors');
const rockButton = document.querySelector('.rock');


paperButton.addEventListener('click', function(){
  if (!timeoutActive) {
    playerChoice = "paper";
    playRound('paper');
    asciirow.style.marginleft = '100px';
  }
});

scissorButton.addEventListener('click', function() {
  if (!timeoutActive) {
    playerChoice = 'scissors';
    playRound('scissors');
  }
});

rockButton.addEventListener('click', function() {
  if (!timeoutActive) {
    playerChoice = 'rock';
    playRound('rock');
  }
});


const playerDisplay = document.querySelector('.player');
playerDisplay.textContent = `Player score: ${playerScore}`;

const computerDisplay = document.querySelector('.computer');
computerDisplay.textContent = `Computer score: ${computerScore}`;

const playerArt = document.querySelector('.player-art');
const computerArt = document.querySelector(`.computer-art`);

const instructions = document.querySelector('.instructions');
instructions.textContent = "Choose paper, scissors or rock";

const resetButton = document.querySelector('.reset');




resetButton.addEventListener('click', function() {
    reset();
    playerScore = 0;
    computerScore = 0;
    playerDisplay.textContent = `Player score: ${playerScore}`;
    computerDisplay.textContent = `Computer score: ${computerScore}`;
});

function mouseHover(event) {
  if (event.target == paperButton && playerChoiceMade == false) {
    playerArt.innerText = playerAscii[`paper`];
  } else if (event.target == scissorButton && playerChoiceMade == false) {
    playerArt.innerText = playerAscii[`scissors`];
  } else if (event.target == rockButton && playerChoiceMade == false) {
    playerArt.innerText = playerAscii[`rock`];
  }
}


paperButton.addEventListener("mouseover", mouseHover);
scissorButton.addEventListener("mouseover", mouseHover);
rockButton.addEventListener("mouseover", mouseHover);

paperButton.addEventListener("mouseout", function() {
  if (playerChoiceMade == false )
  {
    playerArt.innerText = "";
  }
});

scissorButton.addEventListener("mouseout", function() {
  if (playerChoiceMade == false) {
    playerArt.innerText = "";
  }
});

rockButton.addEventListener("mouseout", function() {
  if (playerChoiceMade == false) {
    playerArt.innerText = "";
  }
});