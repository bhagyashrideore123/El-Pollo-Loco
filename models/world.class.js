import { level1 } from "../js/levels/level1.js";
import { AudioHub } from "./audio.class.js";
import { Bottle_Statusbar } from "./bottles_statusbar.class.js";
import { Character } from "./character.class.js";
import { Coins_Statusbar } from "./coins_statusbar.class.js";
import { Endboss } from "./endboss.class.js";
import { EndbossHealth_Statusbar } from "./endbossHealthBar.class.js";
import { Globals } from "./globals.class.js";
import { Health_Statusbar } from "./health-statusbar.class.js";
import { ImageHub } from "./ImageHub.class.js";
import { IntervalHub } from "./intervalHub.class.js";
import { Keyboard } from "./keyboard.class.js";
import { Throwable } from "./throwable.class.js";

export class World {
    character = new Character
    level = level1;
    gameOverYouLoose = false;
    gameOverYouWin = false;
    isbottolThrow = false;
    contex;
    canvas;
    keyboard;
    camera_x = 0;
    heathbar = new Health_Statusbar();
    coinsbar = new Coins_Statusbar();
    bottlesbar = new Bottle_Statusbar();
    endbossBar = new EndbossHealth_Statusbar();
    throwable_Object = [];
    totalCoins = this.level.coins_total;
    totalBottols = this.level.bottols_total;
    collect_coins_array = [];
    collect_bottles_array = [];
    Sounds = AudioHub.ITEMSTOCOLLECT

    constructor(_Canvas, _keyboard) {
        this.canvas = _Canvas;
        this.contex = this.canvas.getContext("2d");
        this.keyboard = _keyboard;
        this.draw();
        this.setWorld();
        IntervalHub.startInterval(this.run, 1000 / 60); 
    }

    run = () => {
        this.checkEnemyCollision();
        this.checkCollision();
    };

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
        this.addToMap(this.endbossBar);
        this.contex.translate(this.camera_x, 0); //Forward
        this.objectsToMap(this.totalCoins);
        this.objectsToMap(this.totalBottols);
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

    checkCollision() {
        this.checkCoinCollision();
        this.checkBottolCollision();
        this.checkThrowObject();
    }

    checkThrowObject() {
        if (Keyboard.D) {
            if (this.collect_bottles_array.length > 0) {
                let bottle = new Throwable(
                    this.character.x + 100,
                    this.character.y + 100,
                );
                this.throwable_Object.push(bottle);
                this.collect_bottles_array.pop();
                //update statausbar here..
                let Images = ImageHub.STATUSBAR.bottles;
                let collectedBottol = this.collect_bottles_array.length;
                let totalBottols = this.level.bottols_collectable.length;
                this.updateStatusBars(
                    collectedBottol,
                    totalBottols,
                    Images,
                    this.bottlesbar,
                );
                this.checkThrowableObjectsCollision();
                            
            }else{
                this.collect_bottles_array.length = 0;
                
            }
        }
    }

    checkThrowableObjectsCollision() {
        this.collect_bottles_array.forEach((bottol) => {
            this.level.enemies.forEach((enemy,index) => {
                if(bottol.isColliding(enemy)){
                        Globals.isBottolSplash = true;
                        enemy.isDead = true;
                        enemy.loadImages(ImageHub.CHICKEN.dead)
                        setTimeout(() => {
                            this.level.enemies.splice(index,1);
                        }, 1000);
                }else{
                    Globals.isBottolSplash = false; //this variable used to play bottol splash sound
                }            
            });
        });
    }

    

    checkEnemyCollision() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                if (this.character.speedY < 0 && enemy.type === "chicken" && this.character.isFalling) {
                    enemy.energy = 0;
                } else if (this.character.y === 180 && enemy.type === "chicken" || (enemy.type === "endboss" && !this.character.isAboveGround()) ) {
                    {
                        enemy.energy = 100;
                        this.character.hit();
                        let Images = ImageHub.STATUSBAR.health;
                        this.heathbar.setPercentage(
                            this.character.energy,
                            Images,
                        );
                    }
                }
            }
        });
    }

    checkCoinCollision() {
        this.level.coins_total.forEach((coin, index) => {
            if (this.character.isColliding(coin)) {
                AudioHub.playOne(this.Sounds.coin);
                this.collect_coins_array.push(coin);
                this.totalCoins.splice(index, 1);
                let Images = ImageHub.STATUSBAR.coins;
                let collectedCoins = this.collect_coins_array.length;
                this.updateStatusBars(
                    collectedCoins,
                    this.totalCoins.length,
                    Images,
                    this.coinsbar,
                );
            }
            AudioHub.stopOne(this.Sounds.coin);
        });
    }

    checkBottolCollision() {
        this.level.bottols_total.forEach((bottle, index) => {
            if (this.character.isColliding(bottle)) {
                this.collect_bottles_array.push(bottle);
                this.totalBottols.splice(index, 1);
                let Image = ImageHub.STATUSBAR.bottles;
                let collectedBottols = this.collect_bottles_array.length;
                this.updateStatusBars(
                    collectedBottols,
                    this.totalBottols.length,
                    Image,
                    this.bottlesbar,
                );
            }
        });
    }

    updateStatusBars(collectedAssets, totalAssest, IMAGES, statusBar) {
        let percentage = (collectedAssets / totalAssest) * 100;
        let Images = IMAGES;
        statusBar.setPercentage(percentage, Images);
    }
}
