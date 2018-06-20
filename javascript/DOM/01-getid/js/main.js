document.getElementById("demo").innerHTML = "Ca y est, on écrit enfin dans l'HTML";

var demo = document.getElementById('demo').innerHTML;

document.getElementById("demo").innerHTML = "C'est chouette...";

// var demo = document.getElementById('demo').innerHTML;
console.log(demo)

document.getElementById('demo').innerHTML += document.getElementById("test").innerHTML;