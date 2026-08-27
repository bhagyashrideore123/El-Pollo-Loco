class Endboss extends Movable {
    endboss_Images = ImageHub.BOSS;
    height = 350;
    width = 250;
    y = 100;
    firstContact = false;

    constructor() {
        super().loadImage(this.endboss_Images.walk[0]);
        this.loadImages(this.endboss_Images.walk);
        this.loadImages(this.endboss_Images.angry);
        this.x = 2500;
        this.getRealFrame();
        this.animate();
    }

    animate() {
       // let i = 0;
        setInterval(() => {
            // if (i < 4) {
                this.playAnimation(this.endboss_Images.walk);
            // } else {
                this.playAnimation(this.endboss_Images.angry);
            // }
            // i++;
            // if (world.character.x > 2500 && !this.firstContact)
            //     this.firstContact = true;
            // i = 0;
        }, 200);
    }
}
