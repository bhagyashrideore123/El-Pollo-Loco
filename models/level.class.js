class Level {
    enemies;
    clouds;
    backgrounds;
    levelEnd_x = 2500;
    
    constructor(_enemies,_clouds,_backgrounds)
    {
        this.enemies = _enemies;
        this.clouds =  _clouds;
        this.backgrounds =  _backgrounds;

    }
}