export class Level {
    enemies;
    clouds;
    backgrounds;
    levelEnd_x = 3000;
    coins_total; 
    bottols_total; 

    
    constructor(_enemies,_clouds,_backgrounds,_coins,_bottols)
    {
        this.enemies = _enemies;
        this.clouds =  _clouds;
        this.backgrounds =  _backgrounds;
        this.coins_total = _coins;
        this.bottols_total = _bottols;

    }
}