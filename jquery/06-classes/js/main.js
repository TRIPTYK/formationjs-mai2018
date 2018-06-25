(function($) {
    $(document).ready(function(){

        // $('div').css('border', "3px solid green");
        // $('div').css({
        //     "border" : "3px solid fuchsia",
        //     "border-radius": "10px"
        // });
        // $('div').attr('class', "border");
        // $('div').addClass('border');
        // $('div').removeClass('class1');

        // $('div').toggleClass('toggle');

        // if ($('div').hasClass("class1")) {
        //     console.log("Oui, la div possède la class class1");
        // } else {
        //     console.log("Non, la div ne possède pas la class class1");
        // }
        console.log('--------------------------');
        $('div').each(function(i, el) {
            console.log(el);
            if ($(this).hasClass('class2')) {
                console.log('Oui, la div '+i+" possède la class class2")
            } else {
                console.log('Non, la div '+i+' ne possède pas la class class2')
            }
        });

    });
})(jQuery)