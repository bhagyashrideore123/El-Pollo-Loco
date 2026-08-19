class Background extends Movable{
    width = 720;
    height = 480;

    constructor(_imagePath , _x){
        super().loadImage(_imagePath);        
        this.x = _x;
        this.y = 480 - this.height //how we gave 80 for Y axis: 480(height of canvas) - 400(height of img)
    }
}