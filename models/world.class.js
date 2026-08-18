class World{
    character = new Character();
    enemies = [
        new Chicken(), 
        new Chicken(), 
        new Chicken()
        ];
    clouds = [
        new Clouds()
    ]
    contex;
    canvas;


    constructor(_Canvas)
    {
        this.canvas = _Canvas;
        this.contex = this.canvas.getContext("2d");
        this.draw();
    }

    //we have to execute this method only if our img is loaded.hence we call draw again inside it. (requestAnimationFrame)
    draw()
    {
        this.contex.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.contex.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height);
        
        this.enemies.forEach(enemie => {
        this.contex.drawImage(enemie.img, enemie.x, enemie.y, enemie.width, enemie.height);
        });

        this.clouds.forEach(clouds => {
        this.contex.drawImage(clouds.img, clouds.x, clouds.y, clouds.width, clouds.height);
        });


        //here we have to use to load img before it draw on canvas.
        //draw() wird immer aufgerufen.
        let self = this;
        requestAnimationFrame(function(){
            self.draw();
        });
    }
}