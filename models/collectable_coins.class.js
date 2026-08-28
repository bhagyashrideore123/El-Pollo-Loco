class Collectable_coins extends Movable {

    constructor(_x,_y)
    {
        super();
        this.x = _x;
        this.y = _y;
        this.height = 100;
        this.width = 80;
        this.loadImage(ImageHub.COIN); 
        this.getRealFrame();  
    }
}