class Throwable extends Movable{
    height = 60;
    width = 50;
    BottleImage = ImageHub.SALSABOTTOL.bottle;
    BottoleRotation = ImageHub.SALSABOTTOL.rotation;
    offset = {
            top: 50, 
            right: 10,
            bottom: 60,
            left: 20,
        };
        
    constructor(_x,_y)
    {
        super().loadImage(this.BottleImage);
        this.loadImages(this.BottoleRotation);
        this.x = _x;
        this.y = _y;
        this.speedY = 20;       
        IntervalHub.startInterval(this.throw,1000/25); 
        this.getRealFrame();
    }
    
    throw =()=> {   
            this.applyGravity();    
            this.x += 10;
            this.playAnimation(this.BottoleRotation);
    }
}