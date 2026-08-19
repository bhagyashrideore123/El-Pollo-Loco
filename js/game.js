let Canvas;
let world;
let keyboard = new Keyboard();

function init() {
    Keyboard.keyboard_eventListener();
    canvas = document.getElementById("canvas");
    world = new World(canvas,keyboard);
}


    