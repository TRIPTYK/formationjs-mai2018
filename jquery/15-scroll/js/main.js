(function($){
    $(document).ready(function(){

        // console.log($('#section1').offset().top);

        $('a').on('click', function() {
            var id = $(this).attr('href');
            console.log($(id).offset().top);
            $('html').animate({
                "scrollTop" : $(id).offset().top
            }, 1000);

        });

    });
})(jQuery);