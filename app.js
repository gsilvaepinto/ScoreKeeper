let p1Display = document.querySelector('#p1Display');
let p2Display = document.querySelector('#p2Display');
let p1Button = document.querySelector('#P1');
let p2Button = document.querySelector ('#P2');
let selectOptions = document.querySelector("#options");
let resetButton = document.querySelector('#reset');

let p1Score = 0;
let p2Score = 0;
let winningRange = parseInt(selectOptions.value);
let isGameOver = false;

p1Button.addEventListener('click', () => {
    if(!isGameOver){
        p1Score++;
        if(p1Score === winningRange){
            isGameOver = true;
        }
        p1Display.textContent = p1Score;
    }
});

p2Button.addEventListener('click', () => {
    if(!isGameOver){
        p2Score++;
        if(p2Score === winningRange){
            isGameOver = true;
        }
        p2Display.textContent = p2Score;
    }
});

selectOptions.addEventListener('change', () => {
    winningRange = parseInt(selectOptions.value);
    resetGame();
});

resetButton.addEventListener('click', resetGame);

function resetGame(){
    p1Score = 0;
    p2Score = 0;
    isGameOver = false;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
}