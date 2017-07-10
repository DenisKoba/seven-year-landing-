// Versions slider

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
