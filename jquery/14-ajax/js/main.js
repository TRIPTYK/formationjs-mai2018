(function($){
    $(document).ready(function(){

        $('.test').on('click', function(){

            //jQuery.ajax();
            // $.ajax({
            //     url : "js/fichier.txt",
            //     dataType : "text",
            //     type: "get",
            //     success : function(resultat) {
            //         $(".container").html(resultat);
            //     },
            //     error : function(erreur) {
            //         console.error(erreur);
            //     },
            //     complete : function() {
            //         alert("J'ai finiiiiiiii");
            //     }
            // });

            $.ajax({
                url : "js/datas.json",
                dataType : "json",
                type : "get",
                success : successFunction,
                error : errorFunction
            });

        }); //fin du click

    });//fin document ready

    function successFunction(result) {
        for (var i = 0; i < result.length; i++) {
            $('.container').append(result[i].firstname + ', ');
        }
        $('.test').off('click');
    }
    function errorFunction(err) {
        console.log('ça marche pas');
        console.error(err.status);
    }
})(jQuery);