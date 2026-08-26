class Background extends Movable{
    x;
    y=0;
    width = 720;
    height = 480;
    static xPOs = -719;
    static turn =0;

    constructor(_imagePath){
        if(Background.turn === 4)
        {
            Background.xPOs += 719;
            Background.turn = 0;
        }
        super().loadImage(_imagePath);   

        this.x = Background.xPOs;
        Background.turn++;
    }
}