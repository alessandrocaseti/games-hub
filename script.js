// definiamo ste variabili

var currentPage = 0; // 0 = home, 1 = game1, 2 = game2, 3 = game3, 4 = game4
var counterGame1 = 0; // contatore per il gioco 1 e 2
var game1Min = 0; // valore minimo del gioco 1 e 2
var game1Max = 0; // valore massimo del gioco 1 e 2

var winsGame1 = 0; // contatore per le vittorie del gioco 1
var winsGame2 = 0; // contatore per le vittorie del gioco 2

var totalAttemptsGame1 = 0; // contatore per i tentativi totali del gioco 1 e 2
var winPercentageGame1 = 0; // percentuale di vittoria del gioco 1 e 2

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
    
]
var hasGame3BeenStarted = false; // serve per il gioco 3

var game4Index = 0;

var body; // sfondo -- non si puo assegnare qui??????

var parole = new Array("Madonna Alta", "Roberto Orfei", "Statuto Albertino", "Anidride Carbonica", "William Wordsworth", "Antistaminico", "Eurospin", "Coefficiente Angolare", "Campo Elettrico", "Javascript");

window.addEventListener('DOMContentLoaded', function()
{
    body = document.getElementById('main');
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

    counterGame1 = 0;

    document.getElementById('statsGame1').innerHTML = '';
    document.getElementById('statsGame2').innerHTML = '';
    document.getElementById('hintGame2').innerHTML = '';

    totalAttemptsGame1 = 0; // resettiamo il contatore dei tentativi totali
    winPercentageGame1 = 0; // resettiamo la percentuale di vittoria
    winsGame1 = 0; // resettiamo il contatore delle vittorie x il gioco 1
    winsGame2 = 0; // resettiamo il contatore delle vittorie x il gioco 2
    hasGame2BeenStarted = false; // Reset gioco 2
}

function backToHome() // torna alla home
{
    document.getElementById('testi-home').style.display = 'block'; // mostra la home
    document.getElementById('homeButton').style.display = 'none'; // nascondi il pulsante home

    // TODO: PER OGNI GIOCO

    document.getElementById('gameFrame1').style.display = 'none';
    document.getElementById('gameFrame2').style.display = 'none';
    document.getElementById('gameFrame3').style.display = 'none';
    document.getElementById('gameFrame4').style.display = 'none';
    document.getElementById('nutellaButton').style.display = 'block';

    setDefaultBackground();
    resetAllGames();
}

function getAnimal(index)
{
    switch(index)
    {
        case 0:
            return "Trallalero Trallala";
        case 1:
            return "Brr Brr Patapim";
        case 2:
            return "Ecco Cavallo Virtuoso";
        case 3:
            return "Trulimero Trulicina";
        case 4:
            return "Lirili Larila";
        default:
            return "null";
    }
}

function generateIncrementalIndex(oldIndex)
{
    // return Math.floor(Math.random() * 30) // genera un numero da 0 a 29
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
            return "Antistaminico";
        case 6:
            return "Eurospin";
        case 7:
            return "Coefficiente Angolare";
        case 8:
            return "Campo Elettrico";
        case 9:
            return "Javascript";
        case 10:
            return "Leonardo da Vinci";
        case 11:
            return "Monte Bianco";
        case 12:
            return "Pitagora";
        case 13:
            return "Vulcano Etna";
        case 14:
            return "Galileo Galilei";
        case 15:
            return "Teorema di Talete";
        case 16:
            return "Dante Alighieri";
        case 17:
            return "Mole Antonelliana";
        case 18:
            return "Lago di Garda";
        case 19:
            return "Guglielmo Marconi";
        case 20:
            return "Piazza San Marco";
        case 21:
            return "Cristoforo Colombo";
        case 22:
            return "Torre di Pisa";
        case 23:
            return "Giotto";
        case 24:
            return "Vesuvio";
        case 25:
            return "Michelangelo";
        case 26:
            return "Colosseo";
        case 27:
            return "Raffaello Sanzio";
        case 28:
            return "Trinità dei Monti";
        case 29:
            return "Palazzo Vecchio";
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
            return "Il miglior prof d'italiano";
        case 2:
            return "Costituzione emanata da Carlo Alberto";
        case 3:
            return "In chimica corrisponde al diossido di carbonio";
        case 4:
            return "Celebre poeta romantico inglese autore della poesia 'Daffodils'";
        case 5:
            return "Farmaco usato per combattere le allergie";
        case 6:
            return "Catena di supermercati discount italiana";
        case 7:
            return "Corrisponde alla derivata di una funzione in un punto";
        case 8:
            return "In fisica è una grandezza vettoriale che rappresenta la forza elettrica esercitata su una carica di prova";
        case 9:
            return "Con cosa si scrivono le pagine web?";
        case 10:
            return "Genio del Rinascimento, autore della Gioconda";
        case 11:
            return "La montagna più alta d'Italia";
        case 12:
            return "Filosofo e matematico greco famoso per un teorema";
        case 13:
            return "Il vulcano attivo più alto d'Europa";
        case 14:
            return "Padre della scienza moderna, inventore del telescopio astronomico";
        case 15:
            return "Teorema geometrico che riguarda i triangoli simili";
        case 16:
            return "Poeta fiorentino, autore della Divina Commedia";
        case 17:
            return "Simbolo di Torino, edificio molto alto";
        case 18:
            return "Il lago più grande d'Italia";
        case 19:
            return "Inventore della radio, premio Nobel per la fisica";
        case 20:
            return "Famosa piazza di Venezia con una basilica e i piccioni";
        case 21:
            return "Navigatore genovese che scoprì l'America";
        case 22:
            return "Torre pendente famosa in Toscana";
        case 23:
            return "Pittore e architetto italiano, noto per la Cappella degli Scrovegni";
        case 24:
            return "Vulcano vicino a Napoli, famoso per l'eruzione del 79 d.C.";
        case 25:
            return "Scultore e pittore del Rinascimento, autore del David";
        case 26:
            return "Anfiteatro romano simbolo di Roma";
        case 27:
            return "Pittore e architetto urbinate, autore della Scuola di Atene";
        case 28:
            return "Celebre scalinata romana che porta a una chiesa";
        case 29:
            return "Storico palazzo e municipio di Firenze";
        default:
            return "null";
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
        document.getElementById('gameTitle').innerHTML = 'Inserisci un numero da ' + min.toString() + ' a ' + max.toString();
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
        document.getElementById('gameTitle2').innerHTML = 'Inserisci un numero da ' + min.toString() + ' a ' + max.toString();
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

// cominciamo a giocare (al gioco 1)

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
    document.getElementById('test').innerHTML = 'Tentativo ' + counter.toString();

    // VITTORIA
    if (input == randomNum)
    {
        setWinBackground();
        document.getElementById('generatedNumber1').innerHTML = 'Esatto!';

        if (counterGame1 > 1) // plurale o singolare
        {
            document.getElementById('test').innerHTML = 'Hai vinto in ' + counter.toString() + ' tentativi!';
        }
        else
        {
            document.getElementById('test').innerHTML = 'Hai vinto al primo tentativo!';
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

// cominciamo a giocare (al gioco 2)

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
        document.getElementById('generatedNumber2').innerHTML = 'Esatto!';

        if (counterGame1 > 1) // plurale o singolare
        {
            document.getElementById('test2').innerHTML = 'Hai vinto in ' + counterGame1.toString() + ' tentativi!';
        }
        else
        {
            document.getElementById('test2').innerHTML = 'Hai vinto al primo tentativo!';
        }
        document.getElementById('inputBox2').value = null; // Reset the input box
        counterGame1 = 0; // Resettiamo il contatore
        winsGame2++; // Aumentiamo il contatore delle vittorie
        document.getElementById('restartButton').style.display = 'block'; // mostriamo il restart button
        hasGame2BeenStarted = false; // Reset game 2
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
        document.getElementById('generatedNumber2').innerHTML = 'Errato!';
    }

    totalAttemptsGame1++; // Aumentiamo il contatore dei tentativi totali
    winPercentageGame1 = (winsGame2 / totalAttemptsGame1) * 100; // Calculate the win percentage
    document.getElementById('statsGame2').innerHTML = 'Statistiche: vittorie ' + winsGame2.toString() + ' | totale tentativi ' + totalAttemptsGame1.toString() + ' | percentuale di vincita ' + winPercentageGame1.toFixed(2) + '%';

}

function loadGame1()
{
    document.getElementById('testi-home').style.display = 'none';
    document.getElementById('homeButton').style.display = 'block';
    document.getElementById('gameFrame1').style.display = 'block';
    document.getElementById('nutellaButton').style.display = 'none';
    document.getElementById('gameSetup').style.display = 'none';
    document.getElementById('game1MinMaxValues').style.display = 'block';
    currentPage = 1;
}

function loadGame2()
{
    setDefaultBackground();
    document.getElementById('testi-home').style.display = 'none';
    document.getElementById('homeButton').style.display = 'block';
    document.getElementById('nutellaButton').style.display = 'none';
    document.getElementById('gameFrame2').style.display = 'block';
    document.getElementById('gameSetup2').style.display = 'none';
    document.getElementById('game2MinMaxValues').style.display = 'block';
    document.getElementById('cancellami').style.display = 'none';
    currentPage = 2;
}

function setProgressBarValue(value)
{
    const progressBar = document.getElementById('progressBar');
    progressBar.value = 100;
    if (progressBar) {
        var a = setInterval(function() 
            {
                value = value -1;
                progressBar.value = value;
                if (value < 0) 
                {
                    clearInterval(a);
                }
            }, 1000);
    }
}

function loadGame3() // TODO
{
    document.getElementById('testi-home').style.display = 'none';
    document.getElementById('homeButton').style.display = 'block';
    document.getElementById('nutellaButton').style.display = 'none';
    document.getElementById('gameFrame3').style.display = 'block';
    document.getElementById("game3Title").innerHTML = "15";
    currentPage = 3;

    let i = 0;
    var vettore = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20);
    if(hasGame3BeenStarted == true) // se il gioco è già stato avviato, non ricreare i bottoni
    {
        return;
    }
    else
    {
        hasGame3BeenStarted = true; // ora il gioco è stato avviato
        for(i in vettore)
        {
            const button = document.createElement('button');
            var image = game3Image[i];

            button.innerText = "";
            button.className = 'defaultButton';
            button.id = 'Button' + i.toString();
            button.style.width= "180px";
            button.style.margin = "30px";
            button.style.height = "180px";

            var url = "url('" + image + "')"; 

            button.style.backgroundImage = url.toString();
            button.style.backgroundSize = "cover"; // Copri l'intera area del bottone con l'immagine
            //  qui faccimo il gioco
            button.addEventListener('click', () => {
                var index = parseInt(button.id.replace('Button', '')); // ottieni l'indice del bottone
                var newUrl = "url('" + game3Image[index] + "')"; 
                button.style.backgroundImage = newUrl.toString();
            })
            var frame = document.getElementById("gameFrame3");
            frame.appendChild(button)
        }
    }
    var startCountdown = 15;
    setProgressBarValue(startCountdown); // Imposta il valore della barra di avanzamento a 15 secondi
    var gameCountdown = 60;
    setProgressBarValue(gameCountdown); // Imposta il valore della barra di avanzamento a 15 secondi

    var x = setInterval(function() 
    {
        startCountdown--;
        document.getElementById("game3Title").innerHTML = startCountdown.toString();
        // Get today's date and time
        // var now = new Date().getTime();

        // Find the distance between now and the count down date
        // var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        // var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        // var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        // var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        // var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        // document.getElementById("demo").innerHTML = days + "d " + hours + "h "
        // + minutes + "m " + seconds + "s ";

        // If the count down is finished, write some text
        if (startCountdown < 0) 
        {
            clearInterval(x);
            document.getElementById("game3Title").innerHTML = "LETZOSKY LETSGO";
            for (let j = 0; j < 21; j++) // rimuovi i bottoni
            {
                var button = document.getElementById('Button' + j.toString());
                if(button) // punto interrogativo
                {
                    button.style.backgroundImage = "url('https://raw.githubusercontent.com/kapowaz/square-flags/395a3335100d1e1f361daf8508d9d9c17e28962e/flags-original/xx.svg')";
                }
            }
            var y = setInterval(function() 
            {
                gameCountdown--;
                document.getElementById("game3Title").innerHTML = gameCountdown.toString();

                if (gameCountdown < 0) 
                {
                    clearInterval(y);
                    setDefeatBackground();
                    document.getElementById("game3Title").innerHTML = "HAI PERSO!";
                    for (let j = 0; j < 21; j++) // rimuovi i bottoni
                    {
                        var button = document.getElementById('Button' + j.toString());
                        if(button) // punto interrogativo
                        {
                            button.style.backgroundImage = "url('https://raw.githubusercontent.com/kapowaz/square-flags/395a3335100d1e1f361daf8508d9d9c17e28962e/flags-original/xx.svg')";
                        }
                    }
                }
            }, 1000);
        }
    }, 1000);
}

function loadGame4() // TODO
{
    setDefaultBackground();
    document.getElementById('testi-home').style.display = 'none';
    document.getElementById("inputGame4").value = "";
    document.getElementById('homeButton').style.display = 'block';
    document.getElementById('nutellaButton').style.display = 'none';
    document.getElementById('gameFrame4').style.display = 'block';
    currentPage = 4;
    var indice = generateIncrementalIndex(game4Index);
    var lunghezza = getQuestion(indice).length;
    var vettoreCaratteri = Array.from(getQuestion(indice)); // crea un array di caratteri dalla parola
    var vettoreCaratteri2 = Array.from(getQuestion(indice)); // crea un array di caratteri dalla parola
    parolaFull = Array.from(getQuestion(indice));
    parolaFull2 = Array.from(getQuestion(indice));
    var secondIndex = 0; // index da dove ripartire per scrivere il secondo vettore
    var needToClear = false; // serve per il ciclo for
    for (var i = 0; i < lunghezza; i++)
    {
        var randomNum = Math.floor(Math.random() * 2);
        if(needToClear == true) // se abbiamo già trovato uno spazio -> non scrivere più niente
        {
            vettoreCaratteri[i] = '';
            parolaFull[i] = ''; // cancella anche la parola completa
        }
        if (needToClear == false) // nel frattempo cancella il secondo vettore
        {
            vettoreCaratteri2[i] = '';
            parolaFull2[i] = ''; // cancella anche la parola completa
        }
        if(randomNum == 0 && vettoreCaratteri[i] != ' ' && vettoreCaratteri[i] != '') // 50% di probabilità di mostrare il carattere
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
    for (var j = secondIndex; j < lunghezza; j++)
    {
        var randomNum = Math.floor(Math.random() * 2);
        if(randomNum == 0 && vettoreCaratteri2[j] != ' ' && vettoreCaratteri2[j] != '') // 50% di probabilità di mostrare il carattere
        {
            vettoreCaratteri2[j] = '_';
        }
        vettoreCaratteri2[j] = vettoreCaratteri2[j].toUpperCase(); // mettiamo in maiuscolo
    }

    game4Index = indice;

    var parolaFinale = vettoreCaratteri.join(''); // unisce gli elementi dell'array in una stringa
    var parolaFinale2 = vettoreCaratteri2.join(''); // unisce gli elementi dell'array in una stringa

    document.getElementById("game4Title").innerHTML = parolaFinale;    
    document.getElementById("game4Title2").innerHTML = parolaFinale2;
    document.getElementById("game4Tip").innerHTML = getQuestionTip(indice);

}

function checkAnswer(event)
{
    
    event.preventDefault(); // Prevent the form from reloading the page
   
    const inputBoxValue = document.getElementById("inputGame4").value.toUpperCase();
    console.log("e partita la funzione");
    if(inputBoxValue == getQuestion(game4Index).toUpperCase())
    {
        console.log("Funziona");
        setWinBackground();
        document.getElementById("game4Title").innerHTML = parolaFull.join('').toUpperCase();
        document.getElementById("game4Title2").innerHTML = parolaFull2.join('').toUpperCase();
    }
    else
    {
        setDefeatBackground();
    }

}

//easter egg
function nutella()
{
    const nutellaImage = document.getElementById('nutellaDiv');
    if (nutellaImage.style.display === 'none')
    {
        nutellaImage.style.display = 'block';
        document.getElementById('testi-home').style.display = 'none';
    }
    else
    {
        nutellaImage.style.display = 'none';
        document.getElementById('testi-home').style.display = 'block';
    }
}
