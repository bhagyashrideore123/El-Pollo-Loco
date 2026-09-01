class Coins_Statusbar extends Drawable {
    x = 20;
    y = 40; 

    Statusbar_Coins = ImageHub.STATUSBAR.coins;  

    constructor() {
        super().loadImages(this.Statusbar_Coins);
        this.setPercentage(0,this.Statusbar_Coins);     
    } 
    
  
}
