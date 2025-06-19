////        GAMES HUB       ////

let translate;

const strings_it = {

    name : "Games Hub",
    homeWelcomeText : "Benvenuto su Games Hub!",
    homeTeachingText : "Scegli un gioco cliccando su uno dei seguenti bottoni",
    game1ButtonText : "Indovina il numero (hard)",
    game2ButtonText : "Indovina il numero (easy)",
    game3ButtonText : "Memory - bandiere",
    game4ButtonText : "Reazione a Catena",
    insertMinMaxValues : "Inserisci il valore minimo e quello massimo",
    insertMin : "Inserisci il minimo",
    insertMax : "Inserisci il massimo",
    setValues : "Imposta valori",
    insertNumber : "Inserisci un numero",
    insertNumberFrom : "Inserisci un numero da ",
    insertNumberTo : " a ",
    invalidValues: "Errore: valori non validi. Assicurati che siano numeri e che il minimo sia minore del massimo.",
    invalidRange: "Errore: inserisci un valore compreso tra ",
    invalidRangeAnd: " e ",
    generate : "Genera",
    try : "Tenta",
    edit : "Modifica",
    winFirstTry : "Hai vinto al primo tentativo!",
    winIn : "Hai vinto in ",
    attempt : "Tentativo ",
    attempts : " tentativi",
    wrong : "Sbagliato!",
    exact : "Esatto!",
    numberLessThan : "Il numero generato è minore di ",
    numberGreaterThan : "Il numero generato è maggiore di ",
    stats : "Statistiche - ",
    wins : "vittorie: ",
    generatedNumbers : "numeri generati: ",
    winPercentage : "percentuale di vincita: ",
    start : "VIA!",
    youLost : "HAI PERSO!",
    youWon : "HAI VINTO!",
    insertAnswer : "Inserisci la risposta",
    nextQuestion : "Prossima domanda",
    score : "Punteggio: ",
    quizCompleted : "HAI COMPLETATO IL QUIZ!",
    timesUp : "Tempo scaduto!",
    backToHome : "Torna alla Home",
    aboutDev : "Sviluppato da Alessandro Caseti",
    aboutRepo : "Repository GitHub",
    aboutTitle : "Informazioni su Games Hub",
    version : "Versione " + appVersion.toString() + " (" + getLocalizedDate("dmy") +  ")"
};

const strings_en = {

    name : "Games Hub",
    homeWelcomeText : "Welcome on Games Hub!",
    homeTeachingText : "Choose a game by clicking one of the buttons below",
    game1ButtonText : "Guess the number (hard)",
    game2ButtonText : "Guess the number (easy)",
    game3ButtonText : "Memory - country flags",
    game4ButtonText : "Italian simple quiz",
    insertMinMaxValues : "Insert minimum and maximum values",
    insertMin : "Insert minimum",
    insertMax : "Insert maximum",
    setValues : "Set values",
    insertNumber : "Insert a number",
    insertNumberFrom : "Insert a number from ",
    insertNumberTo : " to ",
    invalidValues: "Error: invalid values. Make sure they are numbers and that the minimum is less than the maximum.",
    invalidRange: "Error: enter a value between ",
    invalidRangeAnd: " and ",
    generate : "Generate",
    try : "Try",
    edit : "Edit",
    winFirstTry : "You won at first try!",
    winIn : "You won in ",
    attempt : "Attempt ",
    attempts : " attempts",
    wrong : "Wrong!",
    exact : "Exact!",
    numberLessThan : "The generated number is less than ",
    numberGreaterThan : "The generated number is greater than ",
    stats : "Stats - ",
    wins : "wins: ",
    generatedNumbers : "generated numbers: ",
    winPercentage : "win percentage: ",
    start : "START!",
    youLost : "YOU LOST!",
    youWon : "YOU WON!",
    insertAnswer : "Insert answer",
    nextQuestion : "Next question",
    score : "Score: ",
    quizCompleted : "YOU COMPLETED THE QUIZ!",
    timesUp : "Time's up!",
    backToHome : "Back to Home",
    aboutDev : "Developed by Alessandro Caseti",
    aboutRepo : "GitHub repository",
    aboutTitle : "About Games Hub",
    version : "Version " + appVersion.toString() + " (" + getLocalizedDate("mdy") +  ")"
};

function setLanguage(id)
{
    switch(id)
    {
        case "it":
            translate = strings_it;
            document.getElementById("italianButton").style.borderColor = "yellow";
            document.getElementById("englishButton").style.borderColor = "gray";
            break;
        case "en":
            translate = strings_en;
            document.getElementById("englishButton").style.borderColor = "yellow";
            document.getElementById("italianButton").style.borderColor = "gray";
            break;
        default:
            translate = strings_en;
            document.getElementById("englishButton").style.borderColor = "yellow";
            break;
    }

    title.innerHTML = translate.name;
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
    document.getElementById("nextQuestionButton").innerHTML = translate.nextQuestion;
    document.getElementById("inputGame4").placeholder = translate.insertAnswer;
    document.getElementById("aboutTitle").innerHTML = translate.name;
    document.getElementById("aboutVersion").innerHTML = translate.version;
    document.getElementById("aboutDev").innerHTML = translate.aboutDev;
    document.getElementById("aboutRepo").innerHTML = translate.aboutRepo;

    homeButton.innerHTML = translate.backToHome;
}

function getLocalizedString(string_id)
{
    return translate[string_id];
}

function getLocalizedDate(dateFormatID)
{
    const day = appReleaseDate.day;
    const month = appReleaseDate.month;
    const year = appReleaseDate.year;

    switch(dateFormatID)
    {
        case "dmy":
            return day + "/" + month + "/" + year;
        case "mdy":
            return month + "/" + day + "/" + year;
        case "ymd":
            return year + "/" + month + "/" + day;
        default:
            return day + "/" + month + "/" + year;
    }
}