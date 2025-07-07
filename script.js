//// GAMES HUB ////

const appVersion = "1.2.0";
const appReleaseDate = { day : "20", month : "06", year : "2025" }

let currentPage = 0; // 0 = home, 1 = game1, 2 = game2, 3 = game3, 4 = game4

let theme = "light";

// HTML elements
let body;
let aboutButton;
let homeButton;
let home;
let langButtons;
let title;

window.addEventListener('DOMContentLoaded', function()
{
    body = document.getElementById('main');
    aboutButton = document.getElementById('aboutButton');
    homeButton = document.getElementById('homeButton');
    home = document.getElementById('home');
    langButtons = document.getElementById('languageButtons');
    title = document.getElementById("pageTitle");
    document.getElementById('sliderVolume').value = 100;
    document.getElementById('sliderEffects').value = 100;
    document.getElementById('memoryDifficulty').value = "24";
    document.getElementById('quizDifficulty').value = "2";
    setLanguage();
});

function setBackground(type) 
{
    if (!body) return;
    const validTypes = ['default-bg', 'dark-bg', 'win-bg', 'defeat-bg'];
    if (!validTypes.includes(type)) return;
    if (body.classList.contains(type)) return;
    body.classList.remove(...validTypes);
    body.classList.add(type);
}

function setDefaultBackground() 
{ 
    switch(theme)
    {
        case "light":
            setBackground('default-bg');
            break;
        case "dark":
            setBackground('dark-bg');
            break;
        default:
            setBackground('default-bg'); 
    }
}

function setWinBackground() { setBackground('win-bg'); }
function setDefeatBackground() { setBackground('defeat-bg'); }

function toggleTheme()
{
    playMainClick();

    const setting = document.getElementById("themeToggle");
    if (setting.checked)
    {
        theme = "dark";
    }
    else
    {
        theme = "light";
    }
    
    setDefaultBackground();
}

function updateSliderFill(slider) 
{
    const value = (slider.value - slider.min) / (slider.max - slider.min) * 100;
    slider.style.background = `linear-gradient(90deg,rgb(128, 128, 255) ${value}%, rgb(43, 43, 121) ${value}%)`;
}

function resetAllGames()
{
    document.getElementById('generatedNumber1').innerHTML = '';
    document.getElementById('generatedNumber2').innerHTML = '';

    document.getElementById('test').innerHTML = '';
    document.getElementById('test2').innerHTML = '';

    document.getElementById('statsGame1').innerHTML = '';
    document.getElementById('statsGame2').innerHTML = '';
    document.getElementById('hintGame2').innerHTML = '';

    counterGame1 = 0;
    totalAttemptsGame1 = 0;
    winPercentageGame1 = 0;
    winsGame1 = 0;
    winsGame2 = 0;
    game4WinTracker = 0;
    hasGame2BeenStarted = false;
    hasGame4BeenStarted = false;
    game4QuestionIndex = -1;
    game4WinTracker = 0;
}

function backToHome()
{
    aboutButton.style.display = 'block';
    document.getElementById("aboutDiv").style.display = 'none';
    document.getElementById("settingsPage").style.display = 'none';
    home.style.display = 'block';
    homeButton.style.display = 'none';

    langButtons.style.display = 'block';
    title.innerHTML = getLocalizedString("name");

    playMainClick();

    if(quizSoundtrack.paused === false)
    {
        fadeOutAudio(quizSoundtrack);
    }

    if(memorySoundtrack.paused === false)
    {
        fadeOutAudio(memorySoundtrack);
    }

    if(memoryLoadingSound.paused === false)
    {
        fadeOutAudio(memoryLoadingSound);
    }

    if(memoryWinSound.paused === false)
    {
        fadeOutAudio(memoryWinSound);
    }

    document.getElementById("userSelection").style.display = "none";
    document.getElementById("currentUserDiv").style.display = "none";
    document.getElementById('gameFrame1').style.display = 'none';
    document.getElementById('gameFrame2').style.display = 'none';
    document.getElementById('gameFrame3').style.display = 'none';
    document.getElementById('gameProgress3').style.display = 'none';
    document.getElementById('gameProgress4').style.display = 'none';
    document.getElementById('gameFrame4').style.display = 'none';
    clearInterval(countDownStartGame3);
    clearInterval(countDownPlayGame3);
    clearInterval(progressBarValue);
    clearInterval(countDownQuestionGame4);
    setDefaultBackground();
    resetAllGames();
}

function loadGenericGame(triggerSound)
{
    setDefaultBackground();

    if(triggerSound)
    {
        playMainClick();
    }

    aboutButton.style.display = 'none';
    home.style.display = 'none';
    homeButton.style.display = 'block';
    langButtons.style.display = 'none';
}

let progressBarValue = 0;

function setProgressBarValue(value, progressBarIndex)
{
    clearInterval(progressBarValue);
    const getProgressBar = "progressBar" + progressBarIndex.toString();
    let progressBar = document.getElementById(getProgressBar.toString());
    let max = value * 1000; // valore massimo della barra di avanzamento
    progressBarValue = setInterval(function() 
    {
        max = (max - 10); // calcola il nuovo valore della barra di avanzamento
        progressBar.value = max / (value * 10);

        if (max <= 0)
        {
            clearInterval(progressBarValue);
            if(progressBarIndex == 4)
            {
                checkAnswer(document.createEvent("Event"), 1); // chiama la funzione per controllare la risposta del gioco 4
            }
        }

    }, 10);
}

function showSettings()
{
    loadGenericGame(true);
    document.getElementById('settingsPage').style.display = 'block';
}

function about()
{
    loadGenericGame(true);
    title.innerHTML = getLocalizedString("aboutTitle");
    document.getElementById("aboutDiv").style.display = 'block';
}
