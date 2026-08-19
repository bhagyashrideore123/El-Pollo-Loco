class Chicken extends Movable {
    y = 360;
    height = 80;
    width = 80;
    currentImage = 0;
    speed = 0.15// we make speed here different so taht it will look dynamic

    constructor() {
        super().loadImage(ImageHub.chickens[1].ideal);
        this.loadImages(ImageHub.chickens[0].walk);
        this.x = 200 + Math.random() * 500; //chickens start at 200px and then next cheickens will come after that.
        this.speed = this.speed + Math.random()* 0.25;
        this.animate();
        
    }
    animate() {
        this.moveLeft();
        setInterval(() => {
            let i = this.currentImage % ImageHub.chickens[0].walk.length;
            let path = ImageHub.chickens[0].walk[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 100);


    }
}
