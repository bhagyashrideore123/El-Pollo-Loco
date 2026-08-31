class Collectable_bottols extends Movable {
    offset = { 
        top: 20, //we set smallest border for each moving object here with the help of offset
        right: 30,
        bottom: 30,
        left: 30
    };
    constructor(_x,_y)
    {
        super().loadImage(ImageHub.BOTTOL);
        this.x = _x;
        this.y = _y;
        this.height = 100;
        this.width = 80;   
        this.getRealFrame();
    }

    setPercentage(_percentage) {
        this.percentage = _percentage; //=> 0.....5
        let path =  this.Statusbar_Bottles[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 20) {
            return 1;
        } else {
            return 0;
        }
    }
}