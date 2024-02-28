function getComputerChoice () {
    let x = Math.floor((Math.random() * 3));
    console.log(x);
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

console.log(getComputerChoice());

function playRound (playerChoice, computerChoice) {
    let p = playerChoice.toLowerCase();
    let c = computerChoice.toLowerCase();
    if (p === c) {
        return ('Tie! Computer picked ' + computerChoice + ' as well.');
    }
    else if (p === 'rock' && c === 'paper') {
        return ('You lose! Paper covers Rock.');
    }
    else if (c === 'rock' && p === 'paper') {
        return ('You win! Paper covers Rock.');
    }
    else if (p === 'rock' && c === 'scissors') {
        return ('You win! Rock crushes Scissors.');
    }
    else if (c === 'rock' && p === 'scissors') {
        return ('You lose! Rock crushes Scissors.');
    }
    else if (p === 'scissors' && c === 'paper') {
        return ('You win! Scissors cut Paper.');
    }
    else if (c === 'scissors' && p === 'paper') {
        return ('You lose! Scissors cut Paper.');
    }
    else {return ('Something went wrong.');}
}

console.log (playRound('Paper', getComputerChoice()));
console.log (playRound('ROCK', getComputerChoice()));
console.log (playRound('sCiSsorS', getComputerChoice()));
console.log (playRound('POTATO', getComputerChoice()));

function playGame() {
    let playerWins = 0;
    let computerWins = 0;
    let tieOrError = 0;
    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt("rock, paper, scissors?");
        let roundOutcome = playRound(playerChoice, getComputerChoice());
        console.log(roundOutcome);
        if (roundOutcome.charAt(4) === 'w'){
            playerWins++;
        }
        else if (roundOutcome.charAt(4) === 'l'){
            computerWins++;
        }
        else {tieOrError++;}
    }
    console.log ("You won " + playerWins + " times, computer won " + computerWins + " times, and " + tieOrError + " ties or bad inputs.")
    if (playerWins > computerWins) {
        console.log("You win best of 5!")
    }
    else if (computerWins > playerWins) {
        console.log("Computer wins best of 5!")
    }
    else {console.log("No winner this game.")}
}

playGame();
