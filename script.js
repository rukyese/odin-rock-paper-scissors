let humanScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll("button");
const results = document.querySelector(".results");
const humanScoreCard = document.querySelector(".human-score");
const computerScoreCard = document.querySelector(".computer-score");

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  const choices = ["Rock", "Paper", "Scissors"];

  return choices[randomNumber];
}

function updateScore() {
  humanScoreCard.textContent = humanScore;
  computerScoreCard.textContent = computerScore;

  if (humanScore === 5 || computerScore === 5) {
    results.textContent = "Game Over! ";
    if (humanScore === computerScore) {
      results.textContent += `It's a tie! That was a close one, both played well.`;
    } else if (humanScore > computerScore) {
      results.textContent += `You did it! Congrats, you're the winner!`;
    } else {
      results.textContent += `You lost this time. Don’t worry, you’ll get 'em next time!`;
    }

    buttons.forEach((button) => {
      button.removeEventListener("click", handleClick);
    });
  }
}

function playRound(humanChoice, computerChoice) {
  const p = document.createElement("p");

  if (humanChoice === computerChoice) {
    p.textContent = `It's a tie!, You both chose ${humanChoice}.`;
  } else if (
    (humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Paper" && computerChoice === "Rock") ||
    (humanChoice === "Scissors" && computerChoice === "Paper")
  ) {
    p.textContent = `You win!, ${humanChoice} beats ${computerChoice}.`;
    humanScore++;
  } else {
    p.textContent = `You lose!, ${computerChoice} beats ${humanChoice}.`;
    computerScore++;
  }

  results.appendChild(p);
}

function handleClick(e) {
  playRound(e.target.className, getComputerChoice());
  updateScore();
}

buttons.forEach((button) => {
  button.addEventListener("click", handleClick);
});