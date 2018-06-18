var amis = [];
amis.push("Anissa");
amis[1] = "Gilles";
amis[2] = "Stéphane";
amis.push("Steve");

var pros = [];
pros.push("VOO");
pros[1] = "Technocité";
pros[2] = "Aramis";

console.log(amis, pros);

var contacts = [amis, pros];
// var contacts = [["Anissa", "Gilles"], ["VOO"]];
console.table(contacts);

console.log(amis[2]);
console.log(contacts[1][1]);

//exo : afficher tous les contacts
// contacts[0][0]
// contacts[0][1]
// contacts[0][2]
// contacts[0][3]
// contacts[1][0]
// contacts[1][1]
// contacts[1][2]

for (var i = 0; i < contacts.length; i++) {
    // console.log(contacts[i]);
    for (var j = 0; j < contacts[i].length; j++) {
        console.log(contacts[i][j]);
    }
}
