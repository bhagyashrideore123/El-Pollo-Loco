import { AudioHub } from "./audio.class.js";
import { Globals } from "./globals.class.js";
import { ImageHub } from "./ImageHub.class.js";
import { IntervalHub } from "./intervalHub.class.js";
import { Movable } from "./movable.class.js";


export class Throwable extends Movable {
    height = 60;
    width = 50;
    bottolFalling = true;
    Sounds = AudioHub.ITEMSTOCOLLECT;
    isSplashing = false;
    BottleImage = ImageHub.SALSABOTTOL.bottle;
    BottoleRotation = ImageHub.SALSABOTTOL.rotation;
    BottolSplash =  ImageHub.SALSABOTTOL.bottle_splash;
    offset = {
        top: 10,
        right: 10,
        bottom: 10,
        left: 10
    };

    constructor(_x, _y) {
        super().loadImage(this.BottleImage);
        this.loadImages(this.BottoleRotation);
        this.loadImages(this.BottolSplash);
        this.x = _x;
        this.y = _y;
        this.speedY = 20;
        IntervalHub.startInterval(this.throw, 1000 / 30);
       // this.getRealFrame();
    }

    throw = () => {
        if (this.isSplashing) return; // Stop moving if it is splashing
        this.applyGravity();
        this.x += 10;
        this.playAnimation(this.BottoleRotation);
    };

    splash = () => {
        if(this.isSplashing)return;
        this.isSplashing = true;
        AudioHub.playOne(AudioHub.BOTTOL_SPLASH);
       // Play splash frames sequentially or loop through it
        setInterval(() => {
            this.playAnimation(this.BottolSplash);
        }, 1000 / 30);        
    }
}
