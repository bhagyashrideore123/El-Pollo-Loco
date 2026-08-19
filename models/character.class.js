class Character extends Movable {
    height = 250;
    currentImage = 0;
    world;
    speed = 5;

    constructor() {
        super().loadImage(ImageHub.pepe[2].ideal);
        this.loadImages(ImageHub.pepe[0].walk);
        this.animate();
    }

    animate() {
        setInterval(() => {
            if (Keyboard.ArrowRight) {
                this.x += this.speed;
            }
            if (Keyboard.ArrowLeft) {
                this.x -= this.speed;
            }
        }, 1000 / 60); //60 frames per second

        setInterval(() => {
            //let i = 0 % 6; 0, rest 0
            //let i = 1 % 6; 0, rest 1
            // ...
            // let i = 5 % 6; 0, rest 5
            // let i = 6 % 6; 0, rest 0  > here our array will reset and it will start iterating with 0th image again.
            //OUTPUT: i  = 0,1,2,3,4,5,0,1,2,3......
            if (Keyboard.ArrowRight || Keyboard.ArrowLeft) {
                //walk animation
                let i = this.currentImage % ImageHub.pepe[0].walk.length;
                let path = ImageHub.pepe[0].walk[i];
                this.img = this.imageCache[path];
                this.currentImage++;
            }
        }, 50);
    }

    jump() {}
}
