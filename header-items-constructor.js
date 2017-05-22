
//Animated pattern

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

