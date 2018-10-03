var sections = [];
var activeSection = 0;
$(document).ready(function() {
    $('.section').each(function () {
       sections.push($(this));
    });
    bindScroll();
    $('.navigation-item').click(function () {
        scroll(parseInt($(this).attr('scrollTo')))
    });
    $('html, body').animate({
        scrollTop: sections[0].offset().top
    }, 0);

    // Hobbies
    $('#travel').click(function () {
        openHobby($('#travel-section'))
    });
    $('#teaching').click(function () {
        openHobby($('#teaching-section'))
    });
    $('#close-traveling').click(function () {
        closeHobby()
    });
    $('#close-teaching').click(function () {
        closeHobby()
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
    } else if (param !== 'up' && param !== 'down') {
        if (activeSection >= 0 && activeSection <= sections.length-1) {
            activeSection = param;
            start(param);
        }
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

function openHobby(section) {
    section.show();
    $('#hobby_activity').hide();
    $('#menu_left').hide();
    $('.menu_right').hide();
    $(document).unbind('wheel');
}
function closeHobby() {
    $('#travel-section').hide();
    $('#teaching-section').hide();
    $('#hobby_activity').show();
    $('#menu_left').show();
    $('.menu_right').show();
    bindScroll()
}