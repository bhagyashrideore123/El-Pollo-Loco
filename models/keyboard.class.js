class Keyboard {
    static ArrowLeft = false;
    static ArrowRight = false;
    static SPACE = false;
    static ArrowUp = false;
    static ArrowDown = false;

    static keyboard_eventListener() {
        window.addEventListener("keydown", (event) => {
            console.log("key pressed: ", event);

            if (event.keyCode == 37) {
                Keyboard.ArrowLeft = true;
            } else if (event.keyCode == 39) {
                Keyboard.ArrowRight = true;
            } else if (event.keyCode == 32) {
                Keyboard.SPACE = true;
            } else if (event.keyCode == 38) {
                Keyboard.ArrowUp = true;
            } else if (event.keyCode == 40) {
                Keyboard.ArrowDown = true;
            }
        });
    }
}
