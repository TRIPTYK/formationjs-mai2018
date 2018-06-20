function mOver(maVar, n) {
    maVar.style.backgroundColor = "pink";
    // document.getElementById('demo').innerHTML = maVar;
    maVar.innerHTML = n;
    console.log(maVar);
}

document.getElementById("btn").addEventListener('mouseover', mHover);
document.getElementById("btn").addEventListener('mouseout', mOut);

var text;
function mHover(event) {
    // console.log(this);
    // console.log(event);
    this.style.backgroundColor = "green";
    text = this.innerHTML;
    this.innerHTML = "Poseeeeeey";
    // this.removeEventListener('mouseover', mHover);
}

function mOut() {
    this.innerHTML = text;
    this.removeAttribute('style');
}


document.getElementById('box').addEventListener('click', mClick);
document.getElementById('btn').addEventListener('click', mClick);
function mClick(e) {
    console.log(e);
    // console.log(e.target.clientWidth);
    // console.log(e.target.clientHeight);
    var largeur = e.target.clientWidth; // = largeur de l'élément cliqué
    if (e.offsetX < largeur/2) { //si je clique dans la moitié gauche de l'élément
        this.innerHTML = "va à gauche<span>!</span>";
    } else {
        this.innerText = "va à droite";
    }
}


// var p = document.getElementsByTagName('p');
// console.log(p);
// for (var i = 0; i < p.length; i++) {
//     p[i].innerHTML = i;
//     p[i].style.border = i+"px solid red";
// }