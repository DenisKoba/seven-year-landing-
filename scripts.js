$( document ).ready(function() {
    var docHeight = $(".js-pattern").height(),
        docWidth = $(".js-pattern").width(),
        $div = $(".js-pattern-element"),
        divWidth = $div.width(),
        divHeight = $div.height(),
        heightMax = docHeight - divHeight,
        widthMax = docWidth - divWidth;

    $div.css({
        left: Math.floor( Math.random() * widthMax ),
        top: Math.floor( Math.random() * heightMax )
    });
});