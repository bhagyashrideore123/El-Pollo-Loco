class Movable {
    x = 120;
    y = 200;
    img;
    height = 100;
    width = 100;
    imageCache = {};
    speed = 0.1;
    otherDirection = false;

    loadImage(path) {
        this.img = new Image(); //this.img is JS defined class which works as <img src=""> tag
        this.img.src = path;
    }

    loadImages(array) {
        array.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    moveRight() {
    }

    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60); //mostly games run animation of 60 frames per second.
    }
}
