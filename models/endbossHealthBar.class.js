class EndbossHealth_Statusbar extends Drawable {
    x = 500;
    y = 0;
   
    Statusbar_endboss = ImageHub.STATUSBAR.endboss;  

    constructor() {
        super().loadImages(this.Statusbar_endboss);
        this.setPercentage(100,this.Statusbar_endboss);     
    } 
}