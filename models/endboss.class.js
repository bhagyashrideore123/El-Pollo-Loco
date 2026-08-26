class Endboss extends Movable{
    endboss_Images = ImageHub.BOSS;
    height = 350;
    width = 250;
    y = 100;

    constructor() {
        super().loadImage(this.endboss_Images.walk[0]);
        this.loadImages(this.endboss_Images.walk);
        this.x = 2500;
        this.getRealFrame();
        this.animate();
        
    }
    animate(){
        setInterval(() => {
        this.playAnimation(this.endboss_Images.walk);
        }, 200);
    }

}
