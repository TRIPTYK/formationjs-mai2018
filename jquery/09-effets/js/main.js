(function($){
    $(document).ready(function(){

        $('.btnShow').click(function(){
            $('#maDiv').show();
        });//

        $('.btnHide').click(function(){
            $('#maDiv').hide();
        });//

        $('.btnToggle').click(function(){
            $('#maDiv').toggle();
        });//


        $('.btnSlideDown').click(function(){
            $('#maDiv').slideDown(); //affiche
        });

        $('.btnSlideUp').click(function() { //masque
            $('#maDiv').slideUp(5000, function(){
                alert("J'ai finiiiii");
            });
        });

        // $('.btnSlideToggle').click(function(){
        //     $('#maDiv').slideToggle();
        // });

        $('.btnSlideToggle').on("click", maFct);
        function maFct(){
            $('.btnSlideToggle').off("click", maFct);
            $('#maDiv').slideToggle(1000, function(){
                $('.btnSlideToggle').on("click", maFct);
            });
            
        }


        $('.btnFadeIn').click(function(){
            $('#maDiv').fadeIn();
        });

        $('.btnFadeOut').click(function(){
            $('#maDiv').fadeOut(2000);
        });

        $('.btnFadeTo').click(function(){
            $('#maDiv').fadeTo(250, 0.3);
        });

        $('.btnFadeTo1').click(function(){
            $('#maDiv').fadeTo(250, 1);
        });


    }); // fin document ready
})(jQuery);