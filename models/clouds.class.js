class Clouds extends Movable {
    y = 20; //clouds will be always at this 20 position of y axis.
    width = 500;
    height = 250;

    constructor() {
        super().loadImage('img/5_background/layers/4_clouds/1.png');
        this.x = Math.random() * 500; //clouds start at 0px
        this.animate();
    }
    animate() {
        this.moveLeft();
    }
}
