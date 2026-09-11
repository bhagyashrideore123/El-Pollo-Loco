import { AudioHub } from "../models/audio.class.js";
import { Globals } from "../models/globals.class.js";
import { Keyboard } from "../models/keyboard.class.js";
import { World } from "../models/world.class.js";
import { initLevel } from "./levels/level1.js";

let world;

function init() {
    Globals.canvas.style.display = "none";
    Globals.startGameScreen.style.display = "flex";
    Globals.resControls.style.display = "none";
    Globals.lostScreen.style.display = "none";
    Globals.wonScreen.style.display = "none";
    startGameMusik();
    // Keyboard.keyboard_eventListener();
    // Globals.canvas = document.getElementById("canvas");
    // world = new World(Globals.canvas);
    // setInterval(() => {
    //     checkScreen();
    // }, 1000);
}

function startGame() {
   
    Globals.canvas.style.display = "block";
    Globals.startGameScreen.style.display = "none";
    initLevel();
    Keyboard.keyboard_eventListener();
    world = new World(Globals.canvas);
    playBackgroundMusik();
}

function endGame() {
    endGameMusik();
    Globals.canvas.style.display = "none";
    Globals.startGameScreen.style.display = "none";
}

function fullscreenStart() {
    let fullscreen = Globals.fullscreen;
    enterFullScreen(fullscreen);
}

function enterFullScreen(element) {
    if (element.requestFullscreen) {
        canvas.requestFullscreen();
    } else if (element.msRequestFullscreen) {
        //for IE11 browser
        canvas.msRequestFullscreen();
    } else if (element.webkitRequestFullscreen) {
        //ios browser
        canvas.webkitRequestFullscreen();
    }
}

function checkScreen() {
    if (window.matchMedia("(hover: none)").matches) {
        Globals.resControls.style.display = "flex";
    }else{
        Globals.resControls.style.display = "none";
    }
}

function toggleSound() {
    Globals.isMuted = !Globals.isMuted;   
    if (Globals.isMuted) {
        soundBtn.innerHTML = "🔇";
    } else {
        soundBtn.innerHTML = "🔊";
    }
}

function startGameMusik()
{
    try{
        AudioHub.playOne(AudioHub.GAME_START_MUSIK);
    }catch(e)
    {
        console.log(e)
    }
    
}
function playBackgroundMusik()
{
    AudioHub.playOne(AudioHub.GAME_BACKGROUND_MUSIK);
}
function endGameMusik()
{
    AudioHub.playOne(AudioHub.GAME);
}

Globals.startBtn.addEventListener("click", startGame);
Globals.fullscreen.addEventListener("click", fullscreenStart);
Globals.restartBtn.addEventListener("click", startGame);
Globals.playAgainBtn.addEventListener("click", startGame);
Globals.soundBtn.addEventListener("click", toggleSound);

init();