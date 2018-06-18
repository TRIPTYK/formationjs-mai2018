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
var prenom = "Anissa";
// var autreprenom;

function monPrenom() {
    prenom = "Gilles";
    var autreprenom = "Stéphane";

    console.log(prenom); // Gilles
    console.log(autreprenom); // Stéphane
    monNom(autreprenom);
}

function monNom(prenomRecupere) {
    console.log(prenomRecupere +" "+ prenom); // Stéphane Gilles
}

monPrenom();
console.log(prenom);
// console.log(autreprenom);

// fonction qui calcule la moyenne de 3 nombres
// afficher le plus petit des 3

function calculMoyenne() {
    var nbr1 = parseInt(prompt("Entrez un nombre"));
    var minimum = nbr1;
    var nbr2 = parseInt(prompt("Entrez un deuxieme nombre"));
    if (nbr2 < minimum) {
        minimum = nbr2;
    }
    var nbr3 = parseInt(prompt("Entrez un dernier nombre"));
    if (nbr3 < minimum) {
        minimum = nbr3;
    }
    //var minimum = Math.min(nbr1, nbr2, nbr3);
    var moyenne = (nbr1+nbr2+nbr3)/3;
    console.log("Le plus petit nombre est "+minimum+" et la moyenne des 3 est "+moyenne);
}
calculMoyenne();

// console.log("Le plus petit nombre est x et la moyenne des 3 est y");
