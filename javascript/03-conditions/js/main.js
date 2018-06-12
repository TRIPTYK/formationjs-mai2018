// if (condition) { //si la condition est vraie
//     //fait ceci
// }

// if ( 1 > 2 ) {
//     alert('youpie');
// } else { //sinon, dans tous les autres cas
//     alert("n'importe quoi...");
// }

// var age = prompt("Quel est ton âge ?");

// if (age >= 18) {
//     alert("tu es majeur");
// } else {
//     alert("tu es mineur");
// }

// if (age == 18) { //compare valeur de la variable
//     alert("bienvenue chez les grands");
// }

// if (age === 18) { // === compare la valeur ET le type
//     alert("bienvenue chez les grands - bis");
// }

// if (age === "18") { // === compare la valeur ET le type
//     alert("bienvenue chez les grands - ter");
// }

// Si je tape 18 dans le prompt
// if (age >= 18) {
//     alert("Tu es majeur"); //resultat affiché
// } else if (age == 18) {
//     alert("Bienvenue"); //restultat pas affiché
// } else {
//     alert("Tu es mineur"); //resultat pas affiché
// }

//si je tape 18 dans le prompt
// if (age >= 18) {
//     alert("Tu es majeur"); //affiche
//     if (age == 18) {
//         alert("Bienvenue chez les grands"); //affiche
//     }
// } else {
//     alert("Tu es mineur"); //pas affiché
// }

//Exo : prompt "combien de pommes avez-vous récoltées ?";
// si plus de 35 : bon boulot, si moins : retourne bosser

// var pommes = prompt("Combien de pommes ?");
// var couleur = prompt("Quelle était la couleur des pommes (rouge, vert)");
// // if (pommes > 35) {
// //     alert("bravo")
// //     if (pommes > 100) {
// //         alert("mais, j'y crois pas")
// //     }
// // } else {
// //     alert("retourne bosser")
// // }

// if (pommes > 35) {
//     alert(pommes +", c'est pas mal !")
//     if (couleur == "rouge") {
//         alert("super, c'est celles que je préfère")
//     } else {
//         alert("mais j'aime pas les vertes")
//     }
// } else {
//     alert("retourne bosser")
// }

// if (pommes > 35 && couleur == "rouge") {
//     alert("bravo")
// } else {
//     alert("pas bien");
// }

// var nombre = Math.round(Math.random() * 100); // génère un nombre entre 0 et 1, si je fais *100
// alert(nombre);

//Math.round()   --> arrondi, ex: 10.5 -> 11, 10.1 -> 10, 10.9 -> 11
//Math.floor()   --> arrondi vers le bas, ex: 10.9  -> 10
//Math.ceil()    --> arrondi vers le haut, ex: 10.1 -> 11


//Ex : meuble avec 4 tiroirs
// demander de choisir un tiroir via prompt
// si 1 : contient des vetements
// si 2 : tiroir fermé à clé
// si 3 : tiroir vide
// si 4 : contient des chaussettes

// var tiroir = parseInt(prompt("Choisissez un tiroir - de 1 à 4"));

// if (tiroir == 1) {
//     alert("ce tiroir contient des vetements");
// } else if (tiroir == 2) {
//     alert("ce tiroir est fermé à clé");
// } else if (tiroir == 3) {
//     alert("ce tiroir est vide");
// } else if (tiroir == 4) {
//     alert("ce tiroir contient des chaussettes");
// } else {
//     alert("ce tiroir n'existe pas");
// }

// switch(tiroir) { //fait une comparaison ===
//     case 1: 
//         alert("ce tiroir contient des vetements");
//         break;
//     case 2:
//         alert("ce tiroir est fermé à clé");
//         break;
//     case 3:
//         alert("ce tiroir est vide");
//         break;
//     case 4:
//         alert("ce tiroir contient des chaussettes");
//         break;
//     default: 
//         alert("ce tiroir n'existe pas");
// }

// exo : 
// moins de 1 an : c'est pas possible
// 1 à 17 : vous n'êtes pas encore majeur
// 18 à 49 : vous etes majeur mais pas encore senior
// 50 à 67 : vous êtes senior
// 68 à 120 : vous êtes retraité profitez-en
// plus de 120 : c'est génial
// ou : il y a une erreur

// var age = parseInt(prompt("Quel est ton âge ?"));

// if (age < 1) {
//     alert("C'est pas possible");
// } else if (age >= 1 && age < 18) {
//     alert("Vous n'êtes pas encore majeur");
// } else if (age >= 18 && age < 50) {
//     alert("vous etes majeur mais pas encore senior");
// } else if (age >= 50 && age < 68) {
//     alert("vous êtes senior");
// } else if (age >= 68 && age < 120) {
//     alert("vous êtes retraité profitez-en");
// } else if (age >= 120) {
//     alert("c'est génial");
// } else {
//     alert("il y a une erreur");
// }

// if (isNaN(age)) { //isNaN = is not a number
//     //mettre un message qui dit que ça n'est pas un nombre
// } 

// switch(true) {
//     case age <= 0 :
//         alert("C'est pas possible");
//         break;
//     case age >= 1 && age < 18 :
//         alert("Vous n'êtes pas encore majeur");
//         break;
//     case age >= 18 && age < 50 :
//         alert("vous etes majeur mais pas encore senior");
//         break;
//     case age >= 50 && age < 68 :
//         alert("vous êtes senior");
//         break;
//     case age >= 68 && age < 120 :
//         alert("C'est génial");
//         break;
//     default : 
//         alert("il y a une erreur");
// }

// définissez un min et un max (var min, var max)
// prompt demande de deviner un nombre (var nbr)
// si le nombre est compris entre min et max = gagné, si pas = perdu.

var min = Math.round(Math.random() * 100);
var max = Math.round(Math.random() * 100) + min;

alert(min);
alert(max);

var nbr = parseInt(prompt("entrez un nombre"));

if (nbr >= min && nbr <= max)  {
    alert(" trouvé !");
} else {
    alert(" perdu !");
}

if (nbr < min || nbr > max) {
    alert("perdu")
} else {
    alert("gagné")
}


//condition ternaire
var age = prompt("Quel est votre âge ?");
var category;
if (age >= 18) {
    category = "+18";
} else {
    category = "-18";
}
alert("vous faites partie de la catégorie "+ category);


var monAge = confirm("Avez-vous plus de 18 ans ?") ? "+18" : "-18";
var monAge2 = (age >= 18 ) ? "+18" : "-18";
alert("Vous faites partie de la catégorie "+ monAge);

var maVar = (1 > 2) ? "oui" : "non";
alert(maVar);