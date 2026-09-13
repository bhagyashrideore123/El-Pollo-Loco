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
    isAlive = true;
    type = "endboss";
    energy = 100;
    offset = {
        top: 80, //we set smallest border for each moving object here with the help of offset
        right: 20,
        bottom: 30,
        left: 20,
    };
    hasWon = false;

    speed = 3;                 // give the boss its own walk speed (was inheriting Movable's 0.1)
    alertDistance = 500;       // how close the character must be before the boss notices
    attackDistance = 150;      // how close before the boss attacks instead of just walking
    state = "idle";            // "idle" | "walking" | "attacking" | "hurt" | "dead"
    character;           

    constructor() {
        super().loadImage(this.endboss_Images.walk[0]);
        this.loadImages(this.endboss_Images.walk);
        this.loadImages(this.endboss_Images.angry);
        this.loadImages(this.endboss_Images.hurt);
        this.loadImages(this.endboss_Images.dead);
        this.x = 3000;
         this.character = null; // explicit, so the guard below is reliable
        this.runEndboss();
        this.getRealFrame;
    }

    runEndboss() {
       // IntervalHub.startInterval(this.animate, 1000 / 60);
        IntervalHub.startInterval(this.updateState, 1000 / 60);
        IntervalHub.startInterval(this.animateEndBoss, 1000 / 8);
    }

    // animate = () => {
    //     this.moveLeft();
        
    // };
    updateState = () => {
        if (this.energy === 0) {
            this.state = "dead";
            return;
        }
        if (this.isHurt()) {
            this.state = "hurt";
            return;
        }
        if (!this.character) 
        { this.state = "idle"; return;}// world hasn't wired us up yet

        let distance = Math.abs(this.x - this.character.x);

        if (distance <= this.attackDistance) {
            this.state = "attacking"; // close enough — stop walking, attack
        } else if (distance <= this.alertDistance) {
            this.state = "walking";  // character is near — approach
            this.moveLeft();
        } else {
            this.state = "idle";     // character too far — stay put
        }
    };

    hit()
    {
        this.energy -= 20;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    animateEndBoss = () => {
        // if (this.energy === 0) {
        //     this.playAnimation(this.endboss_Images.dead);

        //     if (!this.hasWon) {
        //         this.hasWon = true;
        //         this.youWonScreen(); 
        // }
        // } else if (this.isHurt()) {
        //     this.playAnimation(this.endboss_Images.hurt);
        // } else {
        //     this.playAnimation(this.endboss_Images.walk);
        //     if (Globals.endBossAlert) {
        //         this.playAnimation(this.endboss_Images.angry);
        //     }
        // }
        switch (this.state) {
            case "dead":
                this.playAnimation(this.endboss_Images.dead);
                if (!this.hasWon) {
                    this.hasWon = true;
                    this.youWonScreen();
                }
                break;
            case "hurt":
                this.playAnimation(this.endboss_Images.hurt);
                break;
            case "attacking":
                this.playAnimation(this.endboss_Images.attacking);
                break;
            case "walking":
                this.playAnimation(this.endboss_Images.angry); // "alert/approaching" look
                break;
            default: // idle
                this.playAnimation(this.endboss_Images.walk);
        }
    };
}
