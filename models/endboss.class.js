class Endboss extends Movable{
    endboss_Images = ImageHub.BOSS;
    height = 450;
    width = 300;
    y = 30;

    constructor() {
        super().loadImage(this.endboss_Images.walk[0]);
        this.loadImages(this.endboss_Images.walk);
        this.x = 2000;
        // this.animate();
        
    }
    animate(){
        // this.moveLeft();
        // setInterval(() => {
        //     let i = this.currentImage % this.endboss_Images.walk.length;
        //     let path = this.endboss_Images.walk[i];
        //     this.img = this.imageCache[path];
        //     this.currentImage++;
        // }, 100);
    }

}
