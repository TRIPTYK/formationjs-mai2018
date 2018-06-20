document.getElementById('btn').addEventListener('click', rect);

function rect() {
    var hauteur = parseInt(prompt("Entrez une hauteur"));
    var largeur = parseInt(prompt("Entrez une largeur"));

    var surface = hauteur*largeur;
    var perimetre = (hauteur+largeur)*2;

    alert("La surface est de "+surface+"px²");
    alert("Le périmètre est de "+perimetre+"px");

    document.getElementById("box").style.width = largeur+"px";
    document.getElementById("box").style.height = hauteur+"px";

    // créer un élément <h3> et l'ajouter dans l'html
    var titre = document.createElement('h3');
    titre.style.color = "yellow";
    titre.innerHTML = "un titre";
    document.getElementById('box').appendChild(titre);

    var text = document.createElement('strong');
    text.innerHTML = "Contenu";
    document.getElementsByTagName('h3')[0].appendChild(text);

    
}
