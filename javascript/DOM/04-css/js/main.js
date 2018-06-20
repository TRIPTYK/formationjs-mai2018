document.getElementById("myText").style.color = "#de236f";
document.getElementById("myText").removeAttribute('style');

document.getElementById("myText").setAttribute('class', 'orange');

var text = document.getElementById("myText");
// text.style.display = "none"; // disparaît entierement
// text.style.visibility = "hidden"; // sa place est réservée, mais on ne peut pas interagir avec elle
// text.style.opacity = "0"; // l'élément est tjrs là, juste transparent et on peut interagir avec

text.style.backgroundColor = "blue";
text.setAttribute('style', 'background-color: green; color: white');
text.setAttribute('title', 'mon titre');

