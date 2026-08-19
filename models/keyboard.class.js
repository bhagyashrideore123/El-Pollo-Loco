class Keyboard {
    static ArrowLeft = false;
    static ArrowRight = false;
    static SPACE = false;
    static ArrowUp = false;
    static ArrowDown = false;

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
        });
    }
}
