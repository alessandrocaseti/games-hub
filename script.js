//// GAMES HUB ////

const appVersion = "2.0.0";
const appReleaseDate = { day : "15", month : "07", year : "2025" }

let currentPage = 0; // 0 = home, 1 = game1, 2 = game2, 3 = game3, 4 = game4

let theme = "light";

// HTML elements
let body;
let homeButton;
let home;
let settingsButton;
let title;

window.addEventListener('DOMContentLoaded', function()
{
    body = document.getElementById('main');
    homeButton = document.getElementById('homeButton');
    home = document.getElementById('home');
    settingsButton = document.getElementById('settingsButton');
    title = document.getElementById("pageTitle");
    setDefaultBackground();
    loadSettings();
    setLanguage('it', false); // Or 'it'—after loadSettings()
});

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
    document.getElementById("settingsPage").style.display = 'none';
    home.style.display = 'block';
    homeButton.style.display = 'none';

    settingsButton.style.display = 'block';
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
    document.getElementById('memory').style.display = 'none';
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

    home.style.display = 'none';
    homeButton.style.display = 'block';
    settingsButton.style.display = 'none';
}

let progressBarValue = 0;

function setProgressBarValue(value, progressBarIndex, colorIndicator)
{
    clearInterval(progressBarValue);
    const getProgressBar = "progressBar" + progressBarIndex.toString();
    let progressBar = document.getElementById(getProgressBar.toString());
    progressBar.style.transition = "none";
    progressBar.style.accentColor = "rgb(0, 208, 255)";
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
            progressBar.style.transition = "none";
            progressBar.style.accentColor = "rgb(0, 208, 255)";
        }
        if(colorIndicator && max <= value * 250)
        {
            progressBar.style.transition = "ease-in-out 0.12s, accent-color 1.6s ease";
            progressBar.style.accentColor = 'rgb(255, 0, 0)';
        }

    }, 10);
}

function showSettings()
{
    loadGenericGame(true);
    document.getElementById('settingsPage').style.display = 'block';
}

