let player;
let computer;
let playerScore = 0;
let computerScore = 0;
let round = 0;
let winner;


function playerChoice(weapon) {
    if (weapon === 'rock') {
        playerDisplay.textContent = "You picked rock!";
        player = 'rock';
        playRound();
    } else if (weapon === 'paper') {
        playerDisplay.textContent = "You picked paper!";
        player = 'paper'
        playRound();
    } else if (weapon === 'scissors') {
        playerDisplay.textContent = "You picked scissors!"
        player = 'scissors'
        playRound();
    } else {
        playerDisplay.textContent = "";
    }
}    
function resetGame (){
    window.location.reload(true)
}    

function computerChoice() {
    const compChoice = ["rock", "paper", "scissors"];
    let rock_paper_scissor = compChoice[Math.floor(Math.random() * compChoice.length)];
    computerChoiceDisplay.innerHTML = `The computer picked ${rock_paper_scissor}!`;
    return (rock_paper_scissor);
}

function playRound(playerPick, computer) {
computer = computerChoice();

if (computer === player) {
 round++, 
 returnText.textContent = `Draw! ${player} = ${computer}`;
    }
    else if (player === 'rock' && computer === 'paper'){
        computerScore++,
        round++,
        returnText.textContent = (`You lost :( ${computer}) beats ${player}`)
    }
    else if (player === 'paper' && computer === 'scissors'){
         computerScore ++;
         round++;
         returnText.textContent = (`Nope, ${computer} beats ${player} Get over it and do better`);
    }
    else if (player === 'scissors' && computer === "rock") {
        computerScore++;
        round++;  
        returnText.textContent = (`I am so sorry, but this round was not yours. ${computer} beats ${player}`);
    }
    else {
        playerScore ++; 
        round ++; 
        returnText.textContent = (`${player} beats ${computer} You won. Congrats, You won at a guessing game that has zero skilled involved.`)
    }
    roundDisplay.innerHTML = `Round number: ${round}`;
    computerScoreDisplay.innerHTML = `Computer score: ${computerScore}`;
    playerScoreDisplay.innerHTML = `Your score: ${playerScore}`;
}
//Exists to style winnerAnnouncement only.
// document.getElementById('winAnnouncement').innerHTML = "Today is your day! </br> You win!";

function bestOfFive() {
    if (playerScore === 5) {
        document.getElementById('winAnnouncement').innerHTML = "Today is your day! </br> You win!";
    } else if (computerScore === 5){
    document.getElementById('winAnnouncement').innerHTML = "Nope. Sorry bud. </br> Not today.";
  }
}
//remove transition when clicked again. or reset or whatever.
//const animationReset = document.querySelector('.weapon');
//animationReset.addEventListener('click', () =>)

const rock_btn = document.querySelector('#rock');
rock_btn.addEventListener('click', () => playerChoice('rock'));
rock_btn.addEventListener('click', () => bestOfFive());

const paper_btn = document.querySelector('#paper');
paper_btn.addEventListener('click', () => playerChoice('paper'));
paper_btn.addEventListener('click', () => bestOfFive());

const scissors_btn = document.querySelector('#scissors');
scissors_btn.addEventListener('click', () => playerChoice('scissors'));
scissors_btn.addEventListener('click', () => bestOfFive());

let playerDisplay = document.querySelector('.yourChoice');
playerDisplay.textContent = 'Choose your weapon.';

let roundDisplay = document.querySelector('.round');
roundDisplay.innerHTML = `Round number: ${round}`;

let computerChoiceDisplay = document.querySelector('.computerChoice');
computerChoiceDisplay.textContent = "The computer will pick its own"

let playerScoreDisplay = document.querySelector('.playerScore');
playerScoreDisplay.innerHTML = `Your score: ${playerScore}`;

let computerScoreDisplay = document.querySelector('.computerScore');
computerScoreDisplay.innerHTML = `Computer score: ${computerScore}`;

let returnText = document.querySelector('.returnText');
returnText.innerHTML = 'First to five wins!';

let reset_btn = document.querySelector('.resetGame');
reset_btn.addEventListener('click', () => resetGame());

//adjust sizing to fit in browser.

