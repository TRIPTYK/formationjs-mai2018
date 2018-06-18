
function getScore(){

	var score=prompt("Entrez votre pourcentage");
	console.log(assignGrade(score));

}

function assignGrade(sc){

	if(sc>90){
		return 'A';
	} else if(sc>80){
		return 'B';
	} else if( sc>70){
		return 'C';	
	}else if(sc>60){
		return 'D';
	} else{
		return 'F';
	}

}
getScore();