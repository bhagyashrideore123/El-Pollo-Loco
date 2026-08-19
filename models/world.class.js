class World {
    character = new Character();
    enemies = [new Chicken(), new Chicken(), new Chicken()];
    clouds = [new Clouds()];
    backgrounds = [
        new Background("img/5_background/layers/air.png", 0),
        new Background("img/5_background/layers/3_third_layer/1.png", 0),
        new Background("img/5_background/layers/2_second_layer/1.png", 0),
        new Background("img/5_background/layers/1_first_layer/1.png", 0),
    ];
    contex;
    canvas;
    keyboard;

    setWorld()
    {//we added this so that chracter should have instance of keyboard events always. hence we have added same world instance to character.
        this.character.world = this;
    }

    constructor(_Canvas, _keyboard) {
        this.canvas = _Canvas;
        this.contex = this.canvas.getContext("2d");
        this.keyboard = _keyboard;
        this.draw();
        this.setWorld();
    }

    //we have to execute this method only if our img is loaded.hence we call draw again inside it. (requestAnimationFrame)
    draw() {
        //clear canvas before drawing anything to reduce duplicate characters drawing
        this.contex.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.objectsToMap(this.backgrounds);
        this.objectsToMap(this.clouds);
        this.addToMap(this.character);
        this.objectsToMap(this.enemies);

        //draw() wird immer aufgerufen.
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    objectsToMap(objects) {
        objects.forEach((obj) => {
            this.addToMap(obj);
        });
    }

    addToMap(mo) {
        //here we give movable object to canvas.
        this.contex.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    }

}
