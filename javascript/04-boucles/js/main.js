// for (var i = 0; i < 100; i++) {
//     console.log(i);
// }

// //incrémenter une variable 
// var nombre = 0;
// nombre = nombre + 1;  // 1
// nombre = nombre + 5;  // 6

// nombre += 3;  // 9

// nombre++; // 10
// ++nombre; // 11

// alert(nombre++); // 11 
// alert(++nombre); // 13

// // faire une boucle qui affiche les nombres de 0 à 99
// // préciser si le nombre est pair ou impair
// // 1 est impair
// // 2 est pair
// // 3 est impair

// for (var i = 0; i < 100; i++) {
//     if (i % 2 == 0) {
//         console.log(i + " est pair");
//     } else {
//         console.log(i + " est impair");
//     }
// }

// // est multiple de 4
// // est multiple de 7
// // est multiple de 4 et de 7

// for (var i = 0; i < 100; i++) {
//     if (i%4 == 0) {
//         if (i%7 ==0) {
//             console.log(i + " est un multiple de 4 et de 7");
//         } else {
//             console.log(i + "  est un multiple de 4");
//         }
//     } else if (i%7 == 0) {
//         console.log(i + " est un multiple de 7");
//     } else {
//         console.log(i);
//     }
// }


// while
// var count = 0;
// while(count < 100) {
//     console.log(count);
//     count++;
// }

// var prenom = prompt("Entrez un prénom");
// while(prenom == "Anissa") {
//     console.log("Bonjour " + prenom);
//     prenom = prompt("Entrez un prénom");
// }

// // min et max
// // prompt demande de deviner un nombre
// // tant que ce n'est pas dans la bonne fourchette, relancer le prompt

// var min = 50;
// var max = 200;

// var nombre = prompt("Devinez un nombre");
// while(nombre < min || nombre > max) {
//     nombre = prompt("Devinez à nouveau");
// }

// var guess = true;
// while(guess) {
//     var nbr = prompt('Devinez un nombre');
//     if (nbr > min && nbr < max) {
//         guess = false;
//     }
// }

// do {
//     console.log("Bonjour");
// } while(1 > 2); //la condition est toujours fausse

// do {
//     var numero = prompt("Entrez un nombre");
// } while(numero < min || numero > max);


// Exercice
// demander des prénoms dans un prompt
// afficher la liste de tous les prénoms rentrés

// var prenom = prompt("Entrez un prénom");
// console.log(prenom);

// var liste = "Prénoms : ",
//     prenom,
//     isTrue = true;

// while(isTrue) {
//     prenom = prompt("Entrez un prénom");
//     if (prenom) {
//         liste += prenom.trim() + " "; // .trim() supprime les espaces devant et derrière
//     } else {
//         isTrue = false;
//     } 
// }
// console.log(liste);

// le même avec le do while :
// var nom, noms = "";
// do {
//     nom = prompt("Entrez un prénom");
//     if (nom) { // si je ne mets pas cette condition, je risque d'avoir un null à la fin de ma liste de noms
//         noms += nom;
//     }
// } while(nom);
// console.log(noms);


// var s = "abcdefghijklm";

// console.log('s.substr(0,2) : ' + s.substr(0,2));
// console.log('s.substr(1,2) : ' + s.substr(1,2));
// console.log('s.substr(3,5) : ' + s.substr(3,5));
// console.log('-------------------------------');
// console.log('s.substring(0,2) : ' + s.substring(0,2));
// console.log('s.substring(1,2) : ' + s.substring(1,2));
// console.log('s.substring(3,5) : ' + s.substring(3,5));
// console.log('-------------------------------');
// console.log('s.charAt(6) : ' + s.charAt(6));



// if (age >= 18) {
//     //fait qqch
// }

// if (age == 18) {
//     //fait qqch
// }


// if (prenom == "Anissa") {
//     //fait qqch
// } else if (prenom == "Gilles") {
//     //fait qqch
// } else if (prenom == "Stephane") {

// }

// générer une chaine de caractères qui contient des nombres de 0 à 500

var chaine = ""; // je dois définir la chaine en tant que string, pour éviter que les nombres soient additionnés et non concaténés

for (var i = 0; i < 501; i++) {
    chaine += i;
}
// compter le nombre de fois qu'apparaît le chiffre 3
var compteur = 0;
for (let j = 0; j < chaine.length; j++) {
    if (chaine.charAt(j) == "3") {
        compteur++;
    }
}
console.log(compteur);




var paragraphe = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere"
var count = 0;
for (var x = 0; x < paragraphe.length; x++) {
    if (paragraphe.charAt(x) == "o") {
        count++;
    }
}
console.log(count);


console.log(i);
// console.log(j);

// const y = 5;
// y = 6;