class Chicken extends Movable{
    y = 360
    height = 80
    width = 80
    constructor(){
        super().loadImage('img/3_enemies_chicken/chicken_small/1_walk/1_w.png');
        this.x = 200 + Math.random() * 500; //checikens start at 200px and then next cheickens will come after that.
    }

}