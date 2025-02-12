function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  const choices = ["rock", "paper", "scissors"];

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
    return humanChoice;
  }
}