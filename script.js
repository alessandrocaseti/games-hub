////        GAMES HUB       ////

const appVersion = "1.1.0";
const appReleaseDate = {
    day : "15",
    month : "06",
    year : "2025"
}

var currentPage = 0; // 0 = home, 1 = game1, 2 = game2, 3 = game3, 4 = game4

var counterGame1 = 0; // contatore per il gioco 1 e 2
var game1Min = 0; // valore minimo del gioco 1 e 2
var game1Max = 0; // valore massimo del gioco 1 e 2

var winsGame1 = 0; // contatore per le vittorie del gioco 1
var winsGame2 = 0; // contatore per le vittorie del gioco 2

var totalAttemptsGame1 = 0; // contatore per i tentativi totali del gioco 1 e 2
var winPercentageGame1 = 0; // percentuale di vittoria del gioco 1 e 2

var countDownStartGame3 = 0;
var countDownPlayGame3 = 0;
var countDownQuestionGame4 = 0;

var startCountdown = 15;
var gameCountdown = 60;
var selectedFlags = 0;

var hasMemoryPairBeenRevealed = false;

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
    aboutDiv.style.display = 'none';
    home.style.display = 'block';
    homeButton.style.display = 'none';
    langButtons.style.display = 'block';
    title.innerHTML = getLocalizedString("name");
    // Svuota gameFrame3 solo se esiste

    // ...existing code...
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

function generateIncrementalIndex(oldIndex)
{
    return oldIndex + 1;
}

function shuffleArray(array)
{
    for (var i = array.length - 1; i > 0; i--) 
    {
        var rand = Math.floor(Math.random() * (i + 1));
        [array[i], array[rand]] = [array[rand], array[i]];
    }
}

function setMinMaxValues(event) // vale per entrambi i giochi (1 e 2)
{
    event.preventDefault(); // Prevent the form from reloading the page

    if (currentPage == 1) // se siamo nel gioco 1
    {
        var min = parseInt(document.getElementById('minValue').value); // ottieni il valore minimo dal field
        var max = parseInt(document.getElementById('maxValue').value); // ottieni il valore massimo dal field

        if (min >= max || isNaN(min) || isNaN(max))
        {
            alert(getLocalizedString("invalidValues"));
            return;
        }
        game1Min = min;
        game1Max = max;
        document.getElementById('gameSetup').style.display = 'inline-block';
        document.getElementById('inputBox').min = min;
        document.getElementById('inputBox').max = max;
        document.getElementById('inputBox').value = null;
        document.getElementById('inputBox').focus();
        document.getElementById('gameTitle').innerHTML = getLocalizedString("insertNumberFrom") + min.toString() + getLocalizedString("insertNumberTo") + max.toString();
    }
    else if (currentPage == 2) // game 2
    {
        var min = parseInt(document.getElementById('minValue2').value); // ottieni il valore minimo dal field
        var max = parseInt(document.getElementById('maxValue2').value); // ottieni il valore massimo dal field
        if (min >= max || isNaN(min) || isNaN(max))
        {
            alert(getLocalizedString("invalidValues"));
            return;
        }
        game1Min = min;
        game1Max = max;
        document.getElementById('gameSetup2').style.display = 'inline-block';
        document.getElementById('inputBox2').min = min;
        document.getElementById('inputBox2').max = max;
        document.getElementById('inputBox2').value = null;
        document.getElementById('inputBox2').focus();
        document.getElementById('gameTitle2').innerHTML = getLocalizedString("insertNumberFrom") + min.toString() + getLocalizedString("insertNumberTo") + max.toString();
    }

    document.getElementById('game1MinMaxValues').style.display = 'none';
    document.getElementById('game2MinMaxValues').style.display = 'none';
}


// LE FUNZIONI editValesGame1 e editValuesGame2 sono duplicate ma con ID diversi a seconda del gioco
// SONO RICHIAMATE QUANDO SI CLICCA SUL PULSANTE "Modifica valori" NELLA PAGINA DEL GIOCO

function editValuesGame1()
{
    setDefaultBackground();
    document.getElementById('gameSetup').style.display = 'none';
    document.getElementById('game1MinMaxValues').style.display = 'block';
    document.getElementById('minValue').value = game1Min.toString();
    document.getElementById('minValue').focus();
    document.getElementById('maxValue').value = game1Max.toString();
    resetAllGames();
}

function editValuesGame2()
{
    setDefaultBackground();
    document.getElementById('gameSetup2').style.display = 'none';
    document.getElementById('game2MinMaxValues').style.display = 'block';
    document.getElementById('minValue2').value = game1Min.toString();
    document.getElementById('minValue2').focus();
    document.getElementById('maxValue2').value = game1Max.toString();
    resetAllGames();
}

function startGame1(event)
{
    event.preventDefault();
    counterGame1++;
    var input = parseInt(document.getElementById('inputBox').value);

    if (isNaN(input)) // se generi un NaN
    {
        alert(getLocalizedString("invalidRange") + game1Min.toString() + getLocalizedString("invalidRangeAnd") + game1Max.toString() + '.');
        return;
    }

    var randomNum = Math.floor(Math.random() * (game1Max - game1Min + 1) + game1Min);
    var counter = counterGame1;
    setDefaultBackground();
    document.getElementById('generatedNumber1').innerHTML = randomNum.toString();
    document.getElementById('test').innerHTML = getLocalizedString("attempt") + counter.toString();

    // VITTORIA
    if (input == randomNum)
    {
        setWinBackground();
        document.getElementById('generatedNumber1').innerHTML = getLocalizedString("exact");

        if (counterGame1 > 1) // plurale o singolare
        {
            document.getElementById('test').innerHTML = getLocalizedString("winIn") + counter.toString() + getLocalizedString("attempts") + "!";
        }
        else
        {
            document.getElementById('test').innerHTML = getLocalizedString("winFirstTry");
        }

        counterGame1 = 0; // Resettiamo il contatore
        winsGame1++; // Aumentiamo il contatore delle vittorie
    }
    else // SCONFITTA
    {
        setDefeatBackground();
    }

    totalAttemptsGame1++; // Aumentiamo il contatore dei tentativi totali
    winPercentageGame1 = (winsGame1 / totalAttemptsGame1) * 100; // Calcola la percentuale di vittoria
    // STATS
    document.getElementById('statsGame1').innerHTML = getLocalizedString("stats") + getLocalizedString("wins") + winsGame1.toString()
                                                    + ' | ' + getLocalizedString("generatedNumbers") + totalAttemptsGame1.toString()
                                                    + ' | ' + getLocalizedString("winPercentage") + winPercentageGame1.toFixed(2) + '%';
}

function startGame2(event)
{
    event.preventDefault(); // Prevent the form from reloading the page
    counterGame1++; // iniziamo aumentando il contatore
    var input = parseInt(document.getElementById('inputBox2').value); // Convertiamo la stringa restituita da inputBox in un numero
    document.getElementById('cancellami').style.display = 'block'; // varie scritte 

    if (isNaN(input)) // se generi un NaN
    {
        alert(getLocalizedString("invalidRange") + game1Min.toString() + getLocalizedString("invalidRangeAnd") + game1Max.toString());
        return;
    }

    document.getElementById('hintGame2').innerHTML = '';
    document.getElementById('test2').innerHTML = '';

    if(hasGame2BeenStarted == false) // se il gioco non è mai stato avviato
    {
        randomNum2 = Math.floor(Math.random() * (game1Max - game1Min + 1) + game1Min);
        hasGame2BeenStarted = true; //d'ora in poi usa il valore generato (statico) e non cambiarlo come in startGame1()
    }

    // VITTORIA
    if (input == randomNum2)
    {
        setWinBackground();

        document.getElementById('hintGame2').innerHTML = ''; // reset perchè rimane
        document.getElementById('generatedNumber2').innerHTML = getLocalizedString("exact");

        if (counterGame1 > 1) // plurale o singolare
        {
            document.getElementById('test2').innerHTML = getLocalizedString("winIn") + counterGame1.toString() + getLocalizedString("attempts") + "!";
        }
        else
        {
            document.getElementById('test2').innerHTML = getLocalizedString("winFirstTry");
        }
        document.getElementById('inputBox2').value = null; // Reset the input box
        counterGame1 = 0;
        winsGame2++;
        hasGame2BeenStarted = false;
    }
    else // SCONFITTA
    {
        setDefeatBackground();
        if(input > randomNum2)
        {
            document.getElementById('hintGame2').innerHTML = getLocalizedString("numberLessThan") + input.toString() + '!';
        }
        else
        {
            document.getElementById('hintGame2').innerHTML = getLocalizedString("numberGreaterThan") + input.toString() + '!';
        }
        document.getElementById('generatedNumber2').innerHTML = getLocalizedString("wrong");
    }

    totalAttemptsGame1++;
    winPercentageGame1 = (winsGame2 / totalAttemptsGame1) * 100;
    document.getElementById('statsGame2').innerHTML = getLocalizedString("stats") + getLocalizedString("wins") + winsGame2.toString()
                                                    + ' | ' + getLocalizedString("generatedNumbers") + totalAttemptsGame1.toString()
                                                    + ' | ' + getLocalizedString("winPercentage") + winPercentageGame1.toFixed(2) + '%';
}

function loadGenericGame()
{
    setDefaultBackground();
    aboutButton.style.display = 'none';
    home.style.display = 'none';
    homeButton.style.display = 'block';
    langButtons.style.display = 'none';
}

function loadGame1()
{
    loadGenericGame();
    title.innerHTML = getLocalizedString("game1ButtonText") + ' - ' + getLocalizedString("name");
    document.getElementById('gameFrame1').style.display = 'block';
    document.getElementById('gameSetup').style.display = 'none';
    document.getElementById('game1MinMaxValues').style.display = 'block';
    document.getElementById('minValue').focus();
    currentPage = 1;
}

function loadGame2()
{
    loadGenericGame();
    title.innerHTML = getLocalizedString("game2ButtonText") + ' - ' + getLocalizedString("name");
    document.getElementById('gameFrame2').style.display = 'block';
    document.getElementById('gameSetup2').style.display = 'none';
    document.getElementById('game2MinMaxValues').style.display = 'block';
    document.getElementById('cancellami').style.display = 'none';
    document.getElementById('minValue2').focus();
    currentPage = 2;
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

function loadGame3()
{
    loadGenericGame();
    title.innerHTML = getLocalizedString("game3ButtonText") + ' - ' + getLocalizedString("name");
    document.getElementById('gameFrame3').style.display = 'block';
    document.getElementById('gameProgress3').style.display = 'block';
    currentPage = 3;

    let i = 0;

    // Svuota e ricrea il frame ogni volta
    var frame3 = document.getElementById('gameFrame3');
    if(frame3) 
    {
        frame3.innerHTML = '<h1 id="game3Title" class="textAnimaton" style="font-size: 70px; user-select: none; width: auto; height: 30px; margin-bottom: 100px;"></h1>';
    }
    document.getElementById("game3Title").innerHTML = "15";

    shuffleArray(memoryGameArray); // mescola l'array per avere le immagini in ordine casuale
    var flagPairsArray = memoryGameArray.slice(20);
    var flagPairsFullArray = flagPairsArray.flatMap(x => [x, x]);
    shuffleArray(flagPairsFullArray);

    for(i in flagPairsFullArray)
    {
        const button = document.createElement('button');
        var image = game3Image[flagPairsFullArray[i]];
        button.innerText = "";
        button.className = 'memoryButton';
        button.id = 'Button' + i.toString();
        button.style.width= "160px";
        button.style.margin = "30px";
        button.style.height = "160px";
        var url = "url('" + image + "')"; 
        button.style.backgroundImage = url.toString();

        button.addEventListener('click', () => // algoritmo memory
        {
            if(startCountdown > 0)
            {
                var index = parseInt(button.id.replace('Button', ''));
                var newUrl = "url('" + game3Image[flagPairsFullArray[index]] + "')"; 
                button.style.backgroundImage = newUrl.toString();
            }

            if(startCountdown <= 0 && !button.classList.contains('matched') && !button.classList.contains('clicked'))
            {
                console.log(document.querySelectorAll('.memoryButton.matched').length);
                
                // Conta quanti bottoni sono stati cliccati (con classe 'clicked')
                const clickedButtons = document.querySelectorAll('.memoryButton.clicked:not(.matched)');
                if(clickedButtons.length === 2)
                {
                    // Se ci sono già 2 bottoni cliccati, non permettere altri click finché non si risolve
                    return;
                }
                button.classList.add('clicked');
                var index = parseInt(button.id.replace('Button', ''));
                var newUrl = "url('" + game3Image[flagPairsFullArray[index]] + "')";
                button.style.backgroundImage = newUrl.toString();

                const updatedClickedButtons = document.querySelectorAll('.memoryButton.clicked:not(.matched)');
                if(updatedClickedButtons.length === 2) 
                {
                    // Prendi i due bottoni e confronta i loro valori
                    const btn1 = updatedClickedButtons[0];
                    const btn2 = updatedClickedButtons[1];
                    const idx1 = parseInt(btn1.id.replace('Button', ''));
                    const idx2 = parseInt(btn2.id.replace('Button', ''));
                    if(flagPairsFullArray[idx1] === flagPairsFullArray[idx2]) 
                    {
                        // Match! Rendi i bottoni "matched" e non più cliccabili
                        setTimeout(() => 
                        {
                            btn1.classList.add('matched');
                            btn2.classList.add('matched');
                            btn1.classList.remove('clicked');
                            btn2.classList.remove('clicked');
                        }, 400);

                        if (document.querySelectorAll('.memoryButton.matched').length === 22)
                        {
                            setWinBackground();
                            document.getElementById("game3Title").innerHTML = getLocalizedString("youWon");
                            clearInterval(countDownPlayGame3);                            
                        }
                    } 
                    else 
                    {
                        // Non match, nascondi dopo 1 secondo
                        setTimeout(() => 
                        {
                            btn1.classList.remove('clicked');
                            btn2.classList.remove('clicked');
                            btn1.style.backgroundImage = questionMark;
                            btn2.style.backgroundImage = questionMark;
                        }, 400);
                    }
                }
            }
        })
        frame3.appendChild(button)
    }

    document.getElementById('progressBar3').value = 100;
    startCountdown = 15;
    setProgressBarValue(startCountdown, 3);
    gameCountdown = 60;

    countDownStartGame3 = setInterval(function() 
    {
        startCountdown--;
        document.getElementById("game3Title").innerHTML = startCountdown.toString();

        if (startCountdown <= 0) 
        {
            clearInterval(countDownStartGame3);
            document.getElementById("game3Title").innerHTML = getLocalizedString("start");
            for (let j = 0; j < 24; j++)
            {
                var button = document.getElementById('Button' + j.toString());
                if(button)
                {
                    button.style.backgroundImage = questionMark;
                }
            }
            setProgressBarValue(gameCountdown, 3);
            countDownPlayGame3 = setInterval(function() 
            {
                gameCountdown--;
                document.getElementById("game3Title").innerHTML = gameCountdown.toString();

                if (gameCountdown <= 0) 
                {
                    clearInterval(countDownPlayGame3);
                    setDefeatBackground();
                    document.getElementById("game3Title").innerHTML = getLocalizedString("youLost");
                    for (let j = 0; j < 24; j++)
                    {
                        var button = document.getElementById('Button' + j.toString());
                        var url = "url('" + game3Image[flagPairsFullArray[j]] + "')";
                        button.style.backgroundImage = url.toString();
                        button.disabled = true;
                    }
                }
                
            }, 1000);
        }
    }, 1000);
}

function getRandomChar() 
{
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return chars.charAt(Math.floor(Math.random() * chars.length));
}

function shuffleAnimation(p1, p2) 
{
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

function loadGame4()
{
    loadGenericGame();
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

    for (var i = 0; i < lunghezza; i++)
    {
        var randomNum = Math.floor(Math.random() * 1.5); // genera un numero casuale da 0 a 1
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
        if(randomNum == 0 && vettoreCaratteri[i] != ' ' && vettoreCaratteri[i] != '' && vettoreCaratteri[i] != '\'') // 40% di probabilità di mostrare il carattere
        {
            vettoreCaratteri[i] = '_';
        }
        if(vettoreCaratteri[i] == ' ') // se è uno spazio -> segnati un index da dove ripartire per scrivere il secondo vettore e cancellami il primo
        {
            secondIndex = i + 1; // +1 per non scrivere lo spazio
            needToClear = true; // ora non scrivere più niente
        }
        vettoreCaratteri[i] = vettoreCaratteri[i].toUpperCase(); // mettiamo in maiuscolo
    }

    vettoreCaratteri[lunghezza - 1] = ''; // cancella l'ultimo carattere se è uno spazio
    parolaFull[lunghezza - 1] = ''; // cancella l'ultimo carattere se è uno spazio

    for (var j = secondIndex; j < lunghezza; j++)
    {
        var randomNum = Math.floor(Math.random() * 1.5);
        if(randomNum == 0 && vettoreCaratteri2[j] != ' ' && vettoreCaratteri2[j] != '' && vettoreCaratteri[i] != "'") // 50% di probabilità di mostrare il carattere
        {
            vettoreCaratteri2[j] = '_';
        }
        vettoreCaratteri2[j] = vettoreCaratteri2[j].toUpperCase(); // mettiamo in maiuscolo
    }

    game4Index = indice;

    var parolaFinale = vettoreCaratteri.join('').toUpperCase(); // unisce gli elementi dell'array in una stringa
    var parolaFinale2 = vettoreCaratteri2.join('').toUpperCase(); // unisce gli elementi dell'array in una stringa

    shuffleAnimation(parolaFinale, parolaFinale2);

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
    
    event.preventDefault(); // Prevent the form from reloading the page
    if(timeout == 0)
    {
        const inputBoxValue = document.getElementById("inputGame4").value.toUpperCase();
        console.log("Input rilevato");
        if(inputBoxValue == getQuestion(game4Index).toUpperCase()) // win
        {
            console.log("Risposta corretta");
            clearInterval(progressBarValue);
            clearInterval(countDownQuestionGame4);
            document.getElementById("nextQuestionButton").disabled = false;
            document.getElementById("inputGame4").disabled = true;
            document.getElementById("nextQuestionButton").focus();
            setWinBackground();
            document.getElementById("game4Title").innerHTML = parolaFull.join('').toUpperCase();
            document.getElementById("game4Title2").innerHTML = parolaFull2.join('').toUpperCase();

            game4WinTracker = game4QuestionIndex + 1 - game4LostTracker;
            document.getElementById("game4MessageInfo").innerHTML = getLocalizedString("exact") + ' ' + getLocalizedString("score") 
                                                                  + game4WinTracker.toString() + " / " + game4Questions.toString();

            if(game4QuestionIndex == game4Questions - 1)
            {
                console.log("QUIZ COMPLETATO - tramite risposta corretta");
                document.getElementById("game4MessageInfo").innerHTML = getLocalizedString("quizCompleted") + ' ' + getLocalizedString("score") 
                                                                      + game4WinTracker.toString() + " / " + + game4Questions.toString();
                document.getElementById("inputGame4").disabled = true;
                document.getElementById("nextQuestionButton").disabled = true;
            }

            console.log(game4QuestionIndex)
        }
        else
        {
            document.getElementById("game4MessageInfo").innerHTML = getLocalizedString("wrong");
        }

    }
    else
    {
        setDefeatBackground();
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

function about()
{
    loadGenericGame();
    title.innerHTML = getLocalizedString("aboutTitle");
    aboutDiv.style.display = 'block';
}