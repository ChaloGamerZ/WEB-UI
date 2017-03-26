$(document).on({
    mouseenter: function () {
        $(this).addClass("z-depth-5");
    },

    mouseleave: function () {
        $(this).removeClass("z-depth-5");
    }
}, '.card');
