import { AudioHub } from "../models/audio.class.js";
import { Globals } from "../models/globals.class.js";
import { IntervalHub } from "../models/intervalHub.class.js";
import { Keyboard } from "../models/keyboard.class.js";
import { World } from "../models/world.class.js";
import { initLevel } from "./levels/level1.js";

let world;
let keyboardInitialized = false;

function init() {
    Globals.canvas.style.display = "none";
    Globals.startGameScreen.style.display = "flex";
    Globals.resControls.style.display = "none";
    Globals.lostScreen.style.display = "none";
    Globals.wonScreen.style.display = "none";
    startGameMusik();
}

function startGame() {
    IntervalHub.stopAllIntervals();// kill every interval from the previous game/world
    if (world) world.running = false; // stop the old draw loop before creating a new World
    AudioHub.playOne(AudioHub.GAME);
    Globals.canvas.style.display = "block";
    Globals.startGameScreen.style.display = "none";
    Globals.lostScreen.style.display = "none";
    Globals.wonScreen.style.display = "none";
    Globals.soundBtn.style.display = "flex";
    Globals.fullscreen.style.display = "flex";
    initLevel();
    if (!keyboardInitialized) {
        Keyboard.keyboard_eventListener();
        Keyboard.bindBtnPressEvents(); // ← attach the touch controls
        keyboardInitialized = true;
    }
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
    Globals.fullscreen.blur();
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

function checkScreen(mql) {//window.matchMedia() returns a MediaQueryList object, and that object supports a change event
    if (mql.matches) {
        Globals.resControls.style.display = "flex";
    } else {
        Globals.resControls.style.display = "none";
    }
}
const hoverCheck = window.matchMedia("(hover: none)");
checkScreen(hoverCheck); // run once on load
hoverCheck.addEventListener("change", () => checkScreen(hoverCheck)); // check live as well

function toggleSound() {
   
        Globals.isMuted = !Globals.isMuted;
        Globals.soundBtn.innerHTML = Globals.isMuted ? "🔇" : "🔊";
        AudioHub.applyMuteState();
        Globals.soundBtn.blur(); // give up focus so Space (jump) doesn't re-trigger this button
  
}

function startGameMusik() {
    try {
        AudioHub.playOne(AudioHub.GAME_START_MUSIK);
    } catch (e) {
        console.log(e);
    }
}
function playBackgroundMusik() {
    AudioHub.playOne(AudioHub.GAME_BACKGROUND_MUSIK);
}
function endGameMusik() {
    AudioHub.playOne(AudioHub.GAME);
}

Globals.startBtn.addEventListener("click", startGame);
Globals.fullscreen.addEventListener("click", fullscreenStart);
Globals.restartBtn.addEventListener("click", startGame);
Globals.playAgainBtn.addEventListener("click", startGame);
Globals.soundBtn.addEventListener("click", toggleSound);

init();
