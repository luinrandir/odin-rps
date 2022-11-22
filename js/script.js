// Rock, Paper, Scissors javascript game
// Basic game details:
//  - Human vs Computer
//  - Best to five rounds
//  - Displays winner

// DOM Elements
// Game Elements
const outcome = document.getElementById("snarky");
const choices = document.querySelectorAll(".choice");
const playAgain = document.getElementById("play-again");
const player = {
  rock: document.querySelector(".player-rock"),
  paper: document.querySelector(".player-paper"),
  scissors: document.querySelector(".player-scissors"),
};
const computer = {
  rock: document.querySelector(".computer-rock"),
  paper: document.querySelector(".computer-paper"),
  scissors: document.querySelector(".computer-scissors"),
};
const playerPoint = {
  1: document.querySelector(".player-point-one"),
  2: document.querySelector(".player-point-two"),
  3: document.querySelector(".player-point-three"),
  4: document.querySelector(".player-point-four"),
  5: document.querySelector(".player-point-five"),
};
const computerPoint = {
  1: document.querySelector(".computer-point-one"),
  2: document.querySelector(".computer-point-two"),
  3: document.querySelector(".computer-point-three"),
  4: document.querySelector(".computer-point-four"),
  5: document.querySelector(".computer-point-five"),
};
// Modals
const aboutButton = document.getElementById("about-button");
const aboutModal = document.getElementById("about-modal");
const closeAbout = document.querySelector(".close-about");

// We need a constant list for the computer choices
const COMPUTER_CHOICES = ["rock", "paper", "scissors"];

// We need to keep track of our scores
let playerScore = 0;
let computerScore = 0;

function playRound(playerChoice) {
  switch (playerChoice) {
    case "rock":
      player["rock"].removeAttribute("data-hidden");
      player["paper"].setAttribute("data-hidden", "");
      player["scissors"].setAttribute("data-hidden", "");
      break;
    case "paper":
      player["paper"].removeAttribute("data-hidden");
      player["rock"].setAttribute("data-hidden", "");
      player["scissors"].setAttribute("data-hidden", "");
      break;
    case "scissors":
      player["scissors"].removeAttribute("data-hidden");
      player["paper"].setAttribute("data-hidden", "");
      player["rock"].setAttribute("data-hidden", "");
      break;
  }
  console.log(`Player choice: ${playerChoice}`);

  // We need our computer choice (this is to be random)
  let computerChoice =
    COMPUTER_CHOICES[Math.floor(Math.random() * COMPUTER_CHOICES.length)];
  switch (computerChoice) {
    case "rock":
      computer["rock"].removeAttribute("data-hidden");
      computer["paper"].setAttribute("data-hidden", "");
      computer["scissors"].setAttribute("data-hidden", "");
      break;
    case "paper":
      computer["paper"].removeAttribute("data-hidden");
      computer["rock"].setAttribute("data-hidden", "");
      computer["scissors"].setAttribute("data-hidden", "");
      break;
    case "scissors":
      computer["scissors"].removeAttribute("data-hidden");
      computer["paper"].setAttribute("data-hidden", "");
      computer["rock"].setAttribute("data-hidden", "");
      break;
  }
  console.log(`Computer choice: ${computerChoice}`);
  // We need to determine our winner for that round

  console.log(results(playerChoice, computerChoice));
  console.log(`Player: ${playerScore} Computer: ${computerScore}`);
  if (playerScore == 5 || computerScore == 5) {
    choices.forEach((choice) => {
      choice.toggleAttribute("data-disable");
    });
    playAgain.toggleAttribute("data-hidden");
  }
}

function results(playerChoice, computerChoice) {
  playerChoice = playerChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();

  if (playerChoice === computerChoice)
    return `${playerChoice} vs ${computerChoice} -> Tie!`;

  if (playerWin(playerChoice, computerChoice)) {
    playerScore += 1;
    switch (playerScore) {
      case 1:
        playerPoint[playerScore].toggleAttribute("data-hidden");
        break;
      case 2:
        playerPoint[playerScore].toggleAttribute("data-hidden");
        break;
      case 3:
        playerPoint[playerScore].toggleAttribute("data-hidden");
        break;
      case 4:
        playerPoint[playerScore].toggleAttribute("data-hidden");
        break;
      case 5:
        playerPoint[playerScore].toggleAttribute("data-hidden");
        break;
      default:
        break;
    }
    return `${playerChoice} vs ${computerChoice} -> Player Wins!`;
  }
  computerScore += 1;
  switch (computerScore) {
    case 1:
      computerPoint[computerScore].toggleAttribute("data-hidden");
      break;
    case 2:
      computerPoint[computerScore].toggleAttribute("data-hidden");
      break;
    case 3:
      computerPoint[computerScore].toggleAttribute("data-hidden");
      break;
    case 4:
      computerPoint[computerScore].toggleAttribute("data-hidden");
      break;
    case 5:
      computerPoint[computerScore].toggleAttribute("data-hidden");
      break;
    default:
      break;
  }
  return `${playerChoice} vs ${computerChoice} -> Computer Wins!`;
}

function playerWin(playerChoice, computerChoice) {
  switch (playerChoice) {
    case "rock":
      return computerChoice === "scissors" ? true : false;
    case "paper":
      return computerChoice === "rock" ? true : false;
    case "scissors":
      return computerChoice === "paper" ? true : false;
  }
}
// We need to determine our winner for the game (best out of five)
function game() {
  if (playerScore === computerScore) outcome.innerText = "Tie!";
  outcome.innerText =
    playerScore > computerScore ? "Player Wins!" : "Computer Wins!";
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;

  for (let key in player) {
    if (!player[key].hasAttribute("data-hidden")) {
      player[key].toggleAttribute("data-hidden");
    }
  }
  for (let key in computer) {
    if (!computer[key].hasAttribute("data-hidden")) {
      computer[key].toggleAttribute("data-hidden");
    }
  }
  for (let key in playerPoint) {
    if (!playerPoint[key].hasAttribute("data-hidden")) {
      playerPoint[key].toggleAttribute("data-hidden");
    }
  }
  for (let key in computerPoint) {
    if (!computerPoint[key].hasAttribute("data-hidden")) {
      computerPoint[key].toggleAttribute("data-hidden");
    }
  }

  choices.forEach((choice) => {
    choice.toggleAttribute("data-disable");
  });
  playAgain.toggleAttribute("data-hidden");
}

console.log(`Player: ${playerScore} Computer: ${computerScore}`);

// Event listeners
aboutButton.addEventListener("click", () => {
  aboutModal.showModal();
});
closeAbout.addEventListener("click", () => {
  aboutModal.close();
});
playAgain.addEventListener("click", () => {
  resetGame();
});
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    playRound(choice.getAttribute("data-choice"));
  });
});
