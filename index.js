function getComputerChoice () {
    let x = Math.floor((Math.random() * 3));
    if (x === 0) {
        return 'Rock';
    }
    else if (x === 1) {
        return 'Paper';
    }
    else {
        return 'Scissors';
    }
}

function playRound (playerChoice, computerChoice) {
    let p = playerChoice.toLowerCase();
    let c = computerChoice.toLowerCase();
    scoreboard.textContent = `Computer chose ${computerChoice}. \r\n`
    if (p === c) {
        return ('tie');
    }
    else if (p === 'rock' && c === 'paper') {
        return ('loss');
    }
    else if (c === 'rock' && p === 'paper') {
        return ('win');
    }
    else if (p === 'rock' && c === 'scissors') {
        return ('win');
    }
    else if (c === 'rock' && p === 'scissors') {
        return ('loss');
    }
    else if (p === 'scissors' && c === 'paper') {
        return ('win');
    }
    else if (c === 'scissors' && p === 'paper') {
        return ('loss');
    }
    else { return ('error');}
}

let playerWins = 0;
let computerWins = 0;
const scoreboard = document.getElementById('scoreboard');
scoreboard.setAttribute('style', 'white-space: pre;');

function scoreReset() {
    playerWins = 0;
    computerWins = 0;
}

function playGame () {
    let outcome = playRound(this.id, getComputerChoice());
    if (outcome === 'win') {
        playerWins += 1;
        scoreboard.textContent += ('Player wins this round.\n Current score:\n Player: ' 
        + playerWins + ' \n Computer: ' + computerWins);
        if (playerWins >= 5) {
            scoreboard.textContent += '\r\n\r\n PLAYER WINS THIS SET!';
            scoreReset();
        }
    }
    else if (outcome === 'loss') {
        computerWins += 1;
        scoreboard.textContent += (`Computer wins this round.\n Current score:\n Player: ${playerWins} \n Computer: ${computerWins}`)
        if (computerWins >= 5) {
            scoreboard.textContent += '\r\n\r\n COMPUTER WINS THIS SET!';
            scoreReset();
        }
    }
    else if (outcome === 'tie') {
        scoreboard.textContent += (`Tie this round.\n Current score:\n Player: ${playerWins} \n Computer: ${computerWins}`)
    }
    else if (outcome === 'error') {
        scoreboard.textContent = 'Something went wrong.'
    }
}

let rockButton = document.getElementById('rock');
let paperButton = document.getElementById('paper');
let scissorsButton = document.getElementById('scissors');

rockButton.addEventListener("click", playGame);
paperButton.addEventListener("click", playGame);
scissorsButton.addEventListener("click", playGame);





