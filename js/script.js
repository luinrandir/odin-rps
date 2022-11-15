// Rock, Paper, Scissors javascript game
// Basic game details:
//  - Human vs Computer
//  - Best to five rounds? Need to check with what is given from TOP
//  - Displays winner

// We need a constant list for the computer choices
const COMPUTER_CHOICES = ["Rock", "Paper", "Scissors"];

// We need to keep track of our scores
let playerScore = 0;
let computerScore = 0;

// We need our player choice
// We need to validate the choice, otherwise the player will be able to add anything
let correctChoice = false;
let playerChoice = prompt("What will you choose? Rock, Paper, or Scissors?");
while (!correctChoice) {
  switch (playerChoice) {
    case "Rock":
    case "Paper":
    case "Scissors":
      correctChoice = true;
      break;
    default:
      alert("Please enter in a proper choice...");
      playerChoice = prompt("What will you choose? Rock, Paper, or Scissors?");
      break;
  }
}
console.log(`Player choice: ${playerChoice}`);

// We need our computer choice (this is to be random)
let computerChoice =
  COMPUTER_CHOICES[Math.floor(Math.random() * COMPUTER_CHOICES.length)];

// We need to determine our winner for that round

// We need to determine our winner for the game (best out of five)
