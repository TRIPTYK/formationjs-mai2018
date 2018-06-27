(function($){
    $('.submenu').hide();

    $(document).ready(function(){

        $('.toggleMenu span').each(function(){
            var originalText = $(this).text();
            $(this).replaceWith('<a href="#">'+originalText+'<span class="more" style="float:right">+</span></a>');
        });

        $('.menu a').on('click', function(){
            // event.preventDefault();
            if ($(this).next('.submenu:visible').length == 0) { //menu fermé
                $('.submenu').slideUp();
                $('.more').text('+');
                $('li').removeClass('active');

                $(this).next('.submenu').slideDown();
                $(this).find('.more').text('-');
                $(this).parent('li').addClass('active');
            } else {
                $(this).next('.submenu').slideUp();
                $(this).find('.more').text('+');
                $(this).parent('li').removeClass('active');
            }
        });

    });

})(jQuery);