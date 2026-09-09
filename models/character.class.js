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
    world;
    speed = 3.5;
    isFalling = false;

    constructor() {
        super().loadImage(ImageHub.PEPE.ideal);
        this.loadImages(this.pepeWalkImages);
        this.loadImages(this.pepeJumpImages);
        this.loadImages(this.pepeDeadImages);
        this.loadImages(this.pepeHitImages);

        IntervalHub.startInterval(this.applyGravity, 1000 / 25);
        IntervalHub.startInterval(this.animate, 1000 / 60); //60 frames per second
        IntervalHub.startInterval(this.animateCharacter, 1000 / 10);
        IntervalHub.startInterval(this.playCharacterSound, 1000 / 60);
        //this.getRealFrame;
    }

    animate = () => {
        if (Keyboard.ArrowRight && this.x < this.world.level.levelEnd_x) {
            this.moveRight();
            this.otherDirection = false;
        }
        if (Keyboard.ArrowLeft && this.x > 0) {
            this.moveLeft();
            this.otherDirection = true;
        }
        if (Keyboard.SPACE && !this.isAboveGround()) {
            this.jump();
        }
        this.world.camera_x = -this.x + 100;
    };

    animateCharacter = () => {
        if (this.isDead()) {
            this.playAnimation(this.pepeDeadImages);
            this.youLoseScreen();
        } else if (this.isHurt()) {
            this.playAnimation(this.pepeHitImages);
        } else if (this.isAboveGround()) {
            this.playAnimation(this.pepeJumpImages); //when in air show jump images
        } else {
            if (Keyboard.ArrowRight || Keyboard.ArrowLeft) {
                if (this.x > 2500) {
                    Globals.endBossAlert = true; //this is to start endboss walking when pepe runs till 2500
                } else {
                    Globals.endBossAlert = false;
                    this.playAnimation(this.pepeWalkImages); //when on graound show walk img
                }
            }
        }
    };

    jump() {
        this.speedY = 30;    }

    playCharacterSound = () => {
        try {
            if (this.isDead()) {
                AudioHub.playOne(AudioHub.CHARACTER_DEAD);
            } else if (Keyboard.ArrowRight || Keyboard.ArrowLeft) {
                AudioHub.playOne(AudioHub.CHARACTER_WALK);
            } else if (this.isHurt()) {
                AudioHub.playOne(AudioHub.CHARACTER_HURT);
            } else if (Keyboard.SPACE) {
                AudioHub.playOne(AudioHub.CHARACTER_JUMP);
            } else {
                AudioHub.stopAll();
            }
        } catch (error) {
            console.log(error);
        }
    };

}
