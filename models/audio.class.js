import { Globals } from "./globals.class.js";

// Fixed Audiohub
class Sounds {
    file;
    isLoaded;
    isPlaying = false;

    constructor(_file) {
        this.file = new Audio(_file);
    }
}

export class AudioHub {
    static CHARACTER_WALK = new Sounds("./audio/character/characterRun.mp3");
    static CHARACTER_JUMP = new Sounds("audio/character/characterJump.wav");
    static CHARACTER_HURT = new Sounds("audio/character/characterDamage.mp3");
    static CHARACTER_DEAD = new Sounds("audio/character/characterDead.wav");
    static CHARACTER_SNORRING = new Sounds(
        "audio/character/characterSnoring.mp3",
    );

    static CHICKEN_DEAD = new Sounds("audio/enemy/chickenDead2.mp3");
    static MINICHICKEN_DEAD = new Sounds("audio/enemy/chickenDead.mp3");
    static ENDBOSS_DEAD = new Sounds("audio/enemy/endbossApproach.wav");

    static COIN_COLLECT = new Sounds("audio/otherSounds/collectSound.wav");
    static BOTTOL_COLLECT = new Sounds(
        "audio/otherSounds/bottleCollectSound.wav",
    );
    static BOTTOL_SPLASH = new Sounds("audio/otherSounds/bottleBreak.mp3");

    static GAME = new Sounds("audio/game/gameStart.mp3");
    static GAME_START_MUSIK = new Sounds("audio/game/game_Start_music.mp3");
    static GAME_BACKGROUND_MUSIK = new Sounds("audio/game/game_BAckgorund_musik_option1.mp3");
    
    static allSounds = [
        AudioHub.CHARACTER_WALK,
        AudioHub.CHARACTER_JUMP,
        AudioHub.CHARACTER_HURT,
        AudioHub.CHARACTER_DEAD,
        AudioHub.CHARACTER_SNORRING,
        AudioHub.CHICKEN_DEAD,
        AudioHub.MINICHICKEN_DEAD,
        AudioHub.ENDBOSS_DEAD,
        AudioHub.COIN_COLLECT,
        AudioHub.BOTTOL_COLLECT,
        AudioHub.BOTTOL_SPLASH,
        AudioHub.GAME,
        AudioHub.GAME_BACKGROUND_MUSIK,
        AudioHub.GAME_START_MUSIK
    ];

    // Spielt eine einzelne Audiodatei ab
    static playOne(Sounds) {
        if (Sounds) {
            Sounds.file.volume = Globals.isMuted ? 0 : 0.05;
            if (this.isPlaying === true) {
                return;
            } else if (Sounds.file.readyState > 0 || Sounds.isLoaded) {
                Sounds.file.currentTime = 0;
                Sounds.isLoaded = true;
                Sounds.file.play();
                Sounds.isPlaying = true;
            }
        } else {
            console.log("sound not loaded ");
        }
    }

    // Stoppt das Abspielen aller Audiodateien
    static stopAll() {
        AudioHub.allSounds.forEach((Sounds) => {
            Sounds.file.pause();
            Sounds.isPlaying = false;
        });
    }

    // Stoppt das Abspielen einer einzelnen Audiodatei
    static stopOne(Sounds) {
        try {
            Sounds.file.pause();
            Sounds.isPlaying = false;
        } catch (e) {
            console.log(e);
        }
    }

}
