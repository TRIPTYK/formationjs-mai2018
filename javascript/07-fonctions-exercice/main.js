function getNums(){

	var num1 = parseInt(prompt("Entrez un nombre"));
	var num2 = parseInt(prompt("Entrez un second nombre"));
	var op = prompt("Entrez un opérateur +, -, *, /");

	console.log(num1+" "+op+" "+num2+" = "+calculate(num1,num2,op));

}//getNums

function calculate(first,last,operator){

	var result;

	switch (operator){

		case "+":
		result=first+last;
		break;

		case "-":
		result=first-last;
		break;

		case "*":
		result=first*last;
		break;

		case "/":
		result=first/last;
		break;

		default:
		result="Calcul impossible"
		
	}//switch
	return result;

}//calculate

getNums();