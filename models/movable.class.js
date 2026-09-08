import { AudioHub } from "./audio.class.js";
import { Drawable } from "./drawable.class.js";

export class Movable extends Drawable {
    speed = 0.1;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    energy = 100;
    lastHit = 0;
    offset = { 
        top: 120, //we set smallest border for each moving object here with the help of offset
        right: 30,
        bottom: 30,
        left: 30
    };
    rX; //real X
    rY; //real Y
    rW; //real width
    rH; //real height
    bottolSplash = false;
    
    constructor()
    {
        super();
    }

    moveRight() {
        this.x += this.speed;
    }

    moveLeft() {
    this.x -= this.speed;
    }

    playAnimation(array) {
        let i = this.currentImage % array.length;
        let path = array[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    applyGravity=() =>{        
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
    }

    isAboveGround(){
        if(this.bottolFalling) //trwable obj should should always fall
        {
            return true;
        }else{
            this.bottolFalling = false;
            return this.y < 180;
        }
        
    }

    //charcater.isColliding(chicken);
    isColliding(mo) {
        this.getRealFrame();
        mo.getRealFrame();
        return this.rX + this.rW > mo.rX &&
            this.rY + this.rH > mo.rY &&
            this.rX < mo.rX + mo.rW &&
            this.rY < mo.rY + mo.rH;
    }

    getRealFrame()
    {
        this.rX = this.x + this.offset.left;
        this.rY = this.y + this.offset.top;
        this.rW = this.width - this.offset.left - this.offset.right;
        this.rH = this.height - this.offset.top - this.offset.bottom;
    }

    hit() {
        this.energy -= 2;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }
    
    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit; //diffrence in miliseconds
        timePassed = timePassed / 1000; //difference in seconds
        return timePassed < 0.8;
    }

    isDead() {
        return this.energy == 0;
    }

}
