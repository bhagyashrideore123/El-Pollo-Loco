import { Drawable } from "./drawable.class.js";
import { ImageHub } from "./ImageHub.class.js";

export class Health_Statusbar extends Drawable {  
    x = 20;
    y = 0;     
    Statusbar_Health = ImageHub.STATUSBAR.health;

    constructor() {
        super().loadImages(this.Statusbar_Health);
        this.setPercentage(100,this.Statusbar_Health);     
    }

}
