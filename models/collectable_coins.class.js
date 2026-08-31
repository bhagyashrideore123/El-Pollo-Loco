class Collectable_coins extends Movable {
    offset = {
        top: 20, //we set smallest border for each moving object here with the help of offset
        right: 10,
        bottom: 40,
        left: 20,
    };
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
    setPercentage(_percentage) {
        this.percentage = _percentage; //=> 0.....5
        let path =  this.Statusbar_Coins[this.resolveImageIndex()];
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