class Character extends Movable {
    x = 200;
    y = 180;
    height = 250;
    width = 100;
    pepeWalkImages = ImageHub.PEPE.walk;
    pepeJumpImages = ImageHub.PEPE.jump;
    pepeDeadImages = ImageHub.PEPE.dead;
    pepeHitImages = ImageHub.PEPE.hurt;
    world;
    speed = 3.5;

    constructor() {
        super().loadImage(ImageHub.PEPE.ideal);
        this.loadImages(this.pepeWalkImages);
        this.loadImages(this.pepeJumpImages);
        this.loadImages(this.pepeDeadImages);
        this.loadImages(this.pepeHitImages);

        IntervalHub.startInterval(this.applyGravity, 1000 / 25);
        IntervalHub.startInterval(this.animate, 1000 / 60); //60 frames per second
        IntervalHub.startInterval(this.animateCharacter, 1000 / 10);
        this.getRealFrame;
    }

    animate = () => {
        if (Keyboard.ArrowRight && this.x < this.world.level.levelEnd_x) {
            this.moveRight();
            this.otherDirection = false;
        }
        if (Keyboard.ArrowLeft && this.x > 0) {
            this.moveLeft();
            this.otherDirection = true;
        }
        if (Keyboard.SPACE && !this.isAboveGround()) {
            this.jump();
        }
        this.world.camera_x = -this.x + 100;
    };

    animateCharacter = () => {
        //let i = 0 % 6; 0, rest 0
        //let i = 1 % 6; 0, rest 1
        // ...
        // let i = 5 % 6; 0, rest 5
        // let i = 6 % 6; 0, rest 0  > here our array will reset and it will start iterating with 0th image again.
        //OUTPUT: i  = 0,1,2,3,4,5,0,1,2,3......
        if (this.isDead()) {
            this.playAnimation(this.pepeDeadImages);
            this.gameOverYouLoose = true;
            document.getElementById("EndScreen").style.display = "flex";
            document.getElementById("EndScreen").innerHTML = youLost();
            document.getElementById("canvas").style.display = "none";
            document.getElementById("startScreen").style.display = "none";
        } else if (this.isHurt()) {
            this.playAnimation(this.pepeHitImages);
        } else if (this.isAboveGround()) {
            this.playAnimation(this.pepeJumpImages); //when in air show jump images
        } else {
            if (Keyboard.ArrowRight || Keyboard.ArrowLeft) {
                this.playAnimation(this.pepeWalkImages); //when on graound show walk img
            }
        }
    };

    jump() {
        if (this.speedY < 0) {
            this.isFalling = true;
        }
        this.speedY = 30;
    }
}
