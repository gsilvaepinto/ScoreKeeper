const p1 = {
    score: 0,
    display: document.querySelector('#p1Display'),
    button: document.querySelector('#P1')
}

const p2 = {
    score: 0,
    display: document.querySelector('#p2Display'),
    button: document.querySelector('#P2')
}

let buttonReset = document.querySelector('#reset');
let selectOption = document.querySelector('#options');

let winningRange = parseInt(selectOption.value);
let isGameOver = false;

function updateScore(player, opponent) {
    if (!isGameOver) {
        player.score++;
        if (player.score === winningRange) {
            isGameOver = true;
            player.display.classList.add('winner');
            opponent.display.classList.add('looser');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

p1.button.addEventListener('click', () => {
    updateScore(p1, p2);
});

p2.button.addEventListener('click', () => {
    updateScore(p2, p1);
});

selectOption.addEventListener('change', () => {
    winningRange = parseInt(selectOption.value);
});

buttonReset.addEventListener('click', resetGame);

function resetGame() {
    isGameOver = false;
    for (let p of [p1, p2]){
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('winner', 'looser');
        p.button.disabled = false;
    }
}
