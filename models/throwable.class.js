class Throwable extends Movable {
    height = 60;
    width = 50;
    BottleImage = ImageHub.SALSABOTTOL.bottle;
    BottoleRotation = ImageHub.SALSABOTTOL.rotation;
    offset = {
        top: 10,
        right: 10,
        bottom: 10,
        left: 10
    };

    constructor(_x, _y) {
        super().loadImage(this.BottleImage);
        this.loadImages(this.BottoleRotation);
        this.x = _x;
        this.y = _y;
        this.speedY = 20;
        IntervalHub.startInterval(this.throw, 1000 / 25);
        this.getRealFrame();
    }

    throw = () => {
        this.applyGravity();
        this.x += 10;
        this.playAnimation(this.BottoleRotation);
    };
}
