let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  const choices = ["Rock", "Paper", "Scissors"];

  return choices[randomNumber];
}

function getHumanChoice() {
  const humanChoice = prompt(
    "Choose Rock, Paper, or Scissors to play"
  ).toLowerCase();

  if (
    humanChoice !== "rock" &&
    humanChoice !== "paper" &&
    humanChoice !== "scissors"
  ) {
    alert("Invalid choice! Please enter Rock, Paper, or Scissors.");
    return getHumanChoice();
  } else {
    return humanChoice[0].toUpperCase() + humanChoice.substring(1);
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log(`It's a tie!, You both chose ${humanChoice}.`);
  } else if (
    (humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Paper" && computerChoice === "Rock") ||
    (humanChoice === "Scissors" && computerChoice === "Paper")
  ) {
    console.log(`You win!, ${humanChoice} beats ${computerChoice}.`);
    humanScore++;
  } else {
    console.log(`You lose!, ${computerChoice} beats ${humanChoice}.`);
    computerScore++;
  }

  console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
}

function playGame() {
  for (i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }

  console.log("Game Over!");
  if (humanScore === computerScore) {
    console.log(`It's a tie! That was a close one, both played well.`);
  } else if (humanScore > computerScore) {
    console.log(`You did it! Congrats, you're the winner!`);
  } else {
    console.log(`You lost this time. Don’t worry, you’ll get 'em next time!`);
  }
}

playGame();
