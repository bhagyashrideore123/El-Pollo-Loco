import { AudioHub } from "./audio.class.js";
import { Globals } from "./globals.class.js";
import { ImageHub } from "./ImageHub.class.js";
import { IntervalHub } from "./intervalHub.class.js";
import { Movable } from "./movable.class.js";

export class Chicken extends Movable {
    y = 360;
    height = 80;
    width = 80;
    type = "chicken";
    energy = 100;
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
        IntervalHub.startInterval(this.playChickenSound, 1000 / 5);
        this.getRealFrame;
    }

    animate = () => {
        if (this.energy === 0) {
            this.y += 1; // Make the dead chicken fall down slowly
        } else {
            this.moveLeft();
        }
    };
    animateChicken = () => {
        if (this.energy === 0) {
            this.loadImage(ImageHub.CHICKEN.dead); // Show dead image
            Globals.isBottolSplash = true;
        } else {
            Globals.isBottolSplash = false;
            this.playAnimation(this.chickenImages.walk);
        }
    };

    playChickenSound=()=> {
        if (this.energy === 0) {
            AudioHub.playOne(AudioHub.CHICKEN_DEAD);
        }else{
            AudioHub.stopOne(AudioHub.CHICKEN_DEAD);
        }
    }
}
