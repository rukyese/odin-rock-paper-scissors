function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  const choices = ["Rock", "Paper", "Scissors"];

  return choices[randomNumber];
}