class Drawable{
    x = 100;
    y = 100;
    width = 200;
    height = 50;
    img;
    imageCache = {};
    currentImage = 0;
    percentage = 100;
    
    loadImage(path) {
        this.img = new Image(); //this.img is JS defined class which works as <img src=""> tag
        this.img.src = path;
    }

    loadImages(array) {
        array.forEach((path) => {
            let img = new Image();
            img.src = path;
            //img.style = 'transform:scaleX(-1)';
            this.imageCache[path] = img;
        });
    }

    draw(contex)
    {
        try{
        contex.drawImage(this.img, this.x, this.y, this.width, this.height); //here we give movable object to canvas.

        }catch(e)
        {
            console.log("error in image loading:",e);
            console.log("error in image loading:",this.img.src);
            
        }
    }

    drawFrame(contex) {
        if ( this instanceof Throwable ||  this instanceof Endboss || this instanceof Character || this instanceof Chicken) //draw rectangale frame only for character and chicken instances
        {
            contex.beginPath();
            contex.lineWidth = "3";
            contex.strokeStyle = "blue";
            contex.rect(
                this.x + this.offset.left,
                this.y + this.offset.top,
                this.width - this.offset.left - this.offset.right,
                this.height - this.offset.top - this.offset.bottom,
            ); //here showing the rectangle for each moving object with help of offset calculations
            contex.stroke();
        }
    }

    setPercentage(_percentage, _IMAGE) {
        this.percentage = _percentage; //=> 0.....5
        let path =  _IMAGE[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 20) {
            return 1;
        } else {
            return 0;
        }
    }

}
