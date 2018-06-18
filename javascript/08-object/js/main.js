var prenom="Marc";
var nom="Dupont";
var age=45;

var prenom="John", 
    nom="Doe", 
    age=24;

var personne1=["Marc","Dupont",45,3];
 var personne2=["John","Doe",0,24]; 

function getAge(pers){

    console.log(pers[2]);

}

//getAge(personne2);

var personne3 = {
    firstName:"John",
    lastName:"Doe",
    age:24,
    child:0
};
var personne4 = {
    child:3,
    lastName:"Dupont",
    age:45,
    firstName:"Marc"
   
};

function getName(pers){
    console.log(pers.firstName);
}
getName(personne3);