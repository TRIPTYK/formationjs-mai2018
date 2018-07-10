// Document jquery

(function($) {
  
   

$('document').ready(function() {
   
   //1ère étape, retirer le click par défaut sur les miniatures
   $('.galerie_thumbnails a').click(function(e) {
       
       e.preventDefault(); // e = évènement, preventDefault pour annuler l'action par défaut du click dans le html.
       
       
       // Les 4 lignes suivantes ont été commentées car mises dans une fonction à part updateThumbnails()
       //$('.galerie_thumbnails a').removeClass('selected');
       //$('.galerie_thumbnails a').children().css('opacity', '1.0');
       //$(this).addClass('selected');
       //$(this).children().css('opacity', '0.4');
       
       
       //2ème étape
       var p_caption = $(this).attr('title');
       var p_fullsize = $(this).attr('href');
       var p_preview = p_fullsize.replace('_fullsize','_preview');
       

       //4ème étape
       $('.galerie_caption').slideUp(500);
       $('.galerie_preview').fadeOut(500, function() {
           
            //6ème étape (après avoir lié le script farinspace)
            $('.galerie_preload_area').html('<img src="'+p_preview+'" />');
            $('.galerie_preload_area img').imgpreload(function() {
                
                //3ème étape sans la classe overlaylinks // ajouter le zoomlink en dernier
                $('.galerie_preview').html('<a class="overlaylinks" href="'+p_fullsize+'" title="'+p_caption+'" style="background:url('+p_preview+');"></a>');
                $('.galerie_caption').html('<p><a class="overlaylinks zoomlink" href="'+p_fullsize+'" title="'+p_caption+'">Fullsize</a></p><p>'+p_caption+'</p>');


                $('.galerie_preview').fadeIn(500);
                $('.galerie_caption').slideDown(500);
                
                setFancyboxLinks();
                updateThumbnails();
                
            });
            
        });
       
   });
   
   //8ème étape
   // Mettre en place une image par défaut au chargement de la page
    var first_p_caption = $('.galerie_thumbnails a').first().attr('title');
    var first_p_fullsize = $('.galerie_thumbnails a').first().attr('href');
    var first_p_preview = first_p_fullsize.replace('_fullsize','_preview');


    $('.galerie_caption').slideUp(500);
    $('.galerie_preview').fadeOut(500, function() {

        $('.galerie_preload_area').html('<img src="'+first_p_preview+'" />');
        $('.galerie_preload_area img').imgpreload(function() {

            $('.galerie_preview').html('<a class="overlaylinks" href="'+first_p_fullsize+'" title="'+first_p_caption+'" style="background:url('+first_p_preview+');"></a>');
            $('.galerie_caption').html('<p><a class="overlaylinks zoomlink" href="'+first_p_fullsize+'" title="'+first_p_caption+'">Fullsize</a></p><p>'+first_p_caption+'</p>');

            $('.galerie_preview').fadeIn(500);
            $('.galerie_caption').slideDown(500);

            setFancyboxLinks();
            updateThumbnails();

        });

});
   
   
   
});


//5ème étape + ajouter les classes overlaylinks
function setFancyboxLinks(){
    
   $('a.overlaylinks').fancybox({
      'titlePosition': 'over',
      'overlayColor': '#000',
      'overlayOpacity': 0.8,
      'transitionOut': 'elastic',
      'transitionIn': 'elastic',
      'autoScale': true 
   });
   
}

//7ème étape pour empêcher le thumbnail de se rafraichir à chaque fois qu'on clique dessus.
function updateThumbnails(){
    
    $('.galerie_thumbnails a').each(function(){
        
        if ($('.galerie_preview a').attr('href') == $(this).attr('href')) {
            $(this).addClass('selected');
            $(this).children().fadeTo(250, .4);
        }
        else {
            $(this).removeClass('selected');
            $(this).children().css('opacity','1');
        }
            
        
    });
    
}


})(jQuery);