class MiniChicken extends Movable {
    y = 360;
    height = 80;
    width = 80;
    type = "chicken";
    chickenImages = ImageHub.MINICHICKEN;
    speed = 0.10; // we make speed here different so taht it will look dynamic
    offset = {
        top: 50, //we set smallest border for each moving object here with the help of offset
        right: 10,
        bottom: 60,
        left: 20,
    };
    constructor() {
        super().loadImage(this.chickenImages.ideal);
        this.loadImages(this.chickenImages.walk);
        this.x = 700 + Math.random() * 1500; //chickens start at 200px and then next cheickens will come after that.
        this.speed = this.speed + Math.random() * 0.25;   
        this.getRealFrame();    
        IntervalHub.startInterval(this.animate,1000/60);
        IntervalHub.startInterval(this.animateMiniChicken,1000/10);
    }

    animate=() =>{
            this.moveLeft();
    }

    animateMiniChicken =()=>{
        this.playAnimation(this.chickenImages.walk);
    }  

}