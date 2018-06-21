var arrayColors = [];
var container = document.getElementsByClassName('container')[0];

function initColors() {
    var color = prompt("Choisissez une couleur");
    if(color) {
        arrayColors.push(color);
        initColors();
    } else {
        console.log(arrayColors);
    }
}

function generateSquares() {
    container.innerHTML = ""; // *1
    for (var i = 0; i < arrayColors.length; i++) {
        var carre = document.createElement('div');
        carre.style.backgroundColor = arrayColors[i];
        carre.innerHTML = arrayColors[i];
        container.appendChild(carre);
    }

    // arrayColors = []; // soit je vide l'array après la génération des carrés. Soit, j'utilise l'option *1 (= je supprime les carrés déjà ajoutés avant de générer les nouveaux)
}

function resetAll() {
    arrayColors = [];
    container.innerHTML = "";
}




document.getElementsByClassName('btnColor')[0].addEventListener('click', initColors);
document.getElementsByClassName('btnSquares')[0].addEventListener('click', generateSquares);
document.getElementsByClassName('btnReset')[0].addEventListener('click', resetAll);