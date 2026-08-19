class ImageHub extends World {
    static CHICKEN = 
        {
            walk: [
                "img/3_enemies_chicken/chicken_small/1_walk/1_w.png",
                "img/3_enemies_chicken/chicken_small/1_walk/2_w.png",
                "img/3_enemies_chicken/chicken_small/1_walk/3_w.png",
            ],
            ideal: ["img/3_enemies_chicken/chicken_small/1_walk/1_w.png"],
            dead: ["img/3_enemies_chicken/chicken_small/2_dead/dead.png"]
        };

    static CLOUDS = [" img/5_background/layers/4_clouds/1.png"];

    static BACKGROUNDS = 
        {
        layer_1:[
                "img/5_background/layers/air.png",
                "img/5_background/layers/3_third_layer/1.png",
                "img/5_background/layers/2_second_layer/1.png",
                "img/5_background/layers/1_first_layer/1.png",
            ],
        layer_2:[
                "img/5_background/layers/air.png",
                "img/5_background/layers/3_third_layer/2.png",
                "img/5_background/layers/2_second_layer/2.png",
                "img/5_background/layers/1_first_layer/2.png",
            ]
        };    

    static PEPE = 
        {
            walk: [
                "img/2_character_pepe/2_walk/W-21.png",
                "img/2_character_pepe/2_walk/W-22.png",
                "img/2_character_pepe/2_walk/W-23.png",
                "img/2_character_pepe/2_walk/W-24.png",
                "img/2_character_pepe/2_walk/W-25.png",
                "img/2_character_pepe/2_walk/W-26.png"
            ],
    
            jump: [
                "img/2_character_pepe/3_jump/J-31.png",
                "img/2_character_pepe/3_jump/J-32.png",
                "img/2_character_pepe/3_jump/J-33.png",
                "img/2_character_pepe/3_jump/J-34.png",
                "img/2_character_pepe/3_jump/J-35.png",
                "img/2_character_pepe/3_jump/J-36.png",
                "img/2_character_pepe/3_jump/J-37.png",
                "img/2_character_pepe/3_jump/J-38.png",
                "img/2_character_pepe/3_jump/J-39.png"
            ],

            ideal: ["img/2_character_pepe/2_walk/W-21.png"],
        }

    static BOSS = {
        walk: [
            "img/4_enemie_boss_chicken/1_walk/G1.png",
            "img/4_enemie_boss_chicken/1_walk/G2.png",
            "img/4_enemie_boss_chicken/1_walk/G3.png",
            "img/4_enemie_boss_chicken/1_walk/G4.png",
        ],
        angry: [
            "img/4_enemie_boss_chicken/2_alert/G5.png",
            "img/4_enemie_boss_chicken/2_alert/G6.png",
            "img/4_enemie_boss_chicken/2_alert/G7.png",
            "img/4_enemie_boss_chicken/2_alert/G8.png",
            "img/4_enemie_boss_chicken/2_alert/G9.png",
            "img/4_enemie_boss_chicken/2_alert/G10.png",
            "img/4_enemie_boss_chicken/2_alert/G11.png",
            "img/4_enemie_boss_chicken/2_alert/G12.png",
        ],
        attacking: [
            "img/4_enemie_boss_chicken/3_attack/G13.png",
            "img/4_enemie_boss_chicken/3_attack/G14.png",
            "img/4_enemie_boss_chicken/3_attack/G15.png",
            "img/4_enemie_boss_chicken/3_attack/G16.png",
            "img/4_enemie_boss_chicken/3_attack/G17.png",
            "img/4_enemie_boss_chicken/3_attack/G18.png",
            "img/4_enemie_boss_chicken/3_attack/G19.png",
            "img/4_enemie_boss_chicken/3_attack/G20.png",
        ],
    };
}
