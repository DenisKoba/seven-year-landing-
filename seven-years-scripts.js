$( document ).ready(function() {
    // запускаю годы

    function activateYears(n){
        var currentYear = $(n).attr('data-id');

        $('.js-year').removeClass('js-year-selected');
        $(n).addClass('js-year-selected');
        $('.js-year-text').hide();
        $('.js-year-text[data-id="'+currentYear+'"]').show();
    }

    activateYears($('.js-year').first());


    $('.js-year').on('click', function(e) {
        clearInterval(onClickSetTimeoutID);
        activateYears(this);

    });

    $(function() {
        var i = 0;
        var $target = $('.js-year');
        onClickSetTimeoutID = setInterval(function(){
            $target.removeClass('js-year-selected');
            activateYears($target.eq(i).addClass('js-year-selected'));
            if ( i == $target.length - 1 ) {
                i = 0;
            } else {
                i++;
            }
        }, 5000);
    });

});




