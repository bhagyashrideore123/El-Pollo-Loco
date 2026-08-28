class Collectable_bottols extends Movable {
    constructor(_x,_y)
    {
        super();
        this.x = _x;
        this.y = _y;
        this.height = 100;
        this.width = 80;
        this.loadImage(ImageHub.BOTTOL);    
        this.getRealFrame();
    }
}