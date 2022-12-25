const containerFluid = document.querySelector('#container-fluid');
containerFluid.setAttribute('style', 'display: flex; flex-direction: column; align-items: center; justify-content: center;');

const round = document.querySelector('#round');
round.textContent = 'Round: 0';

const container = document.querySelector('#container');

const vs = document.querySelector('#vs');
const resetBtn = document.querySelector('#reset');
const compContainer = document.querySelector('#comp-container');
const playerchoice = document.querySelector('#playerchoice');
const computerchoice = document.querySelector('#computerchoice');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const trophy = document.querySelector('#trophy');
const sad = document.querySelector('#sad');
const overlay = document.querySelector('.overlay');

const optionStyle = 'width: 80px; padding: 10px 20px; cursor: pointer; color: #fff; margin-right: 1rem; border: none; border-radius: 100%;';

//  Creating button elements with styling
const btnRock = document.createElement('div');
btnRock.setAttribute('key', 'Rock');
btnRock.setAttribute('style', optionStyle);
btnRock.style.backgroundColor = '#2f4f4f';
btnRock.innerHTML = '<img class="w-100" src="./images/rock.png"  alt="rock" />';
container.appendChild(btnRock);

const btnPaper = document.createElement('div');
btnPaper.setAttribute('key', 'Paper');
btnPaper.setAttribute('style', optionStyle);
btnPaper.style.backgroundColor = '#000080';
btnPaper.innerHTML = '<img class="w-100" src="./images/paper.png"  alt="rock" />';
container.appendChild(btnPaper);

const btnScissors = document.createElement('div');
btnScissors.setAttribute('key', 'Scissors');
btnScissors.setAttribute('style', optionStyle);
btnScissors.style.backgroundColor = '#8b4513';
btnScissors.innerHTML = '<img class="w-100" src="./images/scissors.png"  alt="rock" />';
container.appendChild(btnScissors);

//  Adding event listeners to the buttons created
btnRock.addEventListener('click', function(){
    const playerSelection = btnRock.getAttribute('key');
    playRound(playerSelection, computerPlay());
});

btnPaper.addEventListener('click', function(){
    const playerSelection = btnPaper.getAttribute('key');
    playRound(playerSelection, computerPlay());
});

btnScissors.addEventListener('click', function(){
    const playerSelection = btnScissors.getAttribute('key');
    playRound(playerSelection, computerPlay());
});

resetBtn.addEventListener('click', reset);

const computerScore = document.querySelector('#computer-play h2');
const playerScore = document.querySelector('#player-play h2');
const finalScore = document.querySelector('#final-result');


function computerPlay () {
    const select = Math.ceil(Math.random() * 3);

    if(select === 1) {
        paper.classList.replace('show', 'hide');
        scissors.classList.replace('show', 'hide');
        rock.classList.replace('hide', 'show');
        return 'Rock';
    } else if (select === 2) {
        rock.classList.replace('show', 'hide');
        scissors.classList.replace('show', 'hide');
        paper.classList.replace('hide', 'show');
        return 'Paper';
    } else {
        paper.classList.replace('show', 'hide');
        rock.classList.replace('show', 'hide');
        scissors.classList.replace('hide', 'show');
        return 'Scissors';
    }
}

function playRound (playerSelection, computerSelection) {
    const playerSel = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    const computerSel = computerSelection;

    // console.log(`Player Selection: ${playerSel}`);
    // console.log(`Computer Selection: ${computerSel}`);

    playerchoice.textContent = playerSel;
    computerchoice.textContent = computerSel;

    finalScore.innerHTML = '';

    if((playerSel === 'Rock' && computerSel === 'Scissors') || (playerSel === 'Paper' && computerSel === 'Rock') || (playerSel === 'Scissors' && computerSel === 'Paper')) {
        playerScoreCount++;
        playerScore.textContent = String(playerScoreCount);
        vs.textContent = 'You win!';
    } else if (playerSel === computerSel) {
        vs.textContent = "It's a tie!";
    } else {
        computerScoreCount++;
        computerScore.textContent = String(computerScoreCount);
        vs.textContent = 'You lose!';
    }

    if (playerScoreCount === 5 || computerScoreCount === 5) {
        roundCount = 0;
        round.textContent = `Round: ${String(roundCount)}`;
    } else {
        roundCount++;
        round.textContent = `Round: ${String(roundCount)}`;
    }

    if(playerScoreCount === 5) {
        vs.classList.replace('show', 'hide');
        resetBtn.classList.replace('hide', 'show');
        finalScore.classList.replace('hide', 'show');
        finalScore.textContent = 'Congratulations!';
        trophy.classList.replace('hide', 'show');
        overlay.classList.replace('hide', 'show');
        playerScoreCount = 0;
        computerScoreCount = 0;
    }

    if(computerScoreCount === 5) {
        vs.classList.replace('show', 'hide');
        resetBtn.classList.replace('hide', 'show');
        finalScore.classList.replace('hide', 'show');
        finalScore.textContent = 'Oops. You Lost!!';
        sad.classList.replace('hide', 'show');
        overlay.classList.replace('hide', 'show');
        playerScoreCount = 0;
        computerScoreCount = 0;
    }
}

function reset () {
    playerScoreCount = 0;
    playerScore.textContent = 0;
    computerScoreCount = 0;
    computerScore.textContent = 0;
    playerchoice.textContent = '';
    computerchoice.textContent = '';
    vs.textContent = 'VS'
    vs.classList.replace('hide', 'show');
    resetBtn.classList.replace('show', 'hide');
    finalScore.classList.replace('show', 'hide');
    rock.classList.replace('show', 'hide');
    scissors.classList.replace('show', 'hide');
    paper.classList.replace('show', 'hide');
    trophy.classList.replace('show', 'hide');
    sad.classList.replace('show', 'hide');
    overlay.classList.replace('show', 'hide');
}

let playerScoreCount = 0;
let computerScoreCount = 0;
let roundCount = 0;