//// GAMES HUB ////

function setMinMaxValues(event) // vale per entrambi i giochi (1 e 2)
{
    event.preventDefault();
    playMainClick();

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
        var min = parseInt(document.getElementById('minValue2').value);
        var max = parseInt(document.getElementById('maxValue2').value);
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

function editValuesGame1()
{
    setDefaultBackground();
    playMainClick();
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
    playMainClick();
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
    playMainClick();
    counterGame1++;
    var input = parseInt(document.getElementById('inputBox').value);

    if (isNaN(input))
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
        playWinSound();
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
    event.preventDefault();
    playMainClick();
    counterGame1++; // iniziamo aumentando il contatore
    var input = parseInt(document.getElementById('inputBox2').value); // Convertiamo la stringa restituita da inputBox in un numero
    document.getElementById('cancellami').style.display = 'block'; // varie scritte 

    if (isNaN(input))
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
        playWinSound();
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