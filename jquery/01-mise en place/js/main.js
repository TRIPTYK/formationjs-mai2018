(function($){  // Dans cette fonction, le $ représente jQuery

    $(document).ready(function() { // exécute le code qu'il contient, uniquement lorsque le document est chargé

        //fichier index.html
        // Sélecteurs

        // $('p').css('border', '3px solid red');
        // for (var i = 0; i < document.getElementsByTagName('p').length; i++) {
        //     document.getElementsByTagName('p')[i].style.border = "3px solid red";
        // }
        
        // $('#list1').css('border', '3px solid green');
        // document.getElementById('liste1').style.border = "3px solid green"

        // $('.a').css('border', '3px solid red');
        // $('p.b').css('border', '3px solid red');
        // $('ul + p').css('border', '3px solid red');

        // filtres
        // -- basiques
        // $('p:first').css('border', '3px solid red');
        // $('p:last').css('border', '3px solid red');
        // $('p:odd').css('border', '3px solid red'); //impairs ! index 0
        // $('p:even').css('border', '3px solid red'); //pairs ! index 0
        // $('p:lt(2)').css('border', '3px solid red'); //less than
        // $('p:gt(2)').css('border', '3px solid red'); //greater than
        // $('p:eq(2)').css('border', '3px solid red'); //equal
        // $('p:eq(2), p:gt(2)').css('border', '3px solid red'); //plus grand et égal
        // $('p:not(:eq(2))').css('border', '3px solid red'); // sélectionne tous les p sauf celui entre () -> ici celui qui a l'index 2

        // -- attributs
        // $('p[class]').css('border', '3px solid red');
        // $('[lang="fr-be"]').css('border', '3px solid red');
        // $('p[id!="para2"]').css('border', '3px solid red');// sélectionne tous les paragraphes sauf celui qui a un id égal à para2
        // $('p[id^="para"]').css('border', '3px solid red'); // sélectionne les p qui ont un id qui commence par "para"
        // $('[id$="1"]').css('border', '3px solid red'); // éléments qui ont un id qui se termine par 1
        // $('[title*="jour"]').css('border', '3px solid red'); //sélectionne élément qui a un title qui contient les lettres "jour"
        // $('[title~="jour"]').css('background-color', 'blue'); // sélectionne élément qui a un title qui contient le MOT "jour"

        //-- contenu
        // $('li:contains("accueil")').css('border', '3px solid red');
        // $('li:empty').css('border', '3px solid red'); //sélectionne les li vides
        // $('li').empty(); //vider tous les li
        // $(':parent').css('border', '3px solid red');
        // $('ul:has(li.a)').css('border', '3px solid red'); // sélectionne les ul qui ont un li avec une class a

        // --visibilité
        // $("p:visible").css('border', '3px solid red');
        // $("p:hidden").css('display', 'block');

        // -- childs
        // $('p:first-child').css('border', '3px solid red');
        // $('p:nth-child(2)').css('border', '3px solid red');
        // $('p:nth-child(odd)').css('border', '3px solid red'); //les paragraphes qui sont 1er enfant, 3eme enfant, 5eme enfant...
        // $('p:nth-child(2n+1)').css('border', '3px solid red');
        // $(':only-child').css('border', '3px solid red');

        //fichier form.html
        //formulaires

        // $(':input').before('INPUT : '); // TOUS les champs de formulaire, ne pas confondre avec $('input') -> sélectionne les balises <input>

        // $(':radio').before('RADIO :'); //$('[type="radio"]')
        // $(':text').before('TEXT :'); //$('[type="text"]')

        // $(':enabled').before('ENABLED : ');
        // $(':text:enabled').before('ENABLED : ');
        // $(':text:disabled').before('DISABLED : '); //tous les champs de type texte inactifs
        // $(':checkbox').before('CHECKBOX : ');
        $(':checked').before('CHECKED : '); //tous les éléments radio ou checkbox qui sont cochés

    });


})(jQuery);