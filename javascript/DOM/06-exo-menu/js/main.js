document.getElementsByTagName('ul')[0].style.display = "none"; // par défaut, mon menu est masqué

document.getElementsByTagName('button')[0].addEventListener('click', showMenu);

var isVisible = false;
var menu = document.getElementsByTagName('ul')[0];
function showMenu() {
    if (isVisible) {
        menu.style.display = "none";
        isVisible = false;
    } else {
        menu.style.display = "block";
        isVisible = true;
    }
}