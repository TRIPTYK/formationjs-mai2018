// var personnage1 = new Object();
// personnage1.name = "Ned Stark";
// personnage1.house = "Stark";
// personnage1.city = "Winterfell";

// console.log(personnage1);
// console.log(personnage1.name);
// console.log(personnage1["name"]); //version utilisée dans le for

// var personnage2 = {};
// personnage2 = {
//     name : "Joffrey Baratheon",
//     city : "King's Landing",
//     "house": "Baratheon"
// };

// console.log(personnage2);

// for (var key in personnage1) {
//     console.log(key + " : " + personnage1[key]);
// }

// var personnages = [personnage1, personnage2];
// //afficher tout le contenu de personnages
// // console.table(personnages)
// // console.log(personnages[0].house);
// // console.log(personnages[0].name);
// // console.log(personnages[0].city);
// // console.log(personnages[1].house);
// // console.log(personnages[1].name);
// // console.log(personnages[1].city);

// for (var i = 0; i < personnages.length; i++) {
//     for (var perso in personnages[i]) {
//         console.log(personnages[i][perso]);
//     }
// }

var DIList = {
    "stagiaires":[
        {
            "firstname":"Thomas",
            "lastname":"Esgain",
            "age":26,
            "city":"Charleroi"
        },
        {
            "firstname":"Camille",
            "lastname":"Vandenbussche",
            "age":24,
            "city":"Houthem"
        },
        {
            "firstname":"Julien",
            "lastname":"Flament",
            "age":26,
            "city":"Cuesmes"
        },
        {
            "firstname":"Christian",
            "lastname":"Verde",
            "age":26,
            "city":"Charleroi"
        },
        {
            "firstname":"Christian",
            "lastname":"Lagast",
            "age":36,
            "city":"Mons"
        },
        {
            "firstname":"Danny",
            "lastname":"Wrincq",
            "age":53,
            "city":"Quaregnon"
        },
        {
            "firstname":"Nicolas",
            "lastname":"Davin",
            "age":30,
            "city":"Braine L'Alleud"
        },
        {
            "firstname":"Guillaume",
            "lastname":"Danzin",
            "age":40,
            "city":"Saint-Symphorien"
        },
        {
            "firstname":"Anais",
            "lastname":"Delaunoy",
            "age":20,
            "city":"Charleroi"
        },
        {
            "firstname":"Thomas",
            "lastname":"Barez",
            "age":21,
            "city":"Braine le Comte"
        },
        {
            "firstname":"Benoit",
            "lastname":"Carreau",
            "age":38,
            "city":"Tournai"
        },
        {
            "firstname":"Fabian",
            "lastname":"Potenza",
            "age":23,
            "city":"Quaregnon"
        },
        {
            "firstname":"Jimmy",
            "lastname":"Quennery",
            "age":22,
            "city":"Boussu-en-Fagnes"
        },
        {
            "firstname":"Arnaud",
            "lastname":"De Boeck",
            "age":21,
            "city":"Mons"
        }
    ],
    "formateurs":[
        {
            "firstname":"Christophe",
            "lastname":"Estercq",
            "age":26,
            "city":"Mons"
        },
        {
            "firstname":"Anissa",
            "lastname":"Belkheir",
            "age":34,
            "city":"Ghlin"
        },
        {
            "firstname":"Gilles",
            "lastname":"Bertrand",
            "age":35,
            "city":"Hyon"
        }
    ]
};

// // Afficher tous les prénoms et noms des stagiaires
// // DIList.stagiaires[11].firstname;

// for ( var i= 0; i < DIList.stagiaires.length; i++) {
//     console.log(DIList.stagiaires[i].firstname +" "+ DIList.stagiaires[i].lastname);
// }

// // Afficher les prénoms des stagiaires qui commencent par D, A ou T

// for (var j = 0; j < DIList.stagiaires.length; j++) {
//     var firstLetter = DIList.stagiaires[j].firstname.charAt(0);
//     if (firstLetter == "D" || firstLetter == "A" || firstLetter == "T") {
//         console.log(DIList.stagiaires[j].firstname);
//     }
// }

// Afficher les prénoms (des stagiaires) groupés par ville
        //ex : La ville de Mons héberge : Thomas, Arnaud
        //ex : Mons : Thomas Arnaud
        // var villes = ["Mons", "Charleroi", "Namur"];
        // console.log(villes.indexOf("Charleroi"));

var cities = [];
var names = [];
for (var i = 0; i < DIList.stagiaires.length; i++) {
    var city = DIList.stagiaires[i].city;
    var name = DIList.stagiaires[i].firstname;
    if (cities.indexOf(city) == -1) {
        //non, cette ville (city) n'existe pas encore dans l'array cities
        cities.push(city); // ajouter la ville dans cities
        // console.log("J'ai ajouté " +city+ " dans cities");
        // ajouter en même temps le firstname dans names
        // names.push(name);
        names.push("La ville de "+city+" héberge " +name);
    } else {
        // console.log(city+ " existe déjà dans cities");
        // récupérer l'index de la ville déjà existante dans cities
        // et l'utiliser pour ajouter le firstname dans names
        var index = cities.indexOf(city); // me renvoi l'index de la ville dans cities
        names[index] += ", "+name;
    }
}
console.log(cities);
console.log(names);
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}

//exo : afficher la liste de courses
// Pour lundi vous avez 2 éléments sur votre liste :
// - Filet américain
// - Cornichons
var listeCourses = {
    "lundi" : [
        "Filet américain",
        "Cornichons"
    ],
    "mardi" : [],
    "mercredi" : [
        "Biscuits",
        "Chocolat",
        "Chips"
    ],
    "jeudi" : [
        "Chinois"
    ],
    "vendredi" : [
        "Choux de Bruxelles",
        "Fromage frais",
        "Patates",
        "Pain",
        "Salade"
    ],
    "samedi" : [
        "Pizza"
    ],
    "Dimanche": []
};

for (var key in listeCourses) {
    console.log('le '+key+" vous avez "+listeCourses[key].length+" élément(s) dans votre liste :");
    for (var i = 0; i < listeCourses[key].length; i++) {
        console.log("- "+listeCourses[key][i]);
    }
}