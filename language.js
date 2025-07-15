//// GAMES HUB ////

let translate;

const strings_it = 
{
    name : "Games Hub",
    homeWelcomeText : "Benvenuto su Games Hub!",
    homeTeachingText : "Scegli un gioco cliccando su uno dei seguenti bottoni",
    game1ButtonText : "Indovina il numero (hard)",
    game2ButtonText : "Indovina il numero (easy)",
    game3ButtonText : "Memory",
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
    settings : "Impostazioni",
    settingsSavedBannerText : "Tutte le impostazioni, tranne le informazioni sugli utenti, sono salvate in locale tramite il browser",
    soundSettingsTitle : "Suono",
    soundtrackCardTitle : "Soundtrack",
    soundtrackCardDescription : "Attiva o disattiva la riproduzione delle tracce musicali in sottofondo",
    soundtrackVolCardTitle : "Volume soundtrack",
    soundtrackVolCardDescription : "Regola il volume delle tracce musicali in sottofondo",
    sfxCardTitle : "Effetti sonori",
    sfxCardDescription : "Attiva o disattiva la riproduzione degli effetti sonori al click o passaggio del mouse",
    sfxVolCardTitle : "Volume effetti",
    sfxVolCardDescription : "Regola il volume degli effetti sonori al click o passaggio del mouse",
    gamesSettingsTitle : "Giochi",
    memoryImagesCardTitle : "Immagini memory",
    memoryImagesCardDescription : "Scegli con quale set di immagini giocare",
    memoryImagesFlagsOption : "Bandiere",
    memoryImagesStreamersOption : "Streamers",
    memoryDifficultyCardTitle : "Difficoltà memory",
    memoryDifficultyCardDescription : "Seleziona il numero di immagini con cui giocare (18, 24, 32, 40)",
    memoryDifficultyOption1 : "Base - 18",
    memoryDifficultyOption2 : "Normale - 24",
    memoryDifficultyOption3 : "Medio - 32",
    memoryDifficultyOption4 : "Avanzato - 40",
    quizDifficultyCardTitle : "Difficoltà quiz",
    quizDifficultyCardDescription : "Seleziona la percentuale di lettere da mostrare nelle risposte dei quiz",
    quizDifficultyOption1 : "Base (75%)",
    quizDifficultyOption2 : "Normale (50%)",
    quizDifficultyOption3 : "Medio (25%)",
    quizDifficultyOption4 : "Avanzato (10%)",
    usersSettingsTitle : "Utenti",
    enableUsersCardTitle : "Esperienza utenti",
    enableUsersCardDescription : "Abilita l'esperienza utenti su tutti i giochi del sito",
    addUserCardTitle : "Crea utente",
    addUserCardDescription : "Aggiungi un nuovo utente",
    createNewUser : "Crea nuovo utente",
    selectAvatar : "Scegli il tuo avatar",
    usernamePlaceholder : "Inserisci username",
    cancel : "Annulla",
    save : "Salva",
    maxUserAlert : "Puoi aggiungere solo fino a 4 utenti!",
    invalidUsernameAlert : "Inserisci un username valido!",
    languageSettingsTitle : "Lingua",
    languageCardTitle : "Cambia lingua",
    languageCardDescription : "Seleziona la lingua del sito (italiano / inglese)",
    interfaceSettingsTitle : "Interfaccia",
    themeCardTitle : "Tema scuro",
    themeCardDescription : "Imposta il tema scuro a tutto il sito",
    aboutSettingsTitle: "Informazioni su",
    aboutDev : "Sviluppato da Alessandro Caseti",
    selectUser : "Seleziona l'utente che sta giocando",
    version : "Versione " + appVersion.toString() + " - " + getLocalizedDate("dmy")
};

const strings_en = 
{
    name : "Games Hub",
    homeWelcomeText : "Welcome on Games Hub!",
    homeTeachingText : "Choose a game by clicking one of the buttons below",
    game1ButtonText : "Guess the number (hard)",
    game2ButtonText : "Guess the number (easy)",
    game3ButtonText : "Memory",
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
    settings : "Settings",
    settingsSavedBannerText : "All settings, exept user information, are saved locally through the browser",
    soundSettingsTitle : "Sound",
    soundtrackCardTitle : "Soundtrack",
    soundtrackCardDescription : "Enable or disable background soundtracks",
    soundtrackVolCardTitle : "Soundtrack volume",
    soundtrackVolCardDescription : "Adjust the volume of the background soundtracks",
    sfxCardTitle : "Sound effects",
    sfxCardDescription : "Enable or disable sound effects played when clicking or on mouse hover",
    sfxVolCardTitle : "Effects volume",
    sfxVolCardDescription : "Adjust the volume of the sound effects",
    gamesSettingsTitle : "Games",
    memoryImagesCardTitle : "Memory images",
    memoryImagesCardDescription : "Chose the set of images to play with",
    memoryImagesFlagsOption : "Flags",
    memoryImagesStreamersOption : "Streamers",
    memoryDifficultyCardTitle : "Memory difficulty",
    memoryDifficultyCardDescription : "Choose the number of images to play with (18, 24, 32, 40)",
    memoryDifficultyOption1 : "Easy - 18",
    memoryDifficultyOption2 : "Default - 24",
    memoryDifficultyOption3 : "Medium - 32",
    memoryDifficultyOption4 : "Advanced - 40",
    quizDifficultyCardTitle : "Quiz difficulty",
    quizDifficultyCardDescription : "Select the percentage of letters to be shown on the quiz answers",
    quizDifficultyOption1 : "Easy - 75%",
    quizDifficultyOption2 : "Default - 50%",
    quizDifficultyOption3 : "Medium - 25%",
    quizDifficultyOption4 : "Advanced - 10%",
    usersSettingsTitle : "Users",
    enableUsersCardTitle : "Users experience",
    enableUsersCardDescription : "Enable the users experience across all the games of the website",
    addUserCardTitle : "Create user",
    addUserCardDescription : "Add a new user",
    createNewUser : "Create a new user",
    selectAvatar : "Select your avatar",
    usernamePlaceholder : "Insert username",
    cancel : "Cancel",
    save : "Save",
    maxUserAlert : "You can only add up to 4 users!",
    invalidUsernameAlert : "Enter a valid username!",
    languageSettingsTitle : "Language",
    languageCardTitle : "Change language",
    languageCardDescription : "Select the displayed language of the website (italian / english)",
    interfaceSettingsTitle : "Interface",
    themeCardTitle : "Dark theme",
    themeCardDescription : "Set a darker background across the whole website",
    aboutSettingsTitle: "About",
    aboutDev : "Developed by Alessandro Caseti",
    selectUser : "Select the user who is playing",
    version : "Version " + appVersion.toString() + " - " + getLocalizedDate("dmy")
};

function setLanguage(id, save)
{
    playMainClick();
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
    document.getElementById("aboutSettingsTitle").innerHTML = translate.aboutSettingsTitle;
    document.getElementById("aboutTitle").innerHTML = translate.name;
    document.getElementById("aboutVersion").innerHTML = translate.version;
    document.getElementById("aboutDev").innerHTML = translate.aboutDev;
    document.getElementById("settingsTitle").innerHTML = translate.settings;
    document.getElementById("settingsSavedBannerText").innerHTML = translate.settingsSavedBannerText;
    document.getElementById("soundSettingsTitle").innerHTML = translate.soundSettingsTitle;
    document.getElementById("soundtrackCardTitle").innerHTML = translate.soundtrackCardTitle;
    document.getElementById("soundtrackCardDescription").innerHTML = translate.soundtrackCardDescription;
    document.getElementById("soundtrackVolCardTitle").innerHTML = translate.soundtrackVolCardTitle;
    document.getElementById("soundtrackVolCardDescription").innerHTML = translate.soundtrackVolCardDescription;
    document.getElementById("sfxCardTitle").innerHTML = translate.sfxCardTitle;
    document.getElementById("sfxCardDescription").innerHTML = translate.sfxCardDescription;
    document.getElementById("sfxVolCardTitle").innerHTML = translate.sfxVolCardTitle;
    document.getElementById("sfxVolCardDescription").innerHTML = translate.sfxVolCardDescription;
    document.getElementById("gamesSettingsTitle").innerHTML = translate.gamesSettingsTitle;
    document.getElementById("memoryImagesCardTitle").innerHTML = translate.memoryImagesCardTitle;
    document.getElementById("memoryImagesCardDescription").innerHTML = translate.memoryImagesCardDescription;
    document.getElementById("memoryImagesFlagsOption").innerHTML = translate.memoryImagesFlagsOption;
    document.getElementById("memoryImagesStreamersOption").innerHTML = translate.memoryImagesStreamersOption;
    document.getElementById("memoryDifficultyCardTitle").innerHTML = translate.memoryDifficultyCardTitle;
    document.getElementById("memoryDifficultyCardDescription").innerHTML = translate.memoryDifficultyCardDescription;
    document.getElementById("memoryDifficultyOption1").innerHTML = translate.memoryDifficultyOption1;
    document.getElementById("memoryDifficultyOption2").innerHTML = translate.memoryDifficultyOption2;
    document.getElementById("memoryDifficultyOption3").innerHTML = translate.memoryDifficultyOption3;
    document.getElementById("memoryDifficultyOption4").innerHTML = translate.memoryDifficultyOption4;
    document.getElementById("quizDifficultyCardTitle").innerHTML = translate.quizDifficultyCardTitle;
    document.getElementById("quizDifficultyCardDescription").innerHTML = translate.quizDifficultyCardDescription;
    document.getElementById("quizDifficultyOption1").innerHTML = translate.quizDifficultyOption1;
    document.getElementById("quizDifficultyOption2").innerHTML = translate.quizDifficultyOption2;
    document.getElementById("quizDifficultyOption3").innerHTML = translate.quizDifficultyOption3;
    document.getElementById("quizDifficultyOption4").innerHTML = translate.quizDifficultyOption4;
    document.getElementById("usersSettingsTitle").innerHTML = translate.usersSettingsTitle;
    document.getElementById("enableUsersCardTitle").innerHTML = translate.enableUsersCardTitle;
    document.getElementById("enableUsersCardDescription").innerHTML = translate.enableUsersCardDescription;
    document.getElementById("addUserCardTitle").innerHTML = translate.addUserCardTitle;
    document.getElementById("addUserCardDescription").innerHTML = translate.addUserCardDescription;
    document.getElementById("createNewUser").innerHTML = translate.addUserCardTitle;
    document.getElementById("selectAvatar").innerHTML = translate.selectAvatar;
    document.getElementById("newUserName").placeholder = translate.usernamePlaceholder;
    document.getElementById("cancelUserDialogButton").innerHTML = translate.cancel;
    document.getElementById("saveUserDialogButton").innerHTML = translate.save;
    document.getElementById("languageSettingsTitle").innerHTML = translate.languageSettingsTitle;
    document.getElementById("languageCardTitle").innerHTML = translate.languageCardTitle;
    document.getElementById("languageCardDescription").innerHTML = translate.languageCardDescription;
    document.getElementById("interfaceSettingsTitle").innerHTML = translate.interfaceSettingsTitle;
    document.getElementById("themeCardTitle").innerHTML = translate.themeCardTitle;
    document.getElementById("themeCardDescription").innerHTML = translate.themeCardDescription;
    document.getElementById("selectUser").innerHTML = translate.selectUser;

    homeButton.innerHTML = translate.backToHome;
    
    document.getElementById("italianButton").classList.toggle('selected', id === 'it');
    document.getElementById("englishButton").classList.toggle('selected', id === 'en');

    if(save) { saveSettings(); }
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