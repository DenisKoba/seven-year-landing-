


/*function activateHexagons(n){
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
 });*/

var versionsLeft = document.querySelector("#js-seven-years-left-button");
var versionsRight = document.querySelector("#js-seven-years-right-button");
var sevenYearsPager = document.getElementsByClassName("js-seven-years-slide-pager");
var sevenYearsSlide = document.getElementsByClassName("js-seven-years-slide");


var slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
 var i;
 if (n > sevenYearsSlide.length) {slideIndex = 1}
 if (n < 1) {slideIndex = sevenYearsSlide.length}
 for (i = 0; i < sevenYearsSlide.length; i++) {
  sevenYearsSlide[i].style.display = "none";
 }
 for (i = 0; i < sevenYearsPager.length; i++) {
  sevenYearsPager[i].className = sevenYearsPager[i].className.replace(" js-seven-years-slide-pager-selected", " ");
 }
 sevenYearsSlide[slideIndex-1].style.display = "block";
 sevenYearsPager[slideIndex-1].className += " js-seven-years-slide-pager-selected";
}

versionsLeft.onclick = function  () {
 showSlides(slideIndex += -1);
}


versionsRight.onclick = function  () {
 showSlides(slideIndex += 1);
}


function currentDiv(n) {
 showSlides(slideIndex = n);
}