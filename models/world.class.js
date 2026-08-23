class World {
    character = new Character();
    // enemies = level1.enemies;
    // clouds = level1.clouds ;
    // backgrounds = level1.backgrounds;
    level = level1;
    contex;
    canvas;
    keyboard;
    camera_x = 0;

    setWorld() {
        this.character.world = this; //we added this so that chracter should have instance of keyboard events always. hence we have added same world instance to character.
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
        this.contex.clearRect(0, 0, this.canvas.width, this.canvas.height); //clear canvas before drawing anything to reduce duplicate characters drawing
        this.contex.translate(this.camera_x,0); //we are shifting x cordinator here to -100.verytime this excutes this line will add extra 100 px to x axis.
        
        this.objectsToMap(this.level.backgrounds );
        this.objectsToMap(this.level.clouds);
        this.addToMap(this.character);        
        this.objectsToMap(this.level.enemies);
    
        this.contex.translate(-this.camera_x,0);        
        let self = this; //draw() wird immer aufgerufen.
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
        if (mo.otherDirection) {
            this.flipImage(mo);
        }
        this.contex.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);  //here we give movable object to canvas.
        if (mo.otherDirection) {
            mo.x = mo.x * -1;
            this.contex.restore();
        }
    }

    flipImage(mo) {
        this.contex.save();
        this.contex.translate(mo.width, 0);
        this.contex.scale(-1, 1);
        mo.x = mo.x * -1;
    }   
}
