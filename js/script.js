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

function playRound() {
  // We need our player choice
  // We need to validate the choice, otherwise the player will be able to add anything
  let correctChoice = false;
  let playerChoice = prompt("What will you choose? Rock, Paper, or Scissors?");
  while (!correctChoice) {
    switch (playerChoice.toLowerCase()) {
      case "rock":
      case "paper":
      case "scissors":
        correctChoice = true;
        break;
      default:
        alert("Please enter in a proper choice...");
        playerChoice = prompt(
          "What will you choose? Rock, Paper, or Scissors?"
        );
        break;
    }
  }
  console.log(`Player choice: ${playerChoice}`);

  // We need our computer choice (this is to be random)
  let computerChoice =
    COMPUTER_CHOICES[Math.floor(Math.random() * COMPUTER_CHOICES.length)];
  console.log(`Computer choice: ${computerChoice}`);
  // We need to determine our winner for that round
  let results = (playerChoice, computerChoice) => {
    playerChoice = playerChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (playerChoice === computerChoice)
      return `${playerChoice} vs ${computerChoice} -> Tie!`;

    if (playerWin(playerChoice, computerChoice)) {
      playerScore += 1;
      return `${playerChoice} vs ${computerChoice} -> Player Wins!`;
    }
    computerScore += 1;
    return `${playerChoice} vs ${computerChoice} -> Computer Wins!`;
  };

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
  console.log(results(playerChoice, computerChoice));
  console.log(`Player: ${playerScore} Computer: ${computerScore}`);
}
// We need to determine our winner for the game (best out of five)
function game() {
  for (let gameLoop = 0; gameLoop < 5; gameLoop++) {
    playRound();
  }
  if (playerScore === computerScore) console.log("Tie!");
  console.log(playerScore > computerScore ? "Player Wins!" : "Computer Wins!");
}

game();
