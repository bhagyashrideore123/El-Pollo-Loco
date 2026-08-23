class Character extends Movable {
    y = 180;
    height = 250;
    pepeWalkImages = ImageHub.PEPE.walk;
    pepeJumpImages = ImageHub.PEPE.jump;
    world;
    speed = 5;

    constructor() {
        super().loadImage(ImageHub.PEPE.ideal);
        this.loadImages(this.pepeWalkImages);
        this.applyGravity();
        this.loadImages(this.pepeJumpImages);
        this.animate();
    }

    animate() {
        setInterval(() => {
            Global.pause();
            if (Keyboard.ArrowRight && this.x < this.world.level.levelEnd_x) {
                this.moveRight();
                this.otherDirection = false;
                Global.playWalk();
            }
            if (Keyboard.ArrowLeft && this.x > 0) {
                this.moveLeft();
                this.otherDirection = true;
                Global.playWalk();
            }
            if (Keyboard.SPACE && !this.isAboveGround()) {
                this.jump();
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

            if (this.isAboveGround()) {
                //when in air show jump images
                this.playAnimation(this.pepeJumpImages);
            } else {
                if (Keyboard.ArrowRight || Keyboard.ArrowLeft) {
                    //when on graound show walk img
                    this.playAnimation(this.pepeWalkImages);
                }
            }
        }, 50);
    }

    jump() {
        this.speedY = 30;
    }
}
