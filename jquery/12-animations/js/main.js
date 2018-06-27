(function($){
    $(document).ready(function(){

        $('.bigDiv').click(function(){
            // $('.maDiv').css('width', '500px');
            $('.maDiv').animate({"width": "500px"}, 1000);
        });

        $('.bigText').click(function(){
            $('.maDiv').animate({"font-size" : "30px"}, 500);
        });

        $('.moveDiv').click(function(){
            $('.maDiv').css({"position": "relative"}).animate({"left": "500px"}, 2000);
        });

        $('.animateAll').click(function(){
            $('.maDiv').css('position', 'relative').animate({
                "width": "500px",
                "font-size": "30px",
                "left": "200px"
            }, 1000);
        });

        $('.animateOne').click(function(){
            $('.maDiv')
            .animate({"width": "500px"}, 1000)
            .animate({"font-size" : "30px"}, 500)
            .css({"position": "relative"})
            .animate({"left": "500px"}, 2000);

            // $('.maDiv').animate({"width": "500px"}, 1000, function(){
            //     $('.maDiv').animate({"font-size" : "30px"}, 500, function(){
            //         $('.maDiv').css({"position": "relative"}).animate({"left": "500px"}, 2000);
            //     });
            // });
        });

        var move = 250;
        var direction = true;
        $('.moveMore').click(function(){
            var limite = $(window).width() - $('.maDiv').width();
            if (direction == true) {
                if (move > limite) {
                    move -= 250;
                    direction = false;
                } else {
                    move += 250;
                }
            } else {
                if (move == 0) {
                    direction = true;
                    move += 250;
                } else {
                    move -= 250;
                }
            }
            
            $('.maDiv')
            .css('position', 'relative')
            .animate({"left" : move+"px"});
           
        });

        $('.reset').click(function(){
            $('.maDiv').removeAttr('style');
            move = 250;
            direction = true;
        });


        setInterval(maFct,2000); //appelle maFct toutes les 2 secondes
        // setTimeout(maFct,5000); //appelle maFct une seule fois dans 5 secondes
        var i = 0;
        function maFct() {
            console.log(i++);
        }

    });
})(jQuery);