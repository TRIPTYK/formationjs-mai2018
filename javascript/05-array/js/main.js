var prenoms = new Array("Anissa", "Gilles", "Stéphane");
console.log(prenoms);
console.log(prenoms[2]);

var villes = [];
var pays = ["Belgique", "France", "Russie"];

console.log(pays.length);

pays[0];
pays[1];
pays[2];

for (var i = 0; i < pays.length; i++) {
    console.log(pays[i]);
}

prenoms.push("Steve"); // ajoute à la fin de la liste existante
console.log(prenoms);

prenoms.unshift("Geoffrey"); // ajoute au début de la liste
console.log(prenoms);

prenoms.pop(); // supprime le dernier élément de la liste
prenoms.shift(); // supprime le premier élément de la liste

var nom = "Anissa Belkheir";
var nomArray = nom.split(" ");
console.log(nomArray);

var url = "http://www.triptyk.eu";
var urlArray = url.split("//");
console.log(urlArray);
console.log(urlArray[1]);

var nomReconstitue = nomArray.join("-");
console.log(nomReconstitue);

var mesPays = pays.join(', ');
console.log(mesPays);

for (var j = 0; j < prenoms.length; j++) {
    console.log(prenoms[j]);
}

//exo :
var classes = ["sorcier", "féticheur", "chasseur", "moine", "guerrier"];
// afficher le contenu de l'array, sous cette forme : 
//classe n°1: sorcier
//classe n°2: féticheur
for (var x = 0; x < classes.length; x++) {
    // var y = x+1;
    // console.log("Classe n°"+y+": " +classes[x]);
    console.log("Classe n°"+(x+1)+": " +classes[x]);
}

//exo
var objets = ["Table", "Chaise", "Buffet", "Vitrine"];
var prix = [250, 150, 350, 500];
var choix = prompt("Choisissez un objet ("+objets+")");

for (var i = 0; i < objets.length; i++) {
    if (choix.toLowerCase() == objets[i].toLowerCase()) {
        console.log("Prix de "+choix+" est : "+prix[i]);
    }
}