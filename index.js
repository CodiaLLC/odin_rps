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

function gameOutcome (playerChoice, computerChoice) {
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

console.log (gameOutcome('Paper', getComputerChoice()));
console.log (gameOutcome('ROCK', getComputerChoice()));
console.log (gameOutcome('sCiSsorS', getComputerChoice()));
console.log (gameOutcome('POTATO', getComputerChoice()));