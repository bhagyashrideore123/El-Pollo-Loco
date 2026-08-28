class Coins_Statusbar extends Drawable {
    x = 110;
    y = 40; 

    Statusbar_Coins = ImageHub.STATUSBAR.coins;  
    constructor() {
        super();  
        this.loadImages(this.Statusbar_Coins);
        this.setPercentage(0);     
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
