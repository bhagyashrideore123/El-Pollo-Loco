class Movable {
    x = 120;
    y = 200;
    img;
    height = 100;
    width = 100;
    imageCache = {};
    speed = 0.1;
    otherDirection = false;
    currentImage = 0;
    speedY = 0;
    acceleration = 2.5;

    loadImage(path) {
        this.img = new Image(); //this.img is JS defined class which works as <img src=""> tag
        this.img.src = path;
    }

    loadImages(array) {
        array.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    moveRight() {
        this.x += this.speed;
    }

    moveLeft() {
        this.x -= this.speed;
    }

    playAnimation(array) {
        let i = this.currentImage % array.length;
        let path = array[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    isAboveGround() {
        return this.y < 180;
    }

    drawFrame(contex)
    {
        if(this instanceof Character || this instanceof Chicken)//draw rectangale frame only for character and chicken instances
        {
        contex.beginPath();
        contex.lineWidth = "5";
        contex.strokeStyle = "blue";
        contex.rect(this.x, this.y, this.width, this.height); //here calculate width and height of rectangle
        contex.stroke();
        }      
    }

    //charcater.isColliding(chicken);
    isColliding(mo)
    {
        return this.x + this.width > mo.x &&
        this.y + this.height > mo.y &&
        this.x < mo.x &&
        this.y < mo.y + mo.height;
    }
}
