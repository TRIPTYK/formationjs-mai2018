(function ($) {
    $(document).ready(function () {
        $.ajax({
            dataType: "json",
            type: "get",
            url: "js/datas.json",
            success: showThumbnails,
            error: fctError
        });

        // $('.thumbnails a').click(function(e){ //vu que les a ne sont pas encore générés, ça ne fonctionne pas.
        $(document).on('click', '.thumbnails a', showPreview);
    });//fin du document ready

    function showPreview(e) {
        e.preventDefault();

        // $('.thumbnails a img').removeClass('active');
        // $('.thumbnails a img').css('opacity', 1);
        // $(this).children().addClass('active');
        // $(this).children().css('opacity', 0.6);

        const img_fullsize = $(this).attr('href');
        const img_preview = img_fullsize.replace('_fullsize', '_preview');
        const img_title = $(this).attr('title');

        $('.zoom').slideUp(500);
        $('.preview').fadeOut(500, function(){


            $('.preload').html(`<img src="${img_preview}">`);
            $('.preload img').imgpreload(function(){

                $('.preview').html(`<a href="${img_fullsize}" data-fancybox data-caption="${img_title}"><img src="${img_preview}" alt="${img_title}" /></a>`);
                $('.zoom').html(`<p><a href="${img_fullsize}" data-fancybox data-caption="${img_title}">Fullsize</a></p><p>${img_title}</p>`);
            
                $('.preview').fadeIn(500);
                $('.zoom').slideDown(500);
    
                updateThumbnails();
    
                $('[data-fancybox]').fancybox({
                    buttons: [
                        "zoom",
                        "share",
                        "fullScreen",
                        "download",
                        "close"
                    ],
                }); // fin du fancybox

            }); // fin du preaload
        
        }); // fin du fadeout

        
    }

    let datas;
    function showThumbnails(photos) {
        datas = photos;
        for (let photo in photos) {
            let title = photos[photo].title;
            let full = photos[photo].full;
            let thumb = photos[photo].thumb;

            $('.thumbnails').append(`<a href="${full}" title="${title}"><img src="${thumb}" alt="${title}" width="75" height="75" /></a>`);
        }

        const img_fullsize_first = $('.thumbnails a').first().attr('href');
        const img_preview_first = img_fullsize_first.replace('_fullsize', '_preview');
        const img_title_first = $('.thumbnails a').first().attr('title');

        $('.zoom').slideUp(500);
        $('.preview').fadeOut(500, function(){


            $('.preload').html(`<img src="${img_preview_first}">`);
            $('.preload img').imgpreload(function(){
                
                $('.preview').html(`<a href="${img_fullsize_first}" data-fancybox data-caption="${img_title_first}"><img src="${img_preview_first}" alt="${img_title_first}" /></a>`);
                $('.zoom').html(`<p><a href="${img_fullsize_first}" data-fancybox data-caption="${img_title_first}">Fullsize</a></p><p>${img_title_first}</p>`);
            
                $('.preview').fadeIn(500);
                $('.zoom').slideDown(500);
    
                updateThumbnails();
    
                $('[data-fancybox]').fancybox({
                    buttons: [
                        "zoom",
                        "share",
                        "fullScreen",
                        "download",
                        "close"
                    ],
                }); // fin du fancybox

            }); // fin du preaload
        
        }); // fin du fadeout
    }

    function fctError() {
        console.log('il y a une erreur');
    }

    function updateThumbnails() {
        $('.thumbnails a').each(function(){
            if ($('.preview a').attr('href') == $(this).attr('href')) {
                $(this).children().addClass('active');
                $(this).children().animate({'opacity': 0.6}, 500);
            } else {
                $(this).children().removeClass('active');
                $(this).children().animate({'opacity': 1}, 500);
            }
        });
    }


})(jQuery);