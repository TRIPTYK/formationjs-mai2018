(function($) {

    $(document).ready(function(){

        console.log($('ul').html());
        console.log($('ul').text());

        var contenuDuUl = $('ul').html();

        $('ul').html(contenuDuUl +'<li>Element de liste tout nouveau tout propre</li>');
        // $('ul').html('<li>Element de liste tout nouveau tout propre</li>');
        // for (var i = 0; i< document.getElementsByTagName('ul').length; i++) {
        //     document.getElementsByTagName('ul')[i].innerHTML = "<li>Element de liste tout nouveau tout propre</li>"
        // }

        $('ul').append('<li>nouvel li</li>');
        $('p').append("<strong> auquel j'ai ajouté du contenu</strong>");
        $('p').prepend("<mark>Salut ! </mark>");

        // $('p').before('Texte BEFORE');
        // $('p').after('Texte AFTER');

        // $('p span').appendTo("p"); //prependTo()
        // $('p span').insertBefore("p") //insertAfter();

        $('p span').clone().prepend(' ').appendTo("p"); //chaining, binding

        var p = $('p');
        // p.wrap('<section style="border: 3px solid blue">');
        p.wrapAll('<section style="border: 3px solid fuchsia">');

        $('ul').empty();
        $('ul').html('');
        

    });

})(jQuery);