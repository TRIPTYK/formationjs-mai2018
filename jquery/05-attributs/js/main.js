(function($){
    $(document).ready(function(){

        $('a').attr('target', '_blank');
        console.log($('a').attr('target'));
        console.log($('a').attr('href'));
        $('a').removeAttr('href');

        $('img').attr({
            "src" : "images/Spring.jpg",
            "alt" : "Spring"
        }); 

    });
})(jQuery);