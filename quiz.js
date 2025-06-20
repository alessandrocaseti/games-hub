//// GAMES HUB ////

const game4Questions = 41; // number of questions

var questionID = [];

for (var i = 0; i < game4Questions; i++) 
{
    questionID.push(i);
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
