//// GAMES HUB ////

var memoryLoadingSound = new Audio('assets/memory_loading.mp3');
var memorySoundtrack = new Audio('assets/memory.mp3');
var memoryWinSound = new Audio('assets/win.mp3');
var soundtrack = new Audio('assets/soundtrack.mp3');

function playMainClick()
{
    var audio = new Audio('assets/click_main.mp3');
    audio.play();
}

function playSecondaryClick()
{
    var audio = new Audio('assets/click_secondary.mp3');
    audio.play();
}

function playMemoryLoadingSound()
{
    memoryLoadingSound.currentTime = 0;
    memoryLoadingSound.volume = 1.0;
    memoryLoadingSound.play();
}

function playMemorySoundtrack()
{
    memorySoundtrack.currentTime = 0;
    memorySoundtrack.volume = 1.0;
    memorySoundtrack.play();
}

function playMatchSound()
{
    var audio = new Audio('assets/match.mp3');
    audio.play();
}

function playMemoryWinSound()
{
    memoryWinSound.currentTime = 0;
    memoryWinSound.volume = 1.0;
    memoryWinSound.play();
}

function playErrorSound()
{
    var audio = new Audio('assets/error.mp3');
    audio.volume = 0.3;
    audio.play();
}

function playClick()
{
    var audio = new Audio('assets/click.mp3');
    audio.play();
}

function playWinSound()
{
    var audio = new Audio('assets/exact.mp3');
    audio.play();
}

function playWrongSound()
{
    var audio = new Audio('assets/wrong.mp3');
    audio.play();
}

function playShuffleSound()
{
    var audio = new Audio('assets/shuffle.mp3');
    audio.play();
}

function playGongSound()
{
    var audio = new Audio('assets/gong.mp3');
    audio.play();
}

function fadeOutAudio(sound) 
{
    fadeAudio = setInterval(function () 
    {
        if (sound.volume != 0.0) 
        {
            sound.volume -= 0.01;
        }

        if (sound.volume < 0.02) 
        {
            clearInterval(fadeAudio);
            sound.volume = 1.0;
            sound.pause();
            sound.currentTime = 0;
        }
    }, 10);
}