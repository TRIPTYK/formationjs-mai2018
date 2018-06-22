(function($){
    $(document).ready(function() {

        // $('p').length //compte combien de p j'ai dans le doc
        // $('p:hidden') //compte combien de p masqués j'ai dans le doc

        // alert("il y a "+ $('p').length + " paragraphes dans le document, dont "+ $('p:hidden').length +" caché");

        // // var i = 1;
        // $('p').each(function(chapi, chapo){ //chapi = index, chapo = élément
        //     alert("j'ai trouvé le paragraphe " + chapi);
        //     console.log(chapo);
        //     // i++;
        // });


        // border de plus en plus large
        // margin-left de plus en plus grande
        var border = 2;
        var margin = 0;
        $('p').each(function(i, el){
            // var that = this;
            // alert('paragraphe '+i)
            // $(el).css()
            // $('p:eq('+i+')').css();
            // $(this).css('border', border+'px solid red');
            // // this.style.border = ""
            // // el.style.border = ""
            // $(el).css('margin-left', margin+'px');

            $(this).css({
                "border" : border+'px solid red',
                "margin-left" : margin+'px'
            });

            border += 2;
            margin += 10;
        });

    });
})(jQuery);