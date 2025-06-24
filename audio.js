//// GAMES HUB ////

var memoryLoadingSound = new Audio('assets/memory_loading.mp3');
var memorySoundtrack = new Audio('assets/memory.mp3');
var memoryWinSound = new Audio('assets/win.mp3');
var quizSoundtrack = new Audio('assets/soundtrack.mp3');

var playSoundtrackSetting = true;
var playSoundEffectsSetting = true;

var volumeSoundtrack = 1.0;
var volumeEffects = 1.0;

function toggleSoundtrack()
{
    const setting = document.getElementById("soundtrackToggle");
    playMainClick();
    if(setting.checked)
    {
        playSoundtrackSetting = true;
        document.getElementById("volumeSoundtrack").style.display = "grid";
        console.log("Soundtrack enabled");
    }
    else
    {
        playSoundtrackSetting = false;
        document.getElementById("volumeSoundtrack").style.display = "none";
        console.log("Soundtrack disabled");
    }
}

function toggleEffects()
{
    const setting = document.getElementById("effectsToggle");
    playMainClick();
    if(setting.checked)
    {
        playSoundEffectsSetting = true;
        document.getElementById("volumeEffects").style.display = "grid";
        console.log("Effects enabled");
    }
    else
    {
        playSoundEffectsSetting = false;
        document.getElementById("volumeEffects").style.display = "none";
        console.log("Effects disabled");
    }
}

function setSoundtrackVolume()
{
    volumeSoundtrack = document.getElementById("sliderVolume").value / 100;
}

function setEffectsVolume()
{
    volumeEffects = document.getElementById("sliderEffects").value / 100;
}

function playMainClick()
{
    if(!playSoundEffectsSetting)
    {
        return;
    }
    var audio = new Audio('assets/click_main.mp3');
    audio.volume = volumeEffects;
    audio.play();
}

function playSecondaryClick()
{
    if(!playSoundEffectsSetting)
    {
        return;
    }
    var audio = new Audio('assets/click_secondary.mp3');
    audio.volume = volumeEffects;
    audio.play();
}

function playMemoryLoadingSound()
{
    if(!playSoundtrackSetting)
    {
        return;
    }
    memoryLoadingSound.currentTime = 0;
    memoryLoadingSound.volume = volumeSoundtrack;
    memoryLoadingSound.play();
}

function playMemorySoundtrack()
{
    if(!playSoundtrackSetting)
    {
        return;
    }
    memorySoundtrack.currentTime = 0;
    memorySoundtrack.volume = volumeSoundtrack;
    memorySoundtrack.play();
}

function playMatchSound()
{
    if(!playSoundEffectsSetting)
    {
        return;
    }
    var audio = new Audio('assets/match.mp3');
    audio.volume = volumeEffects;
    audio.play();
}

function playMemoryWinSound()
{
    if(!playSoundEffectsSetting)
    {
        return;
    }
    memoryWinSound.currentTime = 0;
    memoryWinSound.volume = volumeSoundtrack;
    memoryWinSound.play();
}

function playQuizSoundtrack()
{
    if(!playSoundtrackSetting)
    {
        return;
    }
    quizSoundtrack.currentTime = 0;
    quizSoundtrack.volume = volumeSoundtrack;
    quizSoundtrack.play();
}

function playErrorSound()
{
    if(!playSoundEffectsSetting)
    {
        return;
    }
    var audio = new Audio('assets/error.mp3');
    audio.volume = volumeEffects;
    audio.play();
}

function playClick()
{
    if(!playSoundEffectsSetting)
    {
        return;
    }
    var audio = new Audio('assets/click.mp3');
    audio.volume = volumeEffects;
    audio.play();
}

function playWinSound()
{
    if(!playSoundEffectsSetting)
    {
        return;
    }
    var audio = new Audio('assets/exact.mp3');
    audio.volume = volumeEffects;
    audio.play();
}

function playWrongSound()
{
    if(!playSoundEffectsSetting)
    {
        return;
    }
    var audio = new Audio('assets/wrong.mp3');
    audio.volume = volumeEffects;
    audio.play();
}

function playShuffleSound()
{
    if(!playSoundEffectsSetting)
    {
        return;
    }
    var audio = new Audio('assets/shuffle.mp3');
    audio.volume = volumeEffects;
    audio.play();
}

function playGongSound()
{
    if(!playSoundEffectsSetting)
    {
        return;
    }
    var audio = new Audio('assets/gong.mp3');
    audio.volume = volumeEffects;
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