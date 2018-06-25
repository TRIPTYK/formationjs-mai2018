(function($){
    $(document).ready(function(){

        // $('button').click(function() {
        //     $('#maDiv').toggleClass('autreStyle monStyle');
        // }); //fin du click

        $('button').on('click', monClick);
    

        $('#maDiv').hover(function(){ //une fonction pour le mouseenter et une autre pour le mouseleave
            $(this).html('Hello');
            $(this).addClass('autreStyle').removeClass('monStyle');
            // $(this).toggleClass('autreStyle monStyle');
        }, function(){
            $(this).html("World");
            $(this).addClass('monStyle').removeClass('autreStyle');
            // $(this).toggleClass('autreStyle monStyle');
        });
    
        $('#maDiv').hover(function(){ //si je veux utiliser un toggle, je n'ai pas besoin des deux fonctions dans le hover
            $(this).toggleClass('autreStyle monStyle');
        });

    }); //fin du document ready

    var i = 0;
    function monClick() {
        console.log(i++);
        $('#maDiv').toggleClass('monStyle autreStyle');

        if (i > 10) {
            $('button').off('click', monClick);
        }
    }

})(jQuery)