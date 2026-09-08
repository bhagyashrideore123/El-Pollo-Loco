import { AudioHub } from "./audio.class.js";
import { ImageHub } from "./ImageHub.class.js";
import { IntervalHub } from "./intervalHub.class.js";
import { Movable } from "./movable.class.js";

export class MiniChicken extends Movable {
    y = 370;
    height = 60;
    width = 60;
    type = "chicken";
    chickenImages = ImageHub.MINICHICKEN;
    Sounds =  AudioHub.ENEMIES;
    energy = 100;
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
        this.x = 700 + Math.random() * 4000; //chickens start at 200px and then next cheickens will come after that.
        this.speed = this.speed + Math.random() * 0.25;
        this.getRealFrame();
        IntervalHub.startInterval(this.animate, 1000 / 60);
        IntervalHub.startInterval(this.animateMiniChicken, 1000 / 10);
        IntervalHub.startInterval(this.playMiniChickenSound, 1000 / 10);
    }

    animate = () => {
        if (this.isDead()) {
            this.y += 1; // Make the dead chicken fall down slowly
        } else {
            this.moveLeft();
        }
    };

    animateMiniChicken = () => {
        if (this.isDead()) {
            this.loadImage(ImageHub.MINICHICKEN.dead); // Show dead image
        } else {
            this.playAnimation(this.chickenImages.walk);
        }
    };

   playMiniChickenSound =()=>{
      if (this.isDead()) {
            AudioHub.playOne(this.Sounds.deadMiniChicken);
        }else{
            AudioHub.stopOne(this.Sounds.deadMiniChicken);
        }
   }
}
