class Coins_Statusbar extends Drawable {
    x = 110;
    y = 40; 

    Statusbar_Coins = ImageHub.STATUSBAR.coins;  
    constructor() {
        super();  
        this.loadImages(this.Statusbar_Coins);
        console.log(this.Statusbar_Coins);
        this.setPercentage(100,this.Statusbar_Coins);     
    } 
}
