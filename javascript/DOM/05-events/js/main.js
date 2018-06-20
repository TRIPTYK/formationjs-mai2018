// document.getElementById("btn").onclick = function() {
//     document.getElementById("box").style.display = "none";
// };

document.getElementById('btn').addEventListener("click", maFct);
document.getElementById('btn').addEventListener("click", function() {
    document.getElementById('box').style.display = "none";
});

// function maFct() {
//     document.getElementById('box').style.display = "none";
// }

var isVisible = true; // par défaut, l'élément n'est pas masqué
function maFct() {
    if (isVisible) { // si l'élément est visible
        document.getElementById("box").style.display = "none"; // cache le
        isVisible = false; // et préviens qu'il est caché
    } else { // sinon, l'élément n'est pas visible
        document.getElementById("box").style.display = "block"; // alors affiche le
        isVisible = true; // et préviens qu'il est affiche
    }
}