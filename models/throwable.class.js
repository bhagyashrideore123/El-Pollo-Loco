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
        IntervalHub.startInterval(this.playBottolSplash, 1000 / 30);
        this.getRealFrame();
    }

    throw = () => {
        this.applyGravity();
        this.x += 10;
        this.playAnimation(this.BottoleRotation);
    };

    playBottolSplash = () =>{
        if(Globals.isBottolSplash)
        {
            this.playAnimation(this.BottolSplash);
            AudioHub.playOne(AudioHub.BOTTOL_SPLASH);
        }      
    }
}
