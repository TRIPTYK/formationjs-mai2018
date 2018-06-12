// alert("coucou");
// // Alert("re-coucou");
// alert   (      'coucou encore'     );

// alert("d'une"); alert('deux');
// alert('d\'une'); alert('deux');

//déclaration de variables :
// var maVariable; //camelCase, snake_case, SCREAMING_SNAKE_CASE
// //var ma-variable --> ne pas mettre de tiret!
// //var 123soleil --> pas de nombre pour commencer le nom

// var dateDeNaissance //minuscules, majuscules, chiffres, 
// var emailClient;
// var x;

// alert(x); // undefined (existe mais vide)
// //alert(y); // error dans console : y is not defined (n'existe pas)

// // définir une variable
// x = 12;
// x = "Anissa";
// alert(x);

// X = 14; //déclare tout seul comme un grand la variable en global
// alert(x);

// // les types
// var annee = 2018; //number = nombre
// var mois = "Juin"; //string = chaîne de caractères
// var isSummer = false; //boolean

// typeof(isSummer);
// alert(typeof(isSummer)); //boolean

// //concaténation
// alert(mois +' '+ annee); 

// var espace = " "; //déclarer et définir en même temps
// alert(mois + espace + annee);
// alert('Anissa' + ' ' + 'Belkheir');


//-------------
// var chiffre1 = 200;
// var chiffre2 = 10;
// alert(chiffre1 + chiffre2); //210 //addition

// var chiffre3 = "200";
// var chiffre4 = "10";
// alert(chiffre3 + chiffre4); //20010 //concaténation

// alert(chiffre1 - chiffre2); // 190
// alert(chiffre1 * chiffre2); // 2000
// alert(chiffre1 / chiffre2); // 20
// alert(chiffre1 % chiffre2); // modulo = reste de la division

// var prenom = prompt("Entrez un prénom");
// alert("Bonjour " + prenom);

//exo : lancer 2 prompts qui demandent un nombre chacun
//afficher la somme des deux nombres

// var nbr1 = parseInt(prompt("Entrez un nombre"));
var nbr1 = Number(prompt("Entrez un nombre"));
var nbr2 = prompt("Entrez un deuxieme nombre");

alert(nbr1 + parseFloat(nbr2));
// alert(+nbr1 + +nbr2);
var total = parseInt(nbr1) + parseInt(nbr2);
alert('résultat : '+total);

var texte = "10.5 centimètres";
alert(parseInt(texte)); // 10
alert(parseFloat(texte)); // 10.5
alert(Number(texte)); // NaN = Not a Number