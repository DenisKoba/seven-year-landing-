//create items in header

var patternContainer = document.querySelector(".js-pattern");

var LandingPattern = function(item, name) {
    this.item = item;
    this.name = name;
}

var triangleWhite = new LandingPattern();
triangleWhite.name = "triangle-white";
triangleWhite.item = [patternContainer.children[0]];

var circleGray = new LandingPattern();
circleGray.name = "circle-gray";
circleGray.item = [patternContainer.children[1]];


var circleOrange = new LandingPattern();
circleOrange.name = "circle-orange";
circleOrange.item = [patternContainer.children[2]];

var squareWhite = new LandingPattern();
squareWhite.name = "square-white";
squareWhite.item = [patternContainer.children[3]];

var allItems = [triangleWhite, circleGray, circleOrange, squareWhite];

//start items animation in header

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