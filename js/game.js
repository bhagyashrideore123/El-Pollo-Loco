let world;
let keyboard = new Keyboard();
let startGameScreen = document.getElementById("startScreen");
let canvas = document.getElementById("canvas");

function init() {

    canvas.style.display = 'none';
    // Keyboard.keyboard_eventListener();
    // canvas = document.getElementById("canvas");
    // world = new World(canvas,keyboard);    
}

function startGame()
{
    canvas.style.display = 'block';
    startGameScreen.style.display = 'none';
    Keyboard.keyboard_eventListener();   
    world = new World(canvas,keyboard);
}

function resizeCanvas() {
    canvas.requestFullscreen();
}



    