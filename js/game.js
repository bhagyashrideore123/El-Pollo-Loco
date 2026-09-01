let world;
//let keyboard = new Keyboard();
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
    world = new World(canvas);    
}

function startGame()
{
    canvas.style.display = 'block';
    startGameScreen.style.display = 'none';
    Keyboard.keyboard_eventListener();   
    world = new World(canvas);
}

function endGame(){
    canvas.style.display = 'none';
    startGameScreen.style.display = 'none';
    endGameScreen.style.display = 'block';
}

function fullscreenStart()
{
    let fullscreen = document.getElementById("fullscreen");
    enterFullScreen(fullscreen);
}

function enterFullScreen(element) {
    if(element.requestFullscreen){
        canvas.requestFullscreen();
    }else if(element.msRequestFullscreen){//for IE11 browser
        canvas.msRequestFullscreen();
    }else if(element.webkitRequestFullscreen){//ios browser
        canvas.webkitRequestFullscreen();
    }

function exitFullscreen() {
    if(document.exitFullscreen) {
        document.exitFullscreen();
    } else if(document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}
}



    