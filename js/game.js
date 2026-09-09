import { Globals } from "../models/globals.class.js";
import { Keyboard } from "../models/keyboard.class.js";
import { World } from "../models/world.class.js";

let world;

function init() {
    Globals.canvas.style.display = "block";
    Globals.startGameScreen.style.display = "none";
    Globals.resControls.style.display = "none";
    Globals.lostScreen.style.display = "none";
    Globals.wonScreen.style.display = "none";

    Keyboard.keyboard_eventListener();
    Globals.canvas = document.getElementById("canvas");
    world = new World(Globals.canvas);
    setInterval(() => {
        checkScreen();
    }, 1000);
}

function startGame() {
    canvas.style.display = "block";
    startGameScreen.style.display = "none";
    Keyboard.keyboard_eventListener();
    world = new World(Globals.canvas);
}

function endGame() {
    canvas.style.display = "none";
    startGameScreen.style.display = "none";
    endGameScreen.style.display = "block";
}

function fullscreenStart() {
    let fullscreen = document.getElementById("fullscreen");
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

init();