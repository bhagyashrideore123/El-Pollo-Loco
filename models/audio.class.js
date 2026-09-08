import { Globals } from "./globals.class.js";

// Fixed Audiohub
class Sounds{
    file;
    isLoaded;
    isPlaying = false;

    constructor(_file){
        this.file = new Audio(_file);
    }
}


export class AudioHub {
    static CHARACTER = {
        walk: new Sounds("./audio/character/characterRun.mp3"),
        jump: new Sounds("audio/character/characterJump.wav"),
        damage: new Sounds("audio/character/characterDamage.mp3"),
        dead: new Sounds("audio/character/characterDead.wav"),
        snoring: new Sounds("audio/character/characterSnoring.mp3"),
    };

    static ENEMIES = {
        deadChicken: new Sounds("audio/enemy/chickenDead2.mp3"),
        deadMiniChicken: new Sounds("audio/enemy/chickenDead.mp3"),
        deadEndBoss: new Sounds("audio/enemy/endbossApproach.wav"),
    };

    static ITEMSTOCOLLECT = {
        bottle: new Sounds(
            "audio/otherSounds/bottleCollectSound.wav",
        ),
        coin: new Sounds("audio/otherSounds/collectSound.wav"),
        splash: new Sounds("audio/otherSounds/bottleBreak.mp3"),
    };

    static GAME = {
        gameSounds: new Sounds("audio/game/gameStart.mp3"),
    };

    static allSounds = [
        AudioHub.CHARACTER,
        AudioHub.ENEMIES,
        AudioHub.ITEMSTOCOLLECT,
        AudioHub.GAME,
    ];



    // Spielt eine einzelne Audiodatei ab
    static playOne(Sounds) {
        if(Sounds)
        {
            Sounds.file.volume = Globals.mute ? 0 : 0.01;        

            if (this.isPlaying === true) {
                return;
            } else if (Sounds.file.readyState === 4 || Sounds.isLoaded) {
                Sounds.file.currentTime = 0;
                Sounds.isLoaded = true;
                Sounds.file.play();
                Sounds.isPlaying = true;
            }
        }else{
            console.log("sound not loaded ")
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
        try{
            Sounds.file.pause();
            Sounds.isPlaying = false;
        }catch(e){
            console.log(e)
        }            
    }

    static muteAll() {
        AudioHub.allSounds.forEach((array) => {
            Object.values(array).forEach((sound) => {
                sound.muted = true;
                sound.file.volume = 0;
            });
        });
    }

    static unmuteAll() {
        AudioHub.allSounds.forEach((array) => {
            Object.values(array).forEach((sound) => {
                sound.muted = false;
                sound.file.volume = 0.1;
            });
        });
    }
}
