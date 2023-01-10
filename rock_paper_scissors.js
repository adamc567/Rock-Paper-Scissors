function computerChoice() {
    const compChoice = ["rock", "paper", "scissors"];
    let rock_paper_scissor = compChoice[Math.floor(Math.random() * compChoice.length)];
    console.log(rock_paper_scissor);
    return (rock_paper_scissor);
}
function playerChoice() {
let myChoice = prompt('Time to battle! Pick Rock, Paper, or Scissors!');
if(myChoice.toLowerCase() === 'rock') {
    return myChoice;
}
 else if(myChoice.toLowerCase() === 'paper') {
    return myChoice;
}
 else if(myChoice.toLowerCase() === 'scissors') {
    return myChoice;
}
    else {
        alert('Fuck off and pick rock, paper, or scissors!'),
        playerChoice();
    }
}
let player;
let computer;
let playerScore = 0;
let computerScore = 0;
let round = 0;

function playRound(player, computer) {
player = playerChoice().toLowerCase();
computer = computerChoice();
if (computer === player) {
return round ++, (`Draw! ${player} = ${computer}`);
    }
    else if (player === 'rock' && computer === 'paper'){
        return computerScore ++, round ++, (`You lost :( ${computer}) beats ${player}`)
    }
    else if (player === 'paper' && computer === 'scissors'){
         return computerScore ++, round ++, (`Nope, ${computer} beats ${player} Get over it and do better`);
    }
    else if (player === 'scissors' && computer === "rock") {
        return computerScore ++, round ++,  (`I am so sorry, but this round was not yours. ${computer} beats ${player}`);
    }
    else {
        return playerScore ++, round ++, (`${player} beats ${computer} You won. Congrats, You won at a guessing game that has zero skilled involved.`)
    }
}

function gameFive() {
    for (let i = 0; i < 5; i++) {
        playRound();}
     if(playerScore > computerScore) {
        return `You win! ${playerScore} - ${computerScore}`;
     } else if (playerScore === computerScore) {
        return `You tied a computer... ${playerScore} - ${computerScore}, Congrats?`
     } else {
        return `Ya lost, sucker! ${computerScore} - ${playerScore}`;
    }
}