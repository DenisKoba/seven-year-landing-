// animation of years

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
    }, 4000);
});

$(document).ready(function() {

    // handle Exit Popup
    var popUp,
        $body = $(document.body),
        showed = false;

    popUp = $('.js-seven-years-popup');

    if (popUp.length) {
        $body.find('.js-seven-years-popup-trigger')
            .bind('mouseenter', function (event) {
                posY = event.clientY;
            })

            .bind('mouseleave', function (event) {
                if (event.clientY < posY && !showed) {
                    popUp.show();
                    showed = true;
                }
            });


        //Close popup
        $('.js-seven-years-close-popup').click(function () {
            popUp.hide();
        });
    }
});


//Expand Sections

var accordionTab = document.querySelectorAll(".js-seven-years-expand-button");
var buttons = [accordionTab[0], accordionTab[1]];

buttons.forEach(function(item){
    item.addEventListener("click", function(){
        var expandArea = this.nextElementSibling;
        var buttonCross = this.childNodes[1];
        var buttonText = this.childNodes[3];
        expandArea.classList.toggle("activate-features-expander");
        buttonCross.classList.toggle("js-seven-years-rotate-cross");
        buttonText.classList.toggle("js-seven-years-change-color-name");
    });
});


// Team Slider

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

$(window).scroll( function(){
    var top_of_object = $('.js-animated-figure').offset().top;
    var top_of_window = $(window).scrollTop();
    if( top_of_window > top_of_object ){
        $(".js-seven-years-dinamic-figure").fadeIn();
    }
});