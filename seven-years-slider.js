


function activateHexagons(n){
 var currentHexagon = $(n).attr('data-id');
 $target = $('.js-seven-years-slide-pager');

 $('.js-seven-years-slide').hide();
 $('.js-seven-years-slide[data-id="'+currentHexagon+'"]').fadeIn();
 }

 activateHexagons($('.js-seven-years-slide').first());


 $(".js-seven-years-left-button").on('click', function(e) {
 clearInterval(onClickSetTimeoutID);

 var slideIndex = 1;
 var x = $('.js-seven-years-slide');
 showSlides(slideIndex);

 //прописываем какой слайд показывать при загрузке
 function showSlides(n) {
 if (n < 1) {
 slideIndex = x.length
 }  // если slideIndex меньше 1, то slideIndex = кол-ву слайдов (3). То есть, если отображается слайд с индексом 1 (первй слайд), ты кликаешь влево (-1) и значение становится меньше 1, то тебя отправляет на 3 слайд.

 if (slideIndex > x.length) {slideIndex = 1}
 }
 });

 $(function() {
 var i = 0;
 onClickSetTimeoutID = setInterval(function(){
 $target.removeClass('js-seven-years-slide-pager-selected');
 activateHexagons($target.eq(i).addClass('js-seven-years-slide-pager-selected'));
 if ( i == $target.length - 1 ) {
 i = 0;
 } else {
 i++;
 }
 }, 4000);
 });