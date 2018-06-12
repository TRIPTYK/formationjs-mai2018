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

var pommes = prompt("Combien de pommes ?");
var couleur = prompt("Quelle était la couleur des pommes (rouge, vert)");
// if (pommes > 35) {
//     alert("bravo")
//     if (pommes > 100) {
//         alert("mais, j'y crois pas")
//     }
// } else {
//     alert("retourne bosser")
// }

if (pommes > 35) {
    alert(pommes +", c'est pas mal !")
    if (couleur == "rouge") {
        alert("super, c'est celles que je préfère")
    } else {
        alert("mais j'aime pas les vertes")
    }
} else {
    alert("retourne bosser")
}

if (pommes > 35 && couleur == "rouge") {
    alert("bravo")
} else {
    alert("pas bien");
}

var nombre = Math.round(Math.random() * 100); // génère un nombre entre 0 et 1, si je fais *100
alert(nombre);

//Math.round()   --> arrondi, ex: 10.5 -> 11, 10.1 -> 10, 10.9 -> 11
//Math.floor()   --> arrondi vers le bas, ex: 10.9  -> 10
//Math.ceil()    --> arrondi vers le haut, ex: 10.1 -> 11


//Ex : meuble avec 4 tiroirs
// demander de choisir un tiroir via prompt
// si 1 : contient des vetements
// si 2 : tiroir fermé à clé
// si 3 : tiroir vide
// si 4 : contient des chaussettes