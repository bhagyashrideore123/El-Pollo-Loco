import { AudioHub } from "./audio.class.js";
import { Globals } from "./globals.class.js";
import { ImageHub } from "./ImageHub.class.js";
import { IntervalHub } from "./intervalHub.class.js";
import { Keyboard } from "./keyboard.class.js";
import { Movable } from "./movable.class.js";

export class Character extends Movable {
    x = 200;
    y = 180;
    height = 250;
    width = 100;
    isIdeal = true;
    pepeWalkImages = ImageHub.PEPE.walk;
    pepeJumpImages = ImageHub.PEPE.jump;
    pepeDeadImages = ImageHub.PEPE.dead;
    pepeHitImages = ImageHub.PEPE.hurt;
    pepeSnorringImages = ImageHub.PEPE.snoring;
    world;
    speed = 5; //chnaged to 5 from 3.5 to speed up character
    lastActionTime = Date.now(); // this update when pepe start moving very firstly
    idleThreshold = 2000; // ms of no omovemnet of Pepe before snoring starts

    constructor() {
        super().loadImage(ImageHub.PEPE.ideal);
        this.loadImages(this.pepeWalkImages);
        this.loadImages(this.pepeJumpImages);
        this.loadImages(this.pepeDeadImages);
        this.loadImages(this.pepeHitImages);
        this.loadImages(this.pepeSnorringImages); // new

        IntervalHub.startInterval(this.applyGravity, 1000 / 25);
        IntervalHub.startInterval(this.animate, 1000 / 60); //60 frames per second
        IntervalHub.startInterval(this.animateCharacter, 1000 / 10);
        IntervalHub.startInterval(this.playCharacterSound, 1000 / 60);
        this.getRealFrame;
    }

    animate = () => {
        let isMoving = false;
        if (Keyboard.ArrowRight && this.x < this.world.level.levelEnd_x) {
            this.moveRight();
            this.otherDirection = false;
            isMoving = true;
        }
        if (Keyboard.ArrowLeft && this.x > 0) {
            this.moveLeft();
            this.otherDirection = true;
            isMoving = true;
        }
        if (Keyboard.SPACE && !this.isAboveGround()) {
            this.jump();
        }
        if (Keyboard.D) {
            isMoving = true; // when pepe throw bottols that is not ideal time but moving time
        }

        if (isMoving) {
            this.lastActionTime = Date.now(); // reset the idle timer here if pepe moves
        }
        this.world.camera_x = -this.x + 100;
    };

    isSnorring = () => {
        return Date.now() - this.lastActionTime > this.idleThreshold;
    };

    animateCharacter = () => {
        if (this.isDead()) {
            this.playAnimation(this.pepeDeadImages);
            this.youLoseScreen();
        } else if (this.isHurt()) {
            this.playAnimation(this.pepeHitImages);
        } else if (this.isAboveGround()) {
            this.playAnimation(this.pepeJumpImages); //when in air show jump images
        } else if (Keyboard.ArrowRight || Keyboard.ArrowLeft) {
            this.lastActionTime = Date.now(); // pepe still moving, keep resetting
            if (this.x > 3000) {
                Globals.endBossAlert = true; //this is to start endboss walking when pepe runs till 2500
            } else {
                Globals.endBossAlert = false;
                this.playAnimation(this.pepeWalkImages); //when on graound show walk img
            }
        } else if (this.isSnorring()) {
            this.playAnimation(this.pepeSnorringImages); // pepe is idle too long hence snore
        }
    };

    jump() {
        this.speedY = 30;
    }

    playCharacterSound = () => {
        try {
            if (this.isDead()) {
                AudioHub.playOne(AudioHub.CHARACTER_DEAD);
            } else if (this.isSnorring()) {
                AudioHub.playOne(AudioHub.CHARACTER_SNORRING);
            } else if (Keyboard.ArrowRight || Keyboard.ArrowLeft) {
                AudioHub.playOne(AudioHub.CHARACTER_WALK);
            } else if (this.isHurt()) {
                AudioHub.playOne(AudioHub.CHARACTER_HURT);
            } else if (Keyboard.SPACE) {
                AudioHub.playOne(AudioHub.CHARACTER_JUMP);
            } else {
            }
        } catch (error) {}
    };
}
