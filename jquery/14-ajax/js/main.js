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


        $('.galerie').on('click', function() {
            $.ajax({
                url : "js/images.json",
                dataType : "json",
                type : "get",
                success : afficherGalerie
            });
        });

    });//fin document ready

        function afficherGalerie(res) {
            for (var key in res) {
                // $('.container').append('<h3>titre</h3><div><a href="grande image"><img src="petite image" alt="titre" /></a></div>');

                var contenu = '<h3>'+res[key].title+'</h3>';
                // var contenu = `<h3>${res[key].title}</h3>`;
                contenu += '<div><a href="'+res[key].image+'" target="_blank">';
                contenu += '<img src="'+res[key].thumb+'" alt="'+res[key].title+'" />';
                contenu += '</a></div>';

                $('.container').append(contenu);
            }
        }




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