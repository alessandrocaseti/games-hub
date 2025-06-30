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

function getRandomChar() 
{
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return chars.charAt(Math.floor(Math.random() * chars.length));
}

function shuffleAnimation(p1, p2) 
{
    playShuffleSound();

    var length1 = p1.length;
    var length2 = p2.length;
    var split1 = p1.split("");
    var split2 = p2.split("");

    var interval = 40; // ms
    var duration = 400; // ms
    var elapsed = 0;

    var animation = setInterval(function() 
    {
        for (let i = 0; i < length1; i++) 
        {
            split1[i] = getRandomChar();
        }

        for (let i = 0; i < length2; i++) 
        {
            split2[i] = getRandomChar();
        }

        document.getElementById("game4Title").innerHTML = split1.join("");
        document.getElementById("game4Title2").innerHTML = split2.join("");
        elapsed += interval;

        if (elapsed >= duration) 
        {
            clearInterval(animation);
            document.getElementById("game4Title").innerHTML = p1;
            document.getElementById("game4Title2").innerHTML = p2;
        }

    }, interval);
}

function blinkAnimation()
{
    var game4Title = document.getElementById("game4Title");
    var game4Title2 = document.getElementById("game4Title2");
    game4Title.style.color = 'orange';
    game4Title2.style.color = 'orange';
    var interval = 80; // ms
    var duration = 800; // ms
    var elapsed = 0;

    var blinkInterval = setInterval(function() 
    {
        if (game4Title.style.visibility === 'hidden') 
        {
            game4Title.style.visibility = 'visible';
            game4Title2.style.visibility = 'visible';
        } 
        else 
        {
            game4Title.style.visibility = 'hidden';
            game4Title2.style.visibility = 'hidden';
        }
        
        elapsed += interval;

        if (elapsed >= duration) 
        {
            clearInterval(blinkInterval);
            game4Title.style.visibility = 'visible';
            game4Title2.style.visibility = 'visible';
            game4Title.style.color = 'white';
            game4Title2.style.color = 'white';
        }
    }, interval);
}

function loadGame4()
{
    loadGenericGame(false);
    if(users && totalUserCount > 1)
    {
        showUserSelection(4);
    }
    else if(users && totalUserCount === 1)
    {
        userSelectionGame = 4;
        selectUser(0, false);
    }
    else
    {
        loadQuiz(true);
    }
}

function loadQuiz(triggerSound)
{
    if(totalUserCount > 0)
    {
        document.getElementById("currentUserDiv").style.display = "flex";
    }

    if(triggerSound)
    {
        playMainClick();
    }

    loadGenericGame(!triggerSound);

    title.innerHTML = getLocalizedString("game4ButtonText") + ' - ' + getLocalizedString("name");
    var game4countdown = 20;
    document.getElementById("inputGame4").value = "";
    document.getElementById('gameFrame4').style.display = 'block';
    document.getElementById('gameProgress4').style.display = 'block';
    document.getElementById("nextQuestionButton").disabled = true;
    document.getElementById("game4MessageInfo").innerHTML = game4countdown.toString();
    currentPage = 4;
    clearInterval(countDownQuestionGame4);
    clearInterval(progressBarValue);
    setProgressBarValue(game4countdown, 4);
    document.getElementById("inputGame4").disabled = false;
    document.getElementById("inputGame4").focus();

    game4QuestionIndex++;

    if(!hasGame4BeenStarted)
    {
        shuffleArray(questionID);
    }

    console.log(questionID)
    hasGame4BeenStarted = true;

    var indice = questionID[game4QuestionIndex];
    var lunghezza = getQuestion(indice).length;
    var vettoreCaratteri = Array.from(getQuestion(indice)); // crea un array di caratteri dalla parola
    var vettoreCaratteri2 = Array.from(getQuestion(indice)); // crea un array di caratteri dalla parola
    parolaFull = Array.from(getQuestion(indice));
    parolaFull2 = Array.from(getQuestion(indice));

    var secondIndex = 0; // index da dove ripartire per scrivere il secondo vettore
    var needToClear = false; // serve per il ciclo for

    for (let i = 0; i < lunghezza; i++)
    {
        var randomNum = Math.floor(Math.random() * quizDifficulty); // genera un numero casuale da 0 a 1
        if(needToClear == true) // se abbiamo già trovato uno spazio -> non scrivere più niente
        {
            vettoreCaratteri[i - 1] = '';
            parolaFull[i - 1] = ''; // cancella anche la parola completa
        }
        if(needToClear == false) // nel frattempo cancella il secondo vettore
        {
            vettoreCaratteri2[i] = '';
            parolaFull2[i] = ''; // cancella anche la parola completa
        }
        if(randomNum == 0 && vettoreCaratteri[i] != ' ' && vettoreCaratteri[i] != '' && vettoreCaratteri[i] != "\'")
        {
            vettoreCaratteri[i] = '_';
        }
        if(vettoreCaratteri[i] == ' ') // se è uno spazio -> segnati un index da dove ripartire per scrivere il secondo vettore e cancellami il primo
        {
            secondIndex = i + 1; // +1 per non scrivere lo spazio
            needToClear = true; // ora non scrivere più niente
        }
    }

    vettoreCaratteri[lunghezza - 1] = ''; // cancella l'ultimo carattere se è uno spazio
    parolaFull[lunghezza - 1] = ''; // cancella l'ultimo carattere se è uno spazio

    for (let j = secondIndex; j < lunghezza; j++)
    {
        var randomNum = Math.floor(Math.random() * quizDifficulty);
        if(randomNum == 0 && vettoreCaratteri2[j] != ' ' && vettoreCaratteri2[j] != '' && vettoreCaratteri2[j] != "\'")
        {
            vettoreCaratteri2[j] = '_';
        }
    }

    game4Index = indice;

    var parolaFinale = vettoreCaratteri.join('').toUpperCase(); // unisce gli elementi dell'array in una stringa
    var parolaFinale2 = vettoreCaratteri2.join('').toUpperCase(); // unisce gli elementi dell'array in una stringa

    shuffleAnimation(parolaFinale, parolaFinale2);
    clearInterval(fadeAudio);
    playQuizSoundtrack();

    document.getElementById("game4Tip").innerHTML = getQuestionTip(indice);

    countDownQuestionGame4 = setInterval(function()
    {
        game4countdown--;
        document.getElementById("game4MessageInfo").innerHTML = game4countdown.toString();
        if (game4countdown <= 0) 
        {
            if(game4QuestionIndex < game4Questions - 1)
            {
                document.getElementById("game4MessageInfo").innerHTML = getLocalizedString("timesUp");
            }
            document.getElementById("nextQuestionButton").focus();
            game4LostTracker++;
            console.log(game4QuestionIndex)
            if(game4QuestionIndex == game4Questions - 1)
            {
                console.log("QUIZ COMPLETATO - tramite tempo scaduto");
                document.getElementById("game4MessageInfo").innerHTML = getLocalizedString("quizCompleted") + ' ' + getLocalizedString("score") 
                                                                      + game4WinTracker.toString() + " / " + + game4Questions.toString();
                document.getElementById("inputGame4").disabled = true;
                document.getElementById("nextQuestionButton").disabled = true;
            }
            clearInterval(countDownQuestionGame4);
        }
    }, 1000)
}

function checkAnswer(event, timeout)
{
    event.preventDefault();
    if(timeout == 0)
    {
        const inputBoxValue = document.getElementById("inputGame4").value.toUpperCase();
        console.log("Input rilevato");
        if(inputBoxValue == getQuestion(game4Index).toUpperCase()) // win
        {
            setWinBackground();
            playWinSound();
            fadeOutAudio(quizSoundtrack);
            clearInterval(progressBarValue);
            clearInterval(countDownQuestionGame4);
            document.getElementById("nextQuestionButton").disabled = false;
            document.getElementById("inputGame4").disabled = true;
            document.getElementById("nextQuestionButton").focus();
            document.getElementById("game4Title").innerHTML = parolaFull.join('').toUpperCase();
            document.getElementById("game4Title2").innerHTML = parolaFull2.join('').toUpperCase();
            game4WinTracker = game4QuestionIndex + 1 - game4LostTracker;

            document.getElementById("game4MessageInfo").innerHTML = getLocalizedString("exact") + ' ' + getLocalizedString("score") 
                                                                  + game4WinTracker.toString() + " / " + game4Questions.toString();

            if(users)
            {
                XP[currentlyPlayingUserID] += 100;
                updateXP(currentlyPlayingUserID);
            }                                                     

            if(game4QuestionIndex == game4Questions - 1)
            {
                console.log("QUIZ COMPLETATO - tramite risposta corretta");
                document.getElementById("game4MessageInfo").innerHTML = getLocalizedString("quizCompleted") + ' ' + getLocalizedString("score") 
                                                                      + game4WinTracker.toString() + " / " + + game4Questions.toString();
                document.getElementById("inputGame4").disabled = true;
                document.getElementById("nextQuestionButton").disabled = true;
                if(users)
                {
                    XP[currentlyPlayingUserID] += 500;
                    updateXP(currentlyPlayingUserID);
                }  
            }

            console.log(game4QuestionIndex)
        }
        else
        {
            playWrongSound();
            blinkAnimation();
            document.getElementById("game4MessageInfo").innerHTML = getLocalizedString("wrong");
        }
    }
    else
    {
        setDefeatBackground();
        playGongSound();
        document.getElementById("game4Title").innerHTML = parolaFull.join('').toUpperCase();
        document.getElementById("game4Title2").innerHTML = parolaFull2.join('').toUpperCase();
        if(game4QuestionIndex < game4Questions - 1)
        {
            document.getElementById("nextQuestionButton").disabled = false;
        }
        else
        {
            document.getElementById("nextQuestionButton").disabled = true;        

        }
        
        document.getElementById("inputGame4").disabled = true;
    }

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
