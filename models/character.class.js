class Character extends Movable {
    height = 250;
    pepeWalkImages = ImageHub.PEPE.walk;
    world;
    speed = 5;
    currentImage = 0;

    constructor() {
        super().loadImage(ImageHub.PEPE.ideal);
        this.loadImages(this.pepeWalkImages);
        this.animate();
    }

    animate() {
        setInterval(() => {
            if (Keyboard.ArrowRight && this.x < this.world.level.levelEnd_x) {
                this.x += this.speed;
                this.otherDirection = false;

            }
            if (Keyboard.ArrowLeft && this.x > 0 ) {
                this.x -= this.speed;
                this.otherDirection = true;
            }
            this.world.camera_x = -this.x + 100;
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
                let i = this.currentImage % this.pepeWalkImages.length;
                let path = this.pepeWalkImages[i];
                this.img = this.imageCache[path];
                this.currentImage++;
            }
        }, 50);
    }

    jump() {}
}
