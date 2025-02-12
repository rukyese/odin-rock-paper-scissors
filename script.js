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
    return humanChoice[0].toUpperCase() + humanChoice.subsrting(1);
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
