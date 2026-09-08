import { Globals } from "./globals.class.js";
import { ImageHub } from "./ImageHub.class.js";
import { IntervalHub } from "./intervalHub.class.js";
import { Movable } from "./movable.class.js";

export class Endboss extends Movable {
    endboss_Images = ImageHub.BOSS;
    height = 350;
    width = 250;
    y = 100;
    firstContact = false;
    isDead = true;
    type = "endboss";
    offset = {
        top: 80, //we set smallest border for each moving object here with the help of offset
        right: 20,
        bottom: 30,
        left: 20,
    };

    constructor() {
        super().loadImage(this.endboss_Images.walk[0]);
        this.loadImages(this.endboss_Images.walk);
        this.loadImages(this.endboss_Images.angry);
        this.x = 3000;
        this.runEndboss();
        this.getRealFrame;
    }

    runEndboss(){
        if(Globals.endBossAlert)
            {
                console.log("endboss strts")
                IntervalHub.startInterval(this.animate, 1000 / 60);
                IntervalHub.startInterval(this.animateEndBoss, 1000 / 8);
            } 
    }

    animate = () => {
        this.moveLeft();
    };
    animateEndBoss = () => {
        this.playAnimation(this.endboss_Images.walk);
    };
}
