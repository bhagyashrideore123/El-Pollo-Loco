class Bottle_Statusbar extends Drawable {
    x = 20;
    y = 80; 

    Statusbar_Bottles = ImageHub.STATUSBAR.bottles;
    

    constructor() {
        super().loadImages(this.Statusbar_Bottles);
        this.setPercentage(0,this.Statusbar_Bottles);     
    }

}
