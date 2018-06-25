(function($){
    $(document).ready(function(){

        $('tbody tr:odd').addClass('impair');
        $('tbody tr:even').addClass('pair');

        $('tbody tr:even').hover(function(){
            $(this).toggleClass('hover pair');
        });
        $('tbody tr:odd').hover(function(){
            $(this).toggleClass('hover impair');
        })

    });
})(jQuery);