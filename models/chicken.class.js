class Chicken extends Movable {
    y = 360;
    height = 80;
    width = 80;
    type = "chicken";
    isDead = false;
    chickenImages = ImageHub.CHICKEN;
    speed = 0.1; // we make speed here different so taht it will look dynamic
    offset = {
        top: 20, //we set smallest border for each moving object here with the help of offset
        right: 10,
        bottom: 20,
        left: 20,
    };
    constructor() {
        super().loadImage(this.chickenImages.ideal);
        this.loadImages(this.chickenImages.walk);
        this.x = 500 + Math.random() * 3000; //chickens start at 200px and then next cheickens will come after that.
        this.speed = this.speed + Math.random() * 0.15;
        IntervalHub.startInterval(this.animate, 1000 / 60); 
        IntervalHub.startInterval(this.animateChicken, 1000 / 5); 
        this.getRealFrame;
    }

    animate = () => {
        if (this.isDead) {
            this.y += 1; // Make the dead chicken fall down slowly
        } else {
            this.moveLeft();
        }
    };
    animateChicken = () => {        
        if (this.isDead) {
            this.loadImage(ImageHub.CHICKEN.dead); // Show dead image
        } else {
            this.playAnimation(this.chickenImages.walk);
        }
    };

}
