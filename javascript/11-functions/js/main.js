// function maFct() {
//     console.log("Bonjour");
// }
// maFct();


// function sayHello(nom) {
//     console.log("Bonjour, " + nom);
// }

// var prenom = prompt("Quel est ton nom ?");
// sayHello(prenom);



// function log(msg, type) {
//     if (type == "e") {
//         console.error(msg);
//     } else if (type == "w") {
//         console.warn(msg);
//     } else {
//         console.log(msg);
//     }
// }

// log("Bonjour", "e");
// log("Blablabla");
// log("Blablabla", "w");

// // calculer la surface d'un rectangle
// // 2 prompts
// // 2 arguments dans la fonction

// function calculerSurface(long,larg) {
//     log(long*larg);
// }

// var longueur = parseInt(prompt("Longueur du rectangle"));
// var largeur = parseInt(prompt("Largeur du rectangle"));

// calculerSurface(longueur, largeur);


//portée
// var prenom = "Anissa";
// // var autreprenom;

// function monPrenom() {
//     prenom = "Gilles";
//     var autreprenom = "Stéphane";

//     console.log(prenom); // Gilles
//     console.log(autreprenom); // Stéphane
//     monNom(autreprenom);
// }

// function monNom(prenomRecupere) {
//     console.log(prenomRecupere +" "+ prenom); // Stéphane Gilles
// }

// monPrenom();
// console.log(prenom);
// console.log(autreprenom);

// fonction qui calcule la moyenne de 3 nombres
// afficher le plus petit des 3

// function calculMoyenne() {
//     var nbr1 = parseInt(prompt("Entrez un nombre"));
//     var minimum = nbr1;
//     var nbr2 = parseInt(prompt("Entrez un deuxieme nombre"));
//     if (nbr2 < minimum) {
//         minimum = nbr2;
//     }
//     var nbr3 = parseInt(prompt("Entrez un dernier nombre"));
//     if (nbr3 < minimum) {
//         minimum = nbr3;
//     }
//     //var minimum = Math.min(nbr1, nbr2, nbr3);
//     var moyenne = (nbr1+nbr2+nbr3)/3;
//     console.log("Le plus petit nombre est "+minimum+" et la moyenne des 3 est "+moyenne);
//     return "Le plus petit nombre est "+minimum+" et la moyenne des 3 est "+moyenne;
// }
// calculMoyenne();
// console.log(calculMoyenne());

// console.log("Le plus petit nombre est x et la moyenne des 3 est y");

// function calculer(nbr1, nbr2) {
//     var resultat = nbr1 + nbr2;
//     // console.log(resultat);
//     return resultat;
// }


// var recupererResultat = calculer(2,10);
// console.log(calculer(2,10));


// function getNums() {
//     var n1 = parseInt(prompt("Entrez un nombre"));
//     var n2 = parseInt(prompt("Entrez un nombre"));
//     var op = parseInt(prompt("Entrez un opérateur"));

//     if (isNaN(n1) || isNaN(n2)) {
//         getNums();
//     } else {
//         return calculate(n1, n2, op);
//     }
// }

// function calculate(nbr1, nbr2, operateur) {
//     var resultat;
//     switch(operateur) {
//         case "*":
//             resultat = nbr1 * nbr2;
//             break;
//         case "/":
//             resultat = nbr1 / nbr2;
//             break;
//         case "+":
//             resultat = nbr1 + nbr2;
//             break;
//         case "-":
//             resultat = nbr1 - nbr2;
//             break;
//         default:
//             resultat = "erreur";
//     }

//     return resultat;
// }


// var resultatFinal = getNums();



// function maFct() {
//     var s = "Bonjour!";
//     return s;
// }
// console.log(maFct());


// var maFct2 = function(nom) {
//     var s = "Coucou "+nom;
//     return s;
// };
// console.log(maFct2("Anissa"));
// maFct2 = 123;
// console.log(maFct2);

// var monObj = {
//     "name" : "Anissa",
//     "city" : "Mons",
//     "maFct3" : function() {
//         var s = "Salut";
//         return s;
//     }
// }
// console.log(monObj.maFct3());


// (function(msg){
//     console.log(msg);
// })("Ceci est un message");

// function nom(msg) {
//     console.log(msg)
// }
// nom("Message");

// // créer une fonction qui calcule la factorielle d'un nombre

// function factorielle(n) {
//     if (n == 0) {
//         return 1;
//     } else if ( n < 0) {
//         return false; 
//     } else {
//         return n*factorielle(n-1);
//     }
// }
// // alert(factorielle(-5));

// function fact(n) {
//     return n > 1 ? n*fact(n-1) : 1;
// }
// var nombre = parseInt(prompt("entrez un chiffre"));
// alert(fact(nombre));

// transformer un nombre en lettres
// ex = 123 : cent vingt trois (max 999)

function convertToText(n) {

    var nombre = parseInt(n);
    var arrayUnites = ["", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix", "onze","douze", "treize", "quatorze", "quinze", "seize", "dix-sept", "dix-huit", "dix-neuf"];
    var arrayDizaines = ["", "dix", "vingt", "trente", "quarante", "cinquante", "soixante", "septante", "quatre-vingt", "nonante"];

    //325
    var nbrCentaines = Math.floor(nombre/100); // 325/100 -> 3.25 -> 3
    var nbrDizaines = Math.floor((nombre-nbrCentaines*100)/10); //325-300 -> 25/10 -> 2.5 -> 2
    var nbrUnites = (nombre-(nbrCentaines*100))%10; //325-320 ->5

    var textCentaine = "cent";
    var uniteCentaine = arrayUnites[nbrCentaines]+ " ";
    
    if (nbrCentaines == 1) { // si je dis 115, ne pas afficher le "un" devant "cent"
        uniteCentaine = "";
    } else if (nbrCentaines == 0) { // si je dis 81, ne pas afficher le mot "cent"
        textCentaine = "";
    }
    var plurielCentaines = "";
    if (nbrCentaines !=0 && nbrDizaines == 0 && nbrUnites == 0) {
        plurielCentaines = "s";
    }
    var dizaine = arrayDizaines[nbrDizaines];
    var pluriel = "";
    if (nbrDizaines == 1) { // 10 - 19
        // si j'ai un nombre dont la dizaine est 1 (donc entre 10 et 19), j'additionne dizaine et unites (1*10 + 5) -> 15
        dizaine = arrayUnites[10 + nbrUnites];
        nbrUnites = 0;
    } else if (nbrDizaines == 8 && nbrUnites == 0) { //quatre-vingts, mais quatre-vingt-cinq
        pluriel = "s";
    }

    var et = "-"; // cinquante-cinq
    if (nbrUnites == 1 && nbrDizaines != 8 && nbrDizaines != 0 ) { // vingt-et-un
        et = "-et-";
    } else if (nbrUnites == 0 || nbrDizaines == 0) { // vingt et non pas vingt-
        et = "";
    }

    console.log(uniteCentaine+textCentaine+plurielCentaines+" "+dizaine+pluriel+et+arrayUnites[nbrUnites]);
}

convertToText(0);

