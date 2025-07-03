let humanScore = 0;
let computerScore = 0;

const result = document.querySelector("#results");
const score = document.querySelector("#score");
const final = document.querySelector("#final");
const resetBtn = document.querySelector("#reset");

function getComputerChoice() {
  const randomNumber = Math.random();

  if (randomNumber < 1/3) {
    return "rock";
  } else if (randomNumber < 2/3) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    result.textContent = "It's a draw!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissor") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissor" && computerChoice === "paper")
  ) {
    result.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    humanScore++;
  } else {
    result.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
    computerScore++;
  }
  updateScore();
  checkWinner();
}

function updateScore() {
  score.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
}

function disableButtons() {
  document.querySelectorAll("button").forEach(btn => {
    if (btn.id !== "reset") btn.disabled = true;
  });
  resetBtn.style.display = "inline";
}

function checkWinner() {
  if (humanScore === 5) {
    final.textContent = "🎉 You WIN the game!";
    disableButtons();
  } else if (computerScore === 5) {
    final.textContent = "💀 You LOSE the game!";
    disableButtons();
  }
}

function playGame() {
    const rock = document.querySelector("#rock")
    const paper = document.querySelector("#paper")
    const scissor = document.querySelector("#scissors")

    rock.addEventListener('click', () => {
        const computerChoice = getComputerChoice()
        playRound('rock', computerChoice)

    })

    paper.addEventListener('click', () => {
        const computerChoice = getComputerChoice()
        playRound('paper', computerChoice)
        
    })

    scissor.addEventListener('click', () => {
        const computerChoice = getComputerChoice()
        playRound('scissors', computerChoice)
    })

    resetBtn.addEventListener("click", resetGame);
    }

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  result.textContent = "";
  final.textContent = "";
  updateScore();
  resetBtn.style.display = "none";
  document.querySelectorAll("button").forEach(btn => btn.disabled = false);
}

playGame()