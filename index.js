function getComputerChoice () {
    let x = Math.floor((Math.random() * 3));
    console.log(x);
    if (x == 0) {
        return 'Rock';
    }
    else if (x == 1) {
        return 'Paper';
    }
    else {
        return 'Scissors';
    }
}


console.log(getComputerChoice());