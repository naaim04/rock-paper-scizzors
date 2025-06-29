function getComputerChoice() {
  const randomNumber = Math.random();

  if (randomNumber < 1/3) {
    return "rock";
  } else if (randomNumber < 2/3) {
    return "paper";
  } else {
    return "scissor";
  }
}


function getHumanChoice() {
    const choice = prompt("Enter a choice").toLowerCase()
    return choice
}


function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a draw!")
        return 0

    } else if (humanChoice === 'rock') {

        if (computerChoice === 'paper') {
            console.log("You lose! paper beats rock.")
            return -1
        } else {
            (console.log("You win! rock beats scissor"))
            return 1
        }
        
    } else if (humanChoice == 'paper') {

        if (computerChoice === 'rock') {
            console.log("You win! paper beats rock.")
            return 1
        } else {
            (console.log("You lose! scissor beats paper."))
            return -1
        }

    } else if (humanChoice == 'scissor') {

        if (computerChoice === 'rock') {
            console.log("You lose! rock beats scissor.")
            return -1
        } else {
            (console.log("You win! scissor beats paper"))
            return 1
        }
    }
}

function playGame() {
    let humanScore = 0
    let computerScore = 0
    for (let i = 1; i <=5; i++){
        const computerChoice = getComputerChoice()
        const humanChoice = getHumanChoice()
        let num = playRound(humanChoice, computerChoice)
        if (num === 1) {
            humanScore++
        } else if (num === -1)
            computerScore++ 
        console.log(humanScore)
        console.log(computerScore)
                
    }
    if (humanScore > computerScore) {
        console.log("YOU WIN!!!")
    } else if (humanScore < computerScore) {
        console.log("YOU LOSE!!!")
    } else {
        console.log("IT'S A DRAW")
    }
}

playGame()