var sections = [];
var activeSection = 0;
$(document).ready(function() {
    $('.section').each(function () {
       sections.push($(this));
    });
    bindScroll();
    $(".navigation-item").click(function () {
        scroll(parseInt($(this).attr('scrollTo')))
    });
});
function scroll(param) {
    var speed = 2000;
    if (param === 'down' && activeSection < sections.length-1) {
        activeSection++;
        start(activeSection)
    } else if (param === 'up' && activeSection > 0) {
        activeSection--;
        start(activeSection)
    } else if (param !== null && activeSection >= 0 && activeSection <= sections.length-1) {
        activeSection = param;
        start(param);
    }
    if ($('#menuToggle input').prop("checked") === true) {
        $('#menuToggle input').click()
    }
    function start(i) {
        $('html, body').animate({
            scrollTop: sections[i].offset().top
        }, speed);
        $(document).unbind('wheel');
        var line = '<li id="bottomline" style="padding: 0"><div class="bottomline"></div></li>';
        $('#bottomline .bottomline').animate({
            height: 0
        },1000);
        $('#navigation .navigation-item').each(function () {
            if (parseInt($(this).attr('scrollTo')) === activeSection) {
                $(this).after(line);
            }
        });
        setTimeout(function () {
            bindScroll()
        }, speed);
    }
}
function bindScroll() {
    $(document).bind('wheel', function (e) {
        var delta = e.originalEvent.deltaY;
        if (delta > 0) scroll('down');
        else scroll('up');
    });
}
