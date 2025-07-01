//// GAMES HUB ////

const game4Questions = 41; // number of questions

var quizDifficulty = 1.5; // by default

var questionID = [];

for (var i = 0; i < game4Questions; i++) 
{
    questionID.push(i);
}

function setQuizDifficulty()
{
    var difficulty = document.getElementById("quizDifficulty").value;

    switch (difficulty) 
    {
        case "3":
            quizDifficulty = 3;
            break;
        case "2":
            quizDifficulty = 2;
            break;
        case "1.5":
            quizDifficulty = 1.5;
            break;
        case "1.1":
            quizDifficulty = 1.1;
            break;
        default:
            quizDifficulty = 2;
    }

    console.log("Quiz difficulty set to: " + quizDifficulty);
}

function getQuestion(index)
{
    switch(index)
    {
        case 0:
            return "Orient Express";
        case 1:
            return "Renato Curi";
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
            return "Famoso treno che collega Parigi a Istanbul, noto per il suo lusso e le sue storie misteriose";
        case 1:
            return "Stadio di Perugia dedicato a un calciatore tragicamente scomparso";
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
