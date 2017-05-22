$( document ).ready(function() {
    // запускаю годы
    $(".js-seven-years-dinamic-figure").fadeOut();

    function activateYears(n){
        var currentYear = $(n).attr('data-id');

        $('.js-year-text').hide();
        $('.js-year-text[data-id="'+currentYear+'"]').fadeIn();
        $('.js-year').removeClass('js-year-selected');
        $(n).addClass('js-year-selected');

    }

    activateYears($('.js-year-text').first());

    $('.js-year').on('click', function(e) {
        clearInterval(onClickSetTimeoutID);
        activateYears(this);

    });

    $(function() {
        var i = 0;
        var $target = $('.js-year');
        onClickSetTimeoutID = setInterval(function(){
            activateYears($target.eq(i).addClass('js-year-selected'));
            if ( i == $target.length - 1 ) {
                i = 0;
            } else {
                i++;
            }
        }, 2000);
    });
});

var divisor = document.getElementById("team-section-divisor"),
    handle = document.getElementById("team-section-handle"),
    slider = document.getElementById("team-section-input");

function moveDivisor() {
    handle.style.left = slider.value+"%";
    divisor.style.width = slider.value+"%";
}

window.onload = function() {
    moveDivisor();
};

$('.team-section-input[type=range]').on('input', function(e){
    var min = e.target.min,
        max = e.target.max,
        val = e.target.value;

    $(e.target).css({
        'backgroundSize': (val - min) * 100 / (max - min) + '% 100%'
    });
}).trigger('input');

    /*var onClickSetTimeoutID;*/

$(window).scroll( function(){
    /* Check the location of each desired element */
    $('.js-animated-figure').each( function(i){
        var top_of_object = $(this).offset().top;
        var top_of_window = $(window).scrollTop();
        /* If the object is completely visible in the window, fade it it */
        if( top_of_window > top_of_object ){
            $(".js-seven-years-dinamic-figure").fadeIn();
        }
    });
});





