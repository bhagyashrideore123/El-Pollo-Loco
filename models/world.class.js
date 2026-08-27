class World {
    character = new Character();
    level = level1;
    contex;
    canvas;
    keyboard;
    camera_x = 0;
    heathbar = new Health_Statusbar();
    coinsbar = new Coins_Statusbar();
    bottlesbar = new Bottle_Statusbar();
    coins_collectable = new Collectable_coins();
    bottols_collectable = new Collectable_bottols();

    throwable_Object = [];

    constructor(_Canvas, _keyboard) {
        this.canvas = _Canvas;
        this.contex = this.canvas.getContext("2d");
        this.keyboard = _keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }

    //we have to execute this method only if our img is loaded.hence we call draw again inside it. (requestAnimationFrame)
    draw() {
        this.contex.clearRect(0, 0, this.canvas.width, this.canvas.height); //clear canvas before drawing anything to reduce duplicate characters drawing
        this.contex.translate(this.camera_x, 0); //we are shifting x cordinator here to -100.verytime this excutes this line will add extra 100 px to x axis.
        this.objectsToMap(this.level.backgrounds);
        this.objectsToMap(this.level.clouds);
        this.drawEverything();
        this.addToMap(this.character);
        this.objectsToMap(this.level.enemies);
        this.objectsToMap(this.throwable_Object);
        this.contex.translate(-this.camera_x, 0);
        requestAnimationFrame(() => {
            this.draw();
        }); //here we removed self thing because arrow function handle that logic
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
        mo.draw(this.contex);
        mo.drawFrame(this.contex);
        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    drawEverything() {
        this.contex.translate(-this.camera_x, 0); //BAck
        //...space for fix objects....
        //to look status bar fix we have to reset camera_X positions again
        this.addToMap(this.heathbar);
        this.addToMap(this.coinsbar);
        this.addToMap(this.bottlesbar);
        this.contex.translate(this.camera_x, 0); //Forward
        this.addToMap(this.bottols_collectable);
        this.addToMap(this.coins_collectable);

    }
    flipImage(mo) {
        this.contex.save();
        this.contex.translate(mo.width, 0);
        this.contex.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.contex.restore();
    }
    setWorld() {
        this.character.world = this; //we added this so that chracter should have instance of keyboard events always. hence we have added same world instance to character.
    }
    run() {
        setInterval(() => {
            this.checkCollision();
            this.checkThrowObject();
        }, 200);
    }

    checkThrowObject()
    {
        if(Keyboard.D)
        {
            let bottle = new Throwable(this.character.x+100,this.character.y+100);
            this.throwable_Object.push(bottle);
        }
    }
    checkCollision() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.heathbar.setPercentage(this.character.energy);
                if (this.character.energy === 0) {
                    
                }
            } else {
            }
        });
        
    }
}
