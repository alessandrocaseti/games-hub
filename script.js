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

var body = document; // sfondo -- non si puo assegnare qui??????

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
    document.getElementById('homeButton').style.visibility = 'hidden'; // nascondi il pulsante home

    // TODO: PER OGNI GIOCO

    document.getElementById('gameFrame1').style.display = 'none';
    document.getElementById('gameFrame2').style.display = 'none';
    document.getElementById('gameFrame3').style.display = 'none';
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

function generateAnimalIndex()
{
    return Math.floor(Math.random() * 5) // genera un numero da 0 a 4
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
    document.getElementById('homeButton').style.visibility = 'visible';
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
    document.getElementById('homeButton').style.visibility = 'visible';
    document.getElementById('nutellaButton').style.display = 'none';
    document.getElementById('gameFrame2').style.display = 'block';
    document.getElementById('gameSetup2').style.display = 'none';
    document.getElementById('game2MinMaxValues').style.display = 'block';
    document.getElementById('cancellami').style.display = 'none';
    currentPage = 2;
}

function loadGame3() // TODO
{
    document.getElementById('testi-home').style.display = 'none';
    document.getElementById('homeButton').style.visibility = 'visible';
    document.getElementById('nutellaButton').style.display = 'none';
    document.getElementById('gameFrame3').style.display = 'block';
    currentPage = 3;
    var indice = generateAnimalIndex();
    var animale = getAnimal(indice);
    document.getElementById("game3Title").innerHTML = animale.toString();
    document.getElementById("Button2").style.display = "none";
}

function loadGame4() // TODO
{
    document.getElementById('testi-home').style.display = 'none';
    document.getElementById('homeButton').style.visibility = 'visible';
    document.getElementById('nutellaButton').style.display = 'none';
    currentPage = 4;
}

//easter egg
function nutella()
{
    const nutellaImage = document.getElementById('nutellaImage');
    if (nutellaImage.style.visibility === 'hidden')
    {
        nutellaImage.style.visibility = 'visible';
        document.getElementById('testi-home').style.display = 'none';
    }
    else
    {
        nutellaImage.style.visibility = 'hidden';
        document.getElementById('testi-home').style.display = 'block';
    }
}
