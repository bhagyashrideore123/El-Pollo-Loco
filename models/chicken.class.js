class Chicken extends Movable {
    y = 360;
    height = 80;
    width = 80;

    chickenImages = ImageHub.CHICKEN;
    speed = 0.15// we make speed here different so taht it will look dynamic
    // currentImage = 0;

    constructor() {
        super().loadImage(this.chickenImages.ideal);
        this.loadImages(this.chickenImages.walk);
        this.x = 200 + Math.random() * 500; //chickens start at 200px and then next cheickens will come after that.
        this.speed = this.speed + Math.random()* 0.25;
        this.animate();
        
    }
    animate() {
        this.moveLeft();
        setInterval(() => {
            this.playAnimation(this.chickenImages.walk);
        }, 100);

    }
}
