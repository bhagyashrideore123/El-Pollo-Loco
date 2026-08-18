class Chicken extends Movable{
    


    constructor(){
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.x = 200 + Math.random() * 500; //checikens start at 200px and then next cheickens will come after that.
    }

}