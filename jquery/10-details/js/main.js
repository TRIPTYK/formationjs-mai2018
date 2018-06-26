(function($) {
    $(document).ready(function(){

        // $('.container .first').css();
        // $('.container').find('.first').css();
        // $(this).find('.first').css();

        $('.sousmenu').hide();
        $('li').click(function(){
            $(this).find('.sousmenu').slideDown();
        });

        $('a').click(function(){
            $(this).next('.sousmenu').slideDown();


            $(this).parent().parent().css('background-color', 'red');
        });

        $(this).closest('.qqch'); // remonte dans la hierarchie du this pour trouver son ancêtre le plus proche qui possède la classe .qqch

    });
})(jQuery)