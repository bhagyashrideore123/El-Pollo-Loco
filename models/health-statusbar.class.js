class Health_Statusbar extends Drawable {  
    x = 110;
    y = 0;     
    Statusbar_Health = ImageHub.STATUSBAR.health;

    constructor() {
        super();  
        this.loadImages(this.Statusbar_Health);
        console.log(this.Statusbar_Health);
        this.setPercentage(100,this.Statusbar_Health);     
    }
}
