import { AudioHub } from "./audio.class.js";
import { Globals } from "./globals.class.js";

export class Keyboard {
    static ArrowLeft = false;
    static ArrowRight = false;
    static SPACE = false;
    static ArrowUp = false;
    static ArrowDown = false;
    static D = false;

    static keyboard_eventListener() {
        window.addEventListener("keydown", (event) => {
            if (event.keyCode == 37) {
                Keyboard.ArrowLeft = true;
            }
            if (event.keyCode == 39) {
                Keyboard.ArrowRight = true;
            }
            if (event.keyCode == 32) {
                Keyboard.SPACE = true;
            }
            if (event.keyCode == 38) {
                Keyboard.ArrowUp = true;
            }
            if (event.keyCode == 40) {
                Keyboard.ArrowDown = true;
            }
            if (event.keyCode == 68) {
                Globals.canThrow = false;
                Keyboard.D = true;
            }
        });

    window.addEventListener("keyup", (event) => {

            if (event.keyCode == 37) {
                Keyboard.ArrowLeft = false;
            }
            if (event.keyCode == 39) {
                Keyboard.ArrowRight = false;
            }
            if (event.keyCode == 32) {
                Keyboard.SPACE = false;
            }
            if (event.keyCode == 38) {
                Keyboard.ArrowUp = false;
            }
            if (event.keyCode == 40) {
                Keyboard.ArrowDown = false;
            }
            if (event.keyCode == 68) {
                Globals.canThrow = true;
                Keyboard.D = false;
            }
        });
    }
}
