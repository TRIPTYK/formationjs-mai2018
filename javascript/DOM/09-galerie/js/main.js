var datas = [
    {
        "src" : "images/monstre1.jpg",
        "title" : "Boule verte",
        "alt" : "Monstre poilu vert"
    },
    {
        "src" : "images/monstre2.jpg",
        "title" : "Tentaculos",
        "alt" : "Pieuvre bleue à rayures"
    },
    {
        "src" : "images/monstre3.jpg",
        "title" : "Monstre à sucette",
        "alt" : "Monstre à sucette"
    },
    {
        "src" : "images/monstre4.jpg",
        "title" : "Triglobuleux",
        "alt" : "Monstre à 3 zieux"
    },
    {
        "src" : "images/monstre5.jpg",
        "title" : "Diablotin",
        "alt" : "Diale rouge"
    },
    {
        "src" : "images/monstre6.jpg",
        "title" : "Chewbacca rose",
        "alt" : "Monstre poilu rose"
    }
];

var thumbnails = document.getElementsByClassName('thumbnails')[0];
var preview = document.getElementsByClassName('preview')[0];

for (var i = 0; i < datas.length; i++) {
    var thumb = document.createElement('img');
    thumb.src = datas[i].src;
    thumb.alt = datas[i].alt;
    thumb.title = datas[i].title;
    thumb.width = 150;
    thumb.height = 150;
    thumb.setAttribute("onclick", "maFct("+i+")");
    // thumb.style.height = "150px";
    // thumb.style.width = "150px";
    thumbnails.appendChild(thumb);

    // thumb.addEventListener('click', showPreview);
    // thumb.addEventListener('click', function() {
    //     showPreview(i);
    // });
}

function showPreview() {
    preview.innerHTML = "";

    var title = document.createElement('h2');
    title.innerHTML = this.title;
    preview.appendChild(title);

    var bigImage = document.createElement('img');
    bigImage.src = this.src;
    bigImage.alt = this.alt;
    bigImage.title = this.title;
    bigImage.width = 400;
    preview.appendChild(bigImage);
}
function maFct(i) {
    preview.innerHTML = "";

    var title = document.createElement('h2');
    title.innerHTML = datas[i].title;
    preview.appendChild(title);

    var bigImage = document.createElement('img');
    bigImage.src = datas[i].src;
    bigImage.alt = datas[i].alt;
    bigImage.title = datas[i].title;
    bigImage.width = 400;
    preview.appendChild(bigImage);
}


var donnees = new XMLHttpRequest();
donnees.open('GET', 'js/datas.json');
donnees.onload = function() {
    if (donnees.status == 200 ) {
        checkDatas(donnees.responseText)
    } else {
        console.log("erreur : " + donnees.status);
    }
}
donnees.send();

function checkDatas(infos) {
    console.log(infos)
}

