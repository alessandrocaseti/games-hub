//// GAMES HUB ////

const memoryLoadingSound = new Audio('assets/audio/memory_loading.mp3');
const memorySoundtrack = new Audio('assets/audio/memory_main.mp3');
const memoryWinSound = new Audio('assets/audio/memory_win.mp3');
const quizSoundtrack = new Audio('assets/audio/quiz_main.mp3');

let playSoundtrackSetting = true;
let playSoundEffectsSetting = true;

let volumeSoundtrack = 1.0;
let volumeEffects = 1.0;

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
    saveSettings();
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
    saveSettings();
}

function setSoundtrackVolume()
{
    volumeSoundtrack = document.getElementById("sliderVolume").value / 100;
    saveSettings();
}

function setEffectsVolume()
{
    volumeEffects = document.getElementById("sliderEffects").value / 100;
    saveSettings();
}

function playMainClick()
{
    if(!playSoundEffectsSetting) return;

    const audio = new Audio('assets/audio/click_main.mp3');
    audio.volume = volumeEffects;
    audio.play().catch(() => {});
}

function playSecondaryClick()
{
    if(!playSoundEffectsSetting) return;

    const audio = new Audio('assets/audio/click_hover.mp3');
    audio.volume = volumeEffects;
    audio.play().catch(() => {});
}

function playMemoryLoadingSound()
{
    if(!playSoundtrackSetting) return;

    memoryLoadingSound.currentTime = 0;
    memoryLoadingSound.volume = volumeSoundtrack;
    memoryLoadingSound.play();
}

function playMemorySoundtrack()
{
    if(!playSoundtrackSetting) return;

    memorySoundtrack.currentTime = 0;
    memorySoundtrack.volume = volumeSoundtrack;
    memorySoundtrack.play();
}

function playMatchSound()
{
    if(!playSoundEffectsSetting) return;

    const audio = new Audio('assets/audio/memory_match.mp3');
    audio.volume = volumeEffects;
    audio.play();
}

function playMemoryWinSound()
{
    if(!playSoundEffectsSetting) return;

    memoryWinSound.currentTime = 0;
    memoryWinSound.volume = volumeSoundtrack;
    memoryWinSound.play();
}

function playQuizSoundtrack()
{
    if(!playSoundtrackSetting) return;

    quizSoundtrack.currentTime = 0;
    quizSoundtrack.volume = volumeSoundtrack;
    quizSoundtrack.play();
}

function playErrorSound()
{
    if(!playSoundEffectsSetting) return;

    const audio = new Audio('assets/audio/memory_wrong.mp3');
    audio.volume = volumeEffects;
    audio.play();
}

function playClick()
{
    if(!playSoundEffectsSetting) return;

    const audio = new Audio('assets/click.mp3');
    audio.volume = volumeEffects;
    audio.play();
}

function playWinSound()
{
    if(!playSoundEffectsSetting) return;

    const audio = new Audio('assets/audio/quiz_exact.mp3');
    audio.volume = volumeEffects;
    audio.play();
}

function playWrongSound()
{
    if(!playSoundEffectsSetting) return;

    const audio = new Audio('assets/audio/quiz_wrong.mp3');
    audio.volume = volumeEffects;
    audio.play();
}

function playShuffleSound()
{
    if(!playSoundEffectsSetting) return;

    const audio = new Audio('assets/audio/quiz_shuffle.mp3');
    audio.volume = volumeEffects;
    audio.play();
}

function playGongSound()
{
    if(!playSoundEffectsSetting) return;

    const audio = new Audio('assets/audio/quiz_gong.mp3');
    audio.volume = volumeEffects;
    audio.play();
}

function fadeOutAudio(sound, step = 0.01, interval = 10) 
{
    if (!sound || sound.paused || sound.volume <= 0) return;

    let fading = true;

    function fade() 
    {
        if (!fading) return;
        sound.volume = Math.max(0, sound.volume - step);
        if (sound.volume > 0) 
        {
            setTimeout(fade, interval);
        }
        else 
        {
            sound.volume = 0;
            sound.pause();
            sound.currentTime = 0;
            fading = false;
        }
    }

    fade();
}