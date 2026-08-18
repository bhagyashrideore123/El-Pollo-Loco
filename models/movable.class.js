class Movable{
    x = 120;
    y = 250;
    img;
    height = 100;
    width = 100;

    loadImage(path){
        this.img = new Image(); //this.img is JS defined class which works as <img src=""> tag
        this.img.src = path;
    }

    moveRight(){
        console.log("moving right");        
    }

    moveLeft(){
        console.log("moving left");  
    }
}