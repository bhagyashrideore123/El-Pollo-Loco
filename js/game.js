let world;
let keyboard = new Keyboard();
let startGameScreen = document.getElementById("startScreen");
let endGameScreen = document.getElementById("EndScreen");
let canvas = document.getElementById("canvas");

function init() {
    // endGame();
    canvas.style.display = 'block';
    // startGameScreen.style.display = 'none';
    // endGameScreen.style.display = 'none';
    Keyboard.keyboard_eventListener();
    canvas = document.getElementById("canvas");
    world = new World(canvas,keyboard);    
}

function startGame()
{
    canvas.style.display = 'block';
    startGameScreen.style.display = 'none';
    Keyboard.keyboard_eventListener();   
    world = new World(canvas,keyboard);
}

function endGame(){
    canvas.style.display = 'none';
    startGameScreen.style.display = 'none';
    endGameScreen.style.display = 'block';
}

function resizeCanvas() {
    canvas.requestFullscreen();
}



    