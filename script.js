//// GAMES HUB ////

const appVersion = "1.2.0";
const appReleaseDate = { day : "20", month : "06", year : "2025" }

var currentPage = 0; // 0 = home, 1 = game1, 2 = game2, 3 = game3, 4 = game4

var counterGame1 = 0; // contatore per il gioco 1 e 2
var game1Min = 0; // valore minimo del gioco 1 e 2
var game1Max = 0; // valore massimo del gioco 1 e 2

var winsGame1 = 0; // contatore per le vittorie del gioco 1
var winsGame2 = 0; // contatore per le vittorie del gioco 2

var totalAttemptsGame1 = 0; // contatore per i tentativi totali del gioco 1 e 2
var winPercentageGame1 = 0; // percentuale di vittoria del gioco 1 e 2

var countDownQuestionGame4 = 0;

var game4WinTracker = 0;  
var game4LostTracker = 0;
var game4QuestionIndex = -1;
var progressBarValue = 0; // valore della progressbar per il gioco 3 e 4

var hasGame2BeenStarted = false; // serve per il gioco 2
var randomNum2 = 0; // numero generato per il gioco 2
var parolaFull = ""; // parola completa per il gioco 4
var parolaFull2 = ""; // parola completa per il gioco 4 (seconda parte)

var hasGame4BeenStarted = false;
var game4Index = 0;

// HTML elements
var body;
var aboutButton;
var homeButton;
var home;
var langButtons;
var title;

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

function setBodyBgClass(className)
{
    if (!body) return;

    // Se la classe è già presente, non fare nulla
    if (body.classList.contains(className)) return;

    // Rimuovi tutte le classi di background
    body.classList.remove('default-bg', 'win-bg', 'defeat-bg');

    // Aggiungi la nuova classe
    body.classList.add(className);

    // Non serve forzare il repaint, l'animazione CSS farà il resto
}

function setDefaultBackground()
{
    setBodyBgClass('default-bg');
}

function setWinBackground()
{
    setBodyBgClass('win-bg');
}

function setDefeatBackground()
{
    setBodyBgClass('defeat-bg');
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

function setProgressBarValue(value, progressBarIndex)
{
    clearInterval(progressBarValue);
    var getProgressBar = "progressBar" + progressBarIndex.toString();
    var progressBar = document.getElementById(getProgressBar.toString());
    var max = value * 1000; // valore massimo della barra di avanzamento
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

        }, 10); // aggiorna la progressBar ogni 10 ms per fare una animation mooolto smooth
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
