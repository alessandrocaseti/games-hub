// definiamo ste variabili

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

const game4Questions = 41;

var progressBarValue = 0; // valore della progressbar per il gioco 3 e 4

var hasGame2BeenStarted = false; // serve per il gioco 2
var randomNum2 = 0; // numero generato per il gioco 2
var parolaFull = ""; // parola completa per il gioco 4
var parolaFull2 = ""; // parola completa per il gioco 4 (seconda parte)

var game3Image =  [
    "https://raw.githubusercontent.com/kapowaz/square-flags/395a3335100d1e1f361daf8508d9d9c17e28962e/flags-original/am.svg", // Armenia
    "https://raw.githubusercontent.com/kapowaz/square-flags/395a3335100d1e1f361daf8508d9d9c17e28962e/flags-original/ae.svg", // United Arab Emirates
    "https://raw.githubusercontent.com/kapowaz/square-flags/395a3335100d1e1f361daf8508d9d9c17e28962e/flags-original/bb.svg", // Barbados
    "https://raw.githubusercontent.com/kapowaz/square-flags/395a3335100d1e1f361daf8508d9d9c17e28962e/flags-original/au.svg", // Australia
    "https://raw.githubusercontent.com/kapowaz/square-flags/395a3335100d1e1f361daf8508d9d9c17e28962e/flags-original/it.svg", // Italy
    "https://raw.githubusercontent.com/kapowaz/square-flags/395a3335100d1e1f361daf8508d9d9c17e28962e/flags-original/fr.svg", // France
    "https://raw.githubusercontent.com/kapowaz/square-flags/395a3335100d1e1f361daf8508d9d9c17e28962e/flags-original/pl.svg", // Poland
    "https://raw.githubusercontent.com/kapowaz/square-flags/395a3335100d1e1f361daf8508d9d9c17e28962e/flags-original/th.svg", // Thailand    
    "https://raw.githubusercontent.com/kapowaz/square-flags/395a3335100d1e1f361daf8508d9d9c17e28962e/flags-original/za.svg", // South Africa
    "https://raw.githubusercontent.com/kapowaz/square-flags/395a3335100d1e1f361daf8508d9d9c17e28962e/flags-original/es.svg", // Spain
    "https://raw.githubusercontent.com/kapowaz/square-flags/395a3335100d1e1f361daf8508d9d9c17e28962e/flags-original/ru.svg", // Russia
    "https://raw.githubusercontent.com/kapowaz/square-flags/395a3335100d1e1f361daf8508d9d9c17e28962e/flags-original/us.svg", // United States
    "https://raw.githubusercontent.com/kapowaz/square-flags/395a3335100d1e1f361daf8508d9d9c17e28962e/flags-original/pt.svg", // Portugal
    "https://raw.githubusercontent.com/kapowaz/square-flags/395a3335100d1e1f361daf8508d9d9c17e28962e/flags-original/uk.svg", // United Kingdom
    "https://raw.githubusercontent.com/kapowaz/square-flags/395a3335100d1e1f361daf8508d9d9c17e28962e/flags-original/ro.svg", // Romania
    "https://raw.githubusercontent.com/kapowaz/square-flags/395a3335100d1e1f361daf8508d9d9c17e28962e/flags-original/de.svg", // Germany
    "https://raw.githubusercontent.com/kapowaz/square-flags/395a3335100d1e1f361daf8508d9d9c17e28962e/flags-original/ua.svg", // Ukraine
    "https://raw.githubusercontent.com/kapowaz/square-flags/395a3335100d1e1f361daf8508d9d9c17e28962e/flags-original/ch.svg", // Switzerland
    "https://raw.githubusercontent.com/kapowaz/square-flags/395a3335100d1e1f361daf8508d9d9c17e28962e/flags-original/gr.svg", // Greece
    "https://raw.githubusercontent.com/kapowaz/square-flags/395a3335100d1e1f361daf8508d9d9c17e28962e/flags-original/ma.svg", // Morocco
    "https://raw.githubusercontent.com/kapowaz/square-flags/395a3335100d1e1f361daf8508d9d9c17e28962e/flags-original/tr.svg", // Turkey
    "https://raw.githubusercontent.com/kapowaz/square-flags/395a3335100d1e1f361daf8508d9d9c17e28962e/flags-original/va.svg", // Vatican City
    "https://raw.githubusercontent.com/kapowaz/square-flags/395a3335100d1e1f361daf8508d9d9c17e28962e/flags-original/jp.svg", // Japan
    "https://raw.githubusercontent.com/kapowaz/square-flags/395a3335100d1e1f361daf8508d9d9c17e28962e/flags-original/dk.svg", // Denmark
    "https://raw.githubusercontent.com/kapowaz/square-flags/395a3335100d1e1f361daf8508d9d9c17e28962e/flags-original/ag.svg", // Antigua & Barbuda
    "https://raw.githubusercontent.com/kapowaz/square-flags/395a3335100d1e1f361daf8508d9d9c17e28962e/flags-original/al.svg", // Albania
    "https://raw.githubusercontent.com/kapowaz/square-flags/395a3335100d1e1f361daf8508d9d9c17e28962e/flags-original/an.svg", // Netherlands Antilles
    "https://raw.githubusercontent.com/kapowaz/square-flags/395a3335100d1e1f361daf8508d9d9c17e28962e/flags-original/ar.svg", // Argentina
    "https://raw.githubusercontent.com/kapowaz/square-flags/395a3335100d1e1f361daf8508d9d9c17e28962e/flags-original/br.svg", // Brasil
    "https://raw.githubusercontent.com/kapowaz/square-flags/395a3335100d1e1f361daf8508d9d9c17e28962e/flags-original/in.svg", // India
    "https://raw.githubusercontent.com/kapowaz/square-flags/395a3335100d1e1f361daf8508d9d9c17e28962e/flags-original/ee.svg", // Estonia
    "https://raw.githubusercontent.com/kapowaz/square-flags/395a3335100d1e1f361daf8508d9d9c17e28962e/flags-original/aq-true_south.svg", // Antartic

]

var memoryGameArray = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31);

var hasGame3BeenStarted = false;
var hasGame4BeenStarted = false;
var game4Index = 0;
var questionID = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40);

let translate; //language

const strings_it = {

    name : "Hub di Giochi",
    homeWelcomeText : "Benvenuto su Games Hub!",
    homeTeachingText : "Scegli un gioco cliccando su uno dei seguenti bottoni:",
    game1ButtonText : "Indovina il numero (hard)",
    game2ButtonText : "Indovina il numero (easy)",
    game3ButtonText : "Memory: <br> bandiere",
    game4ButtonText : "Reazione a Catena",
    insertMinMaxValues : "Inserisci il valore minimo e quello massimo",
    insertMin : "Inserisci il minimo",
    insertMax : "Inserisci il massimo",
    setValues : "Imposta valori",
    insertNumber : "Inserisci un numero",
    insertNumberFrom : "Inserisci un numero da ",
    insertNumberTo : " a ",
    generate : "Genera",
    try : "Tenta",
    edit : "Modifica",
    winFirstTry : "Hai vinto al primo tentativo!",
    winIn : "Hai vinto in ",
    attempt : "Tentativo ",
    attempts : " tentativi",
    wrong : "Sbagliato!",
    exact : "Esatto!",
    backToHome : "Torna alla Home"
};

const strings_en = {

    name : "Games Hub",
    homeWelcomeText : "Welcome on Games Hub!",
    homeTeachingText : "Choose a game by clicking one of the buttons below:",
    game1ButtonText : "Guess the number (hard)",
    game2ButtonText : "Guess the number (easy)",
    game3ButtonText : "Memory: <br> country flags",
    game4ButtonText : "Italian simple quiz",
    insertMinMaxValues : "Insert minimum and maximum values",
    insertMin : "Insert minimum",
    insertMax : "Insert maximum",
    setValues : "Set values",
    insertNumber : "Insert a number",
    insertNumberFrom : "Insert a number from ",
    insertNumberTo : " to ",
    generate : "Generate",
    try : "Try",
    edit : "Edit",
    winFirstTry : "You won at first try!",
    winIn : "You won in ",
    attempt : "Attempt ",
    attempts : " attempts",
    wrong : "Wrong!",
    exact : "Exact!",
    backToHome : "Back to Home"
};

function setLanguage(id)
{

    switch(id)
    {
        case "it":
            translate = strings_it;
            break;
        case "en":
            translate = strings_en;
            break;
        default:
            translate = strings_en;
            break;
    }

    document.getElementById("pageTitle").innerHTML = translate.name;
    document.getElementById("mainTitle").innerHTML = translate.name;
    document.getElementById("welcomeText").innerHTML = translate.homeWelcomeText;
    document.getElementById("chooseGameText").innerHTML = translate.homeTeachingText;
    document.getElementById("game1").innerHTML = translate.game1ButtonText;
    document.getElementById("game1Title").innerHTML = translate.game1ButtonText;
    document.getElementById("minValue").placeholder = translate.insertMin;
    document.getElementById("maxValue").placeholder = translate.insertMax;
    document.getElementById("editValuesButton").innerHTML = translate.edit;
    document.getElementById("editValuesButton2").innerHTML = translate.edit;
    document.getElementById("inputButton").innerHTML = translate.setValues;
    document.getElementById("inputButton2").innerHTML = translate.generate;
    document.getElementById("inputBox").placeholder = translate.insertNumber;
    document.getElementById("valuesTitle").innerHTML = translate.insertMinMaxValues;
    document.getElementById("valuesTitle2").innerHTML = translate.insertMinMaxValues;
    document.getElementById("minValue2").placeholder = translate.insertMin;
    document.getElementById("maxValue2").placeholder = translate.insertMax;
    document.getElementById("inputButton3").innerHTML = translate.setValues;
    document.getElementById("inputButton4").innerHTML = translate.try;
    document.getElementById("inputBox2").placeholder = translate.insertNumber;
    document.getElementById("game2").innerHTML = translate.game2ButtonText;
    document.getElementById("game2Title").innerHTML = translate.game2ButtonText;
    document.getElementById("game3").innerHTML = translate.game3ButtonText;
    document.getElementById("game4").innerHTML = translate.game4ButtonText;
    homeButton.innerHTML = translate.backToHome;
}

function getLocalizedString(string_id)
{
    return translate[string_id];
}

// HTML elements
var body;
var aboutButton;
var homeButton;
var home;
var langButtons;

window.addEventListener('DOMContentLoaded', function()
{
    body = document.getElementById('main');
    aboutButton = document.getElementById('aboutButton');
    homeButton = document.getElementById('homeButton');
    home = document.getElementById('home');
    langButtons = document.getElementById('languageButtons');
    setLanguage();
    
});

function setBodyBgClass(className)
{
    if (!body) return;

    // Remove all background classes
    body.classList.remove('default-bg', 'win-bg', 'defeat-bg');

    // Add the new class (no reflow needed for static backgrounds)
    body.classList.add(className);

    // Force background repaint for static gradients
    body.style.background = '';
}

// funzioni per cambiare lo sfondo, sono da semplificare

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

function resetAllGames() // TODO PER OGNI GIOCO
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
    game4QuestionIndex = 0;
}

function backToHome()
{
    aboutButton.style.display = 'block';
    aboutDiv.style.display = 'none';
    home.style.display = 'block';
    homeButton.style.display = 'none';
    langButtons.style.display = 'block';

    // TODO: PER OGNI GIOCO

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

function getQuestion(index)
{
    switch(index)
    {
        case 0:
            return "Madonna Alta";
        case 1:
            return "Roberto Orfei";
        case 2:
            return "Statuto Albertino";
        case 3:
            return "Anidride Carbonica";
        case 4:
            return "William Wordsworth";
        case 5:
            return "Giacomo Leopardi";
        case 6:
            return "Leone XIV";
        case 7:
            return "Coefficiente Angolare";
        case 8:
            return "Campo Elettrico";
        case 9:
            return "Elon Musk";
        case 10:
            return "Leonardo da Vinci";
        case 11:
            return "Monte Bianco";
        case 12:
            return "Tomorrow Morning";
        case 13:
            return "Vulcano Etna";
        case 14:
            return "Galileo Galilei";
        case 15:
            return "Decadimento Radioattivo";
        case 16:
            return "Dante Alighieri";
        case 17:
            return "Giordano Bruno";
        case 18:
            return "Lago di Garda";
        case 19:
            return "Virtus Entella";
        case 20:
            return "Piazza San Marco";
        case 21:
            return "Cristoforo Colombo";
        case 22:
            return "Torre di Pisa";
        case 23:
            return "Sfera Ebbasta";
        case 24:
            return "Jacopo Lazzarini";
        case 25:
            return "Sick Luke";
        case 26:
            return "Trallalero Trallala";
        case 27:
            return "Cenotafio di Newton";
        case 28:
            return "Donald Trump";
        case 29:
            return "Unti e Bisunti";
        case 30:
            return "Ricchi e Poveri";
        case 31:
            return "Games Hub";
        case 32:
            return "Constatazione Amichevole"
        case 33:
            return "Pink Floyd";
        case 34:
            return "Ariana Grande";
        case 35:
            return "Reazione a Catena";
        case 36:
            return "Carlo Conti";
        case 37:
            return "Vittorio Sgarbi"
        case 38:
            return "Piramidi di Giza";
        case 39:
            return "Torre Eiffel";
        case 40:
            return "Dora L'esploratrice";
        default:
            return "null";
    }
}

function getQuestionTip(index)
{
    switch(index)
    {
        case 0:
            return "Dove ti trovi adesso?";
        case 1:
            return "Il migliore professore di Italiano del GB";
        case 2:
            return "Costituzione emanata da Carlo Alberto";
        case 3:
            return "In chimica corrisponde al diossido di carbonio";
        case 4:
            return "Celebre poeta romantico inglese autore della poesia 'Daffodils'";
        case 5:
            return "Scrittore famoso per il suo pessimismo cosmico";
        case 6:
            return "Papa successore di Francesco I";
        case 7:
            return "Corrisponde alla derivata di una funzione in un punto";
        case 8:
            return "In fisica è una grandezza vettoriale che rappresenta la forza elettrica esercitata su una carica di prova";
        case 9:
            return "Imprenditore e CEO di Tesla, SpaceX, Starlink e Twitter (ora X)";
        case 10:
            return "Genio del Rinascimento, autore della Gioconda";
        case 11:
            return "La montagna più alta d'Italia";
        case 12:
            return "Domattina in inglese";
        case 13:
            return "Il vulcano attivo più alto d'Europa";
        case 14:
            return "Padre della scienza moderna, inventore del telescopio astronomico";
        case 15:
            return "In chimica avviene quando un nucleo atomico instabile perde energia per emettere radiazioni";
        case 16:
            return "Poeta fiorentino, autore della Divina Commedia";
        case 17:
            return "Filosofo definito come 'martire del libero pensiero' al quale hanno dato fuoco";
        case 18:
            return "Il lago più grande d'Italia";
        case 19:
            return "Società calcistica italiana con sede a Chiavari, in provincia di Genova, attualmente in Serie C";
        case 20:
            return "Famosa piazza di Venezia con una basilica e i piccioni";
        case 21:
            return "Navigatore genovese che scoprì l'America";
        case 22:
            return "Torre pendente famosa in Toscana";
        case 23:
            return "Rapper italiano, non c'è bisogno di altre descrizioni";
        case 24:
            return "Il vero nome di Lazza";
        case 25:
            return "Uno dei più grandi producer italiani, noto per le sue collaborazioni con la DPG, all'anagrafe Luca Antonio Barker";
        case 26:
            return "Brainrot di uno squalo con le nike";
        case 27:
            return "Scultura archetettonica utopica realizzata da Etienne Louis Boullee, dedicata a Isaac Newton";
        case 28:
            return "Attuale presidente degli Stati Uniti d'America";
        case 29:
            return "Programma televisivo italiano di cucina casereccia condotto da Chef Rubio";
        case 30:
            return "Gruppo italiano pop nato a Genova nel 1967";
        case 31:
            return "Il nome di questo fantastico sito web";
        case 32:
            return "Documento standardizzato utilizzato per denunciare un sinistro stradale"
        case 33:
            return "Gruppo musicale rock britannico fondato a Londra nel 1965";
        case 34:
            return "Cantautrice e attrice statunitense salita al successo grazie alle serie Nickelodeon Victorious e Sam & Cat";
        case 35:
            return "Programma televisivo italiano di genere game show, in onda su Rai 1 dal 2 luglio 2007 nella fascia preserale";
        case 36:
            return "Conduttore televisivo e radiofonico famoso per i suoi programmi su Rai 1";
        case 37:
            return "Critico e storico d'arte, saggista, politico e personaggio televisivo italiano"
        case 38:
            return "Complesso di antichi monumenti della civiltà egizia";
        case 39:
            return "Torre metallica completata nel 1889 in occasione dell'Esposizione universale";
        case 40:
            return "Serie animata per bambini prodotta da Nickelodeon";
        default:
            return "null";
    }
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
            alert('Errore: valori non validi. Assicurati che siano numeri e che il minimo sia minore del massimo.');
            return;
        }
        game1Min = min;
        game1Max = max;
        document.getElementById('gameSetup').style.display = 'inline-block';
        document.getElementById('inputBox').min = min;
        document.getElementById('inputBox').max = max;
        document.getElementById('inputBox').value = null;
        document.getElementById('gameTitle').innerHTML = getLocalizedString("insertNumberFrom") + min.toString() + getLocalizedString("insertNumberTo") + max.toString();
    }
    else if (currentPage == 2) // game 2
    {
        var min = parseInt(document.getElementById('minValue2').value); // ottieni il valore minimo dal field
        var max = parseInt(document.getElementById('maxValue2').value); // ottieni il valore massimo dal field
        if (min >= max || isNaN(min) || isNaN(max))
        {
            alert('Errore: valori non validi. Assicurati che siano numeri e che il minimo sia minore del massimo.');
            return; // avviso del browser
        }
        game1Min = min;
        game1Max = max;
        document.getElementById('gameSetup2').style.display = 'inline-block';
        document.getElementById('inputBox2').min = min;
        document.getElementById('inputBox2').max = max;
        document.getElementById('inputBox2').value = null;
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
    document.getElementById('maxValue').value = game1Max.toString();
    resetAllGames();
}

function editValuesGame2()
{
    setDefaultBackground();
    document.getElementById('gameSetup2').style.display = 'none';
    document.getElementById('game2MinMaxValues').style.display = 'block';
    document.getElementById('minValue2').value = game1Min.toString();
    document.getElementById('maxValue2').value = game1Max.toString();
    resetAllGames();
}

function startGame1(event)
{
    event.preventDefault(); // Prevent the form from reloading the page
    counterGame1++;

    var input = parseInt(document.getElementById('inputBox').value); // Convertiamo la stringa restituita da inputBox in un numero

    if (isNaN(input)) // se generi un NaN
    {
        alert('Errore: inserisci un valore compreso tra ' + game1Min.toString() + ' e ' + game1Max.toString() + '.'); // avviso del browser
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
    document.getElementById('statsGame1').innerHTML = 'Statistiche: vittorie ' + winsGame1.toString() + ' | numeri generati ' + totalAttemptsGame1.toString() + ' | percentuale di vincita ' + winPercentageGame1.toFixed(2) + '%';
}

function startGame2(event)
{
    event.preventDefault(); // Prevent the form from reloading the page
    counterGame1++; // iniziamo aumentando il contatore
    var input = parseInt(document.getElementById('inputBox2').value); // Convertiamo la stringa restituita da inputBox in un numero
    document.getElementById('cancellami').style.display = 'block'; // varie scritte 

    if (isNaN(input)) // se generi un NaN
    {
        alert('Errore: inserisci un valore compreso tra ' + game1Min.toString() + ' e ' + game1Max.toString() + '.'); // avviso del browser
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
            document.getElementById('hintGame2').innerHTML = 'Il numero generato è minore di ' + input.toString() + '!';
        }
        else
        {
            document.getElementById('hintGame2').innerHTML = 'Il numero generato è maggiore di ' + input.toString() + '!';
        }
        document.getElementById('generatedNumber2').innerHTML = getLocalizedString("wrong");
    }

    totalAttemptsGame1++;
    winPercentageGame1 = (winsGame2 / totalAttemptsGame1) * 100;
    document.getElementById('statsGame2').innerHTML = 'Statistiche: vittorie ' + winsGame2.toString() + ' | totale tentativi ' + totalAttemptsGame1.toString() + ' | percentuale di vincita ' + winPercentageGame1.toFixed(2) + '%';

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
    document.getElementById('gameFrame1').style.display = 'block';
    document.getElementById('gameSetup').style.display = 'none';
    document.getElementById('game1MinMaxValues').style.display = 'block';
    currentPage = 1;
}

function loadGame2()
{
    loadGenericGame();
    document.getElementById('gameFrame2').style.display = 'block';
    document.getElementById('gameSetup2').style.display = 'none';
    document.getElementById('game2MinMaxValues').style.display = 'block';
    document.getElementById('cancellami').style.display = 'none';
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
    document.getElementById('gameFrame3').style.display = 'block';
    document.getElementById('gameProgress3').style.display = 'block';
    document.getElementById("game3Title").innerHTML = "15";
    currentPage = 3;

    let i = 0;

    console.log("memoryGameArray (clean): " + memoryGameArray);

    shuffleArray(memoryGameArray); // mescola l'array per avere le immagini in ordine casuale

    var flagPairsArray = memoryGameArray.slice(20);

    console.log("memoryGameArray (randomized): " + memoryGameArray);
    console.log("flagPairsArray: " + flagPairsArray);

    var flagPairsFullArray = flagPairsArray.flatMap(x => [x, x]);

    console.log("flagPairsFullArray (clean): " + flagPairsFullArray);

    shuffleArray(flagPairsFullArray);
    
    console.log("flagPairsFullArray (randomized): " + flagPairsFullArray);

    if(hasGame3BeenStarted == true) // se il gioco è già stato avviato, non ricreare i bottoni, ma comunque randomizza le images
    {
        console.log("Buttons already generated. Randomized images and assigned them to the buttons.");
        for(i in flagPairsFullArray)
        {
            var button = document.getElementById('Button' + i.toString());
            var image = game3Image[flagPairsFullArray[i]];
            var url = "url('" + image + "')"; 
            button.style.backgroundImage = url.toString();
        }
    }
    else
    {
        hasGame3BeenStarted = true; // ora il gioco è stato avviato
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
                    if(clickedButtons.length === 2) {
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
                                document.getElementById("game3Title").innerHTML = "HAI VINTO!";
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
                                btn1.style.backgroundImage = "url('https://raw.githubusercontent.com/kapowaz/square-flags/395a3335100d1e1f361daf8508d9d9c17e28962e/flags-original/xx.svg')";
                                btn2.style.backgroundImage = "url('https://raw.githubusercontent.com/kapowaz/square-flags/395a3335100d1e1f361daf8508d9d9c17e28962e/flags-original/xx.svg')";
                            }, 400);
                        }
                    }
                }
            })
            var frame = document.getElementById("gameFrame3");
            frame.appendChild(button)
        }
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
            document.getElementById("game3Title").innerHTML = "VIA!";
            for (let j = 0; j < 24; j++)
            {
                var button = document.getElementById('Button' + j.toString());
                if(button)
                {
                    button.style.backgroundImage = "url('https://raw.githubusercontent.com/kapowaz/square-flags/395a3335100d1e1f361daf8508d9d9c17e28962e/flags-original/xx.svg')";
                }
            }
            setProgressBarValue(gameCountdown, 3);
            countDownPlayGame3 = setInterval(function() 
            {
                gameCountdown--;
                document.getElementById("game3Title").innerHTML = gameCountdown.toString();

                if (gameCountdown <= 0) 
                {
                    setDefeatBackground();
                    document.getElementById("game3Title").innerHTML = "HAI PERSO!";
                    for (let j = 0; j < 24; j++)
                    {
                        var button = document.getElementById('Button' + j.toString());
                        var url = "url('" + game3Image[flagPairsFullArray[j]] + "')";
                        button.style.backgroundImage = url.toString();
                        button.style.backgroundSize = "cover"; // Copri l'intera area del bottone con l'immagine
                    }
                    clearInterval(countDownPlayGame3);
                }
            }, 1000);
        }
    }, 1000);
}

function loadGame4()
{
    loadGenericGame();
    document.getElementById("inputGame4").value = "";
    document.getElementById('gameFrame4').style.display = 'block';
    document.getElementById('gameProgress4').style.display = 'block';
    document.getElementById("nextQuestionButton").disabled = true;
    document.getElementById("game4MessageInfo").innerHTML = "20";
    currentPage = 4;
    clearInterval(countDownQuestionGame4);
    clearInterval(progressBarValue);
    var game4countdown = 20;
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

    document.getElementById("game4Title").innerHTML = parolaFinale;
    document.getElementById("game4Title2").innerHTML = parolaFinale2;
    document.getElementById("game4Tip").innerHTML = getQuestionTip(indice);

    countDownQuestionGame4 = setInterval(function()
    {
        game4countdown--;
        document.getElementById("game4MessageInfo").innerHTML = game4countdown.toString();
        if (game4countdown <= 0) 
        {
            if(game4QuestionIndex < game4Questions - 1)
            {
                document.getElementById("game4MessageInfo").innerHTML = "Tempo scaduto!";
            }
            game4LostTracker++;
            console.log(game4QuestionIndex)
            if(game4QuestionIndex == game4Questions - 1)
            {
                console.log("QUIZ COMPLETATO - tramite tempo scaduto");
                document.getElementById("game4MessageInfo").innerHTML = "HAI COMPLETATO IL QUIZ! " + "Punteggio: " + game4WinTracker.toString() + " / " + + game4Questions.toString();
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
            setWinBackground();
            document.getElementById("game4Title").innerHTML = parolaFull.join('').toUpperCase();
            document.getElementById("game4Title2").innerHTML = parolaFull2.join('').toUpperCase();

            game4WinTracker = game4QuestionIndex + 1 - game4LostTracker;
            document.getElementById("game4MessageInfo").innerHTML = getLocalizedString("exact") + " Punteggio: " + game4WinTracker.toString() + " / " + game4Questions.toString();

            if(game4QuestionIndex == game4Questions - 1)
            {
                console.log("QUIZ COMPLETATO - tramite risposta corretta");
                document.getElementById("game4MessageInfo").innerHTML = "HAI COMPLETATO IL QUIZ! " + "Punteggio: " + game4WinTracker.toString() + " / " + + game4Questions.toString();
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
    aboutDiv.style.display = 'block';
}
