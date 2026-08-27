 class Bottle_Statusbar extends Drawable {
    x = 110;
    y = 80; 

    Statusbar_Bottles = ImageHub.STATUSBAR.bottles;

    constructor() {
        super();  
        this.loadImages(this.Statusbar_Bottles);
        console.log(this.Statusbar_Bottles);
        this.setPercentage(100,this.Statusbar_Bottles);     
    }
}
