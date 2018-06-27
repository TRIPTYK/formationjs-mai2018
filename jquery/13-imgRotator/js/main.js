(function($){
    $(document).ready(function(){
        // $('.container div:gt(0)').hide(); // décommenter cette ligne pour la version alternative
        setInterval(imgRotator, 2000);
        // setInterval(alternative, 2000);

    }); //fin du document ready

    function alternative() { //pas de .actuelle ni de .precedente utilisées pour cette version
        $('.container div:first').fadeOut(1000).next().fadeIn(1000).end().appendTo('.container');
    }

    function imgRotator() {
        var currentImage = $('.actuelle');
        var nextImage = currentImage.next();

        if (nextImage.length == 0) {
            nextImage = $('.container div:first');
        }

        currentImage.removeClass('actuelle').addClass('precedente');
        nextImage.css('opacity', 0).addClass('actuelle').animate({"opacity": 1}, 1000, function(){
            currentImage.removeClass('precedente');
        });
    }

})(jQuery);