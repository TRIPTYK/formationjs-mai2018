for (var i = 0; i < 100; i++) {
    console.log(i);
}

//incrémenter une variable 
var nombre = 0;
nombre = nombre + 1;  // 1
nombre = nombre + 5;  // 6

nombre += 3;  // 9

nombre++; // 10
++nombre; // 11

alert(nombre++); // 11 
alert(++nombre); // 13

// faire une boucle qui affiche les nombres de 0 à 99
// préciser si le nombre est pair ou impair
// 1 est impair
// 2 est pair
// 3 est impair

for (var i = 0; i < 100; i++) {
    if (i % 2 == 0) {
        console.log(i + " est pair");
    } else {
        console.log(i + " est impair");
    }
}

// est multiple de 4
// est multiple de 7
// est multiple de 4 et de 7

for (var i = 0; i < 100; i++) {
    if (i%4 == 0) {
        if (i%7 ==0) {
            console.log(i + " est un multiple de 4 et de 7");
        } else {
            console.log(i + "  est un multiple de 4");
        }
    } else if (i%7 == 0) {
        console.log(i + " est un multiple de 7");
    } else {
        console.log(i);
    }
}