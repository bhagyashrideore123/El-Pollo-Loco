class Global extends World{
    static Sound;

    static playWalk()
    {
        this.Sound = new Audio('../audio/walk.mp3');
        this.Sound.play();
    }

    static pause()
    {
        this.Sound.pause();
    }
}