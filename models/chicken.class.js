class Chicken extends Movable {
    y = 360;
    height = 80;
    width = 80;
    chickenImages = ImageHub.CHICKEN;
    speed = 0.1; // we make speed here different so taht it will look dynamic
    offset = {
        top: 50, //we set smallest border for each moving object here with the help of offset
        right: 10,
        bottom: 60,
        left: 20,
    };
    constructor() {
        super().loadImage(this.chickenImages.ideal);
        this.loadImages(this.chickenImages.walk);
        this.x = 400 + Math.random() * 1200; //chickens start at 200px and then next cheickens will come after that.
        this.speed = this.speed + Math.random() * 0.15;
        IntervalHub.startInterval(this.animate, 1000 / 60); 
        IntervalHub.startInterval(this.animateChicken, 1000 / 5); 
        this.getRealFrame();
    }

    animate = () => {
        this.moveLeft();
    };
    animateChicken = () => {        
        this.playAnimation(this.chickenImages.walk);
    };
}
