import { Keyboard } from "../models/keyboard.class.js";
import { World } from "../models/world.class.js";

let world;
let startGameScreen = document.getElementById("startScreen");
let endGameScreen = document.getElementById("EndScreen");
let canvas = document.getElementById("canvas");
let resControls = document.getElementById("responsiveKontrols");

function init() {
    // endGame();
    canvas.style.display = "block";
    startGameScreen.style.display = "none";
    endGameScreen.style.display = "none";
    resControls.style.display = "none";
    Keyboard.keyboard_eventListener();
    canvas = document.getElementById("canvas");
    world = new World(canvas);
    setInterval(() => {
        checkScreen();
    }, 1000);
}

function startGame() {
    canvas.style.display = "block";
    startGameScreen.style.display = "none";
    Keyboard.keyboard_eventListener();
    world = new World(canvas);
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
        resControls.style.display = "flex";
    }
}

init();