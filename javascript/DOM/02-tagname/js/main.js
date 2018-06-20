var p = document.getElementsByTagName("p");
console.log(p);

document.getElementsByTagName("p")[0].innerHTML = "Coucou";
p[1].innerHTML = "Coucou";

for (var i = 0; i < p.length; i++) {
    p[i].innerHTML = "Ah que coucou !";
}

// document.getElementsByTagName('body')[0]

document.getElementsByClassName("test")[2].innerHTML = "Je t'ai eu!"

console.log("Il y a "+document.getElementsByClassName("test").length+" .test dans le document");