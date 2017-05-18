/**
 * Created by griffin on 5/13/17.
 */
$( document ).ready(function() {

    var patternContainer = document.querySelector(".js-pattern");

    class landingPattern{
        constructor(item, name) {
            this.item = item;
            this.name = name;
        }
    }

    var triangleWhite = new landingPattern();
    triangleWhite.name = "triangle-white";
    triangleWhite.item = [patternContainer.children[0]];

    var circleGray = new landingPattern();
    circleGray.name = "circle-gray";
    circleGray.item = [patternContainer.children[1]];


    var circleOrange = new landingPattern();
    circleOrange.name = "circle-orange";
    circleOrange.item = [patternContainer.children[2]];

    var squareWhite = new landingPattern();
    squareWhite.name = "square-white";
    squareWhite.item = [patternContainer.children[3]];

    var allItems = [triangleWhite, circleGray, circleOrange, squareWhite];

    allItems.forEach(function (i, item, arr){
        for(i = 0; i < 3; i++){
            patternElement = document.createElement("i");
            patternElement.setAttribute("class", "js-pattern-element");
            patternElement.className = patternElement.className + " " + arr[item].name;
            patternContainer.appendChild(patternElement);
        }
        $(".js-pattern-element").each(function () {
            var randomtop = Math.floor(Math.random() * 500);
            var randomleft = Math.floor(Math.random() * 1000);
            $(this).css({
                "top": randomtop,
                "left": randomleft
            });
        });
    });
});




    $(".js-seven-years-expand-button").click( function () {
        $this = $(this);
        $target =  $this.parent().find(".js-seven-years-expand-area");
        $target.toggleClass("activate-features-expander");
        /*$(".js-seven-years-expand-button-cross").toggleClass("js-seven-years-rotate-cross");
        $(".js-seven-years-expand-button-name").text($(".js-seven-years-expand-button-name").text() == 'Learn more' ? 'Close' : 'Learn more').toggleClass("js-seven-years-change-color-name");*/
    })

/*

var accordionTab = $(".js-seven-years-expand-button");
var buttons = [accordionTab[0], accordionTab[1]];

buttons.forEach(function(item){
    item.addEventListener("click", function(){
        $(".js-seven-years-expand-area").toggleClass("activate-features-expander");
        $(".js-seven-years-expand-button-cross").toggleClass("js-seven-years-rotate-cross");
        $(".js-seven-years-expand-button-name").text($(".js-seven-years-expand-button-name").text() == 'Learn more' ? 'Close' : 'Learn more').toggleClass("js-seven-years-change-color-name");
    });
});*/
