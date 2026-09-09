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
    isDead = false;
    type = "endboss";
    energy = 100;
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
        this.loadImages(this.endboss_Images.hurt);
        this.loadImages(this.endboss_Images.dead);
        this.x = 3000;
        this.runEndboss();
       // this.getRealFrame;
    }

    runEndboss() {
        IntervalHub.startInterval(this.animate, 1000 / 60);
        IntervalHub.startInterval(this.animateEndBoss, 1000 / 8);
    }

    animate = () => {
        this.moveLeft();
    };

    animateEndBoss = () => {
        if (this.isDead) {
            this.playAnimation(this.endboss_Images.dead);
            // setTimeout(() => {
            //     //show you win screen
            // }, 1000);
        } else if (this.isHurt()) {
            this.playAnimation(this.endboss_Images.hurt);
        } else {
            this.playAnimation(this.endboss_Images.walk);
            if (Globals.endBossAlert) {
                this.playAnimation(this.endboss_Images.angry);
            }
        }
    };
}
