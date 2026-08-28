class Level {
    enemies;
    clouds;
    backgrounds;
    levelEnd_x = 2500;
    coins_collectable; 
    bottols_collectable; 

    
    constructor(_enemies,_clouds,_backgrounds,_coins,_bottols)
    {
        this.enemies = _enemies;
        this.clouds =  _clouds;
        this.backgrounds =  _backgrounds;
        this.coins_collectable = _coins;
        this.bottols_collectable = _bottols;

    }
}