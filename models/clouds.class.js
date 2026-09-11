import { Movable } from "./movable.class.js";

export class Clouds extends Movable {
    y = 20; //clouds will be always at this 20 position of y axis.
    width = 500;
    height = 250;

    constructor(_x) {
        super().loadImage('img/5_background/layers/4_clouds/1.png');
        this.x = _x; //clouds start at 0px
        this.animate();
    }
    animate() {
        this.moveLeft();
    }
}
