var cars=["VW","Audi","BMW","Fiat"];
var price=["20.000","30.000","40.000","20.000"];
var choice = prompt("Choisissez une marque "+cars.join(" ou "));
var currency="€";
 //if(choice.toLowerCase() == cars[0].toLowerCase()){
// 	alert("Le prix est de "+price[0]+currency);

// } else if(choice.toLowerCase() == cars[1].toLowerCase()){
// 	alert("Les prix démarrent à "+price[1]+currency);

// }else if(choice.toLowerCase() == cars[2].toLowerCase()){
// 	alert("Tous les modèles sont à "+price[2]+currency);

// }else if(choice.toLowerCase() == cars[3].toLowerCase()){
// 	alert("Rien en dessous de "+price[3]+currency);

// }else{
// 	alert("Cette marque n'existe pas");
// }

/* switch(valeur à checker){
	case cas1:
	action
	break;

	case cas2:
	action
	break;

	default:
} */

switch (choice.toLowerCase()){

		case cars[0].toLowerCase():
		alert("Le prix est de "+price[0]+"€");
		break;

		case cars[1].toLowerCase():
		alert("Les prix démarrent à "+price[1]+"€");
		break;

		case cars[2].toLowerCase():
		alert ("Tous les modèle sont à "+price[2]+"€");
		break;

		case cars[3].toLowerCase():
		alert ("Rien en dessous de "+price[3]+"€");
		break;

		default:
		alert("Cette marque n'existe pas");

} 
