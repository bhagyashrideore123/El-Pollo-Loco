class Throwable extends Movable{
    height = 60;
    width = 50;
    BottleImage = ImageHub.SALSABOTTOL.bottle;
    BottoleRotation = ImageHub.SALSABOTTOL.rotation;

    constructor(_x,_y)
    {
        super().loadImage(this.BottleImage);
        this.loadImages(this.BottoleRotation);
        this.x = _x;
        this.y = _y;
        this.throw();
    }
    
    throw()
    {
        this.speedY = 30;
        this.applyGravity();
        setInterval(() => {
            this.x += 10;
            this.playAnimation(this.BottoleRotation);
        }, 25);
    }
}