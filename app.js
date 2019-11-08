function computerPlay () {
    const select = Math.ceil(Math.random() * 3);

    if(select === 1) {
        return 'Rock';
    } else if (select === 2) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

function playerPlay () {
    let playerSelection = prompt("What's your play?\nNote:\n1. It must not be left empty.\n2. Choose either 'Rock'. 'Paper', 'Scissors'.\n3. It must not be a number.");
    return playerSelection !== null && isNaN(playerSelection) ? playerSelection : playerPlay();
}

function playRound (playerSelection, computerSelection) {
    const playerSel = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    const computerSel = computerSelection;

    console.log(`Player Selection: ${playerSel}`);
    console.log(`Computer Selection: ${computerSel}`);

    let str;
    if((playerSel === 'Rock' && computerSel === 'Scissors') || (playerSel === 'Paper' && computerSel === 'Rock') || (playerSel === 'Scissors' && computerSel === 'Paper')) {
        playerScore++;
        str = `You Win! ${playerSel} beats ${computerSel}`;
        return str;
    } else if(playerSel === computerSel) {
        str = `It's a tie!`;
        return str;
    } else {
        computerScore++;
        str = `You Lose! ${computerSel} beats ${playerSel}`;
        return str;
    }
}

function game () {
    for(let i = 1; i <= 5; i++) {
        console.log(`Game Round: ${i}`);
        console.log(playRound(playerPlay(), computerPlay()));
    }

    console.log(`Final Scoresheet:\nScore: Player ${playerScore} : ${computerScore} Computer`);
}

let playerScore = 0;
let computerScore = 0;

game();