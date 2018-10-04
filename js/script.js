var sections = [];
var activeSection = 0;
$(document).ready(function() {
    $('.section').each(function () {
       sections.push($(this));
    });
    setTimeout(function () {
        for (i = 0; i < sections.length; i++) {
            if (sections[i].isInViewport() && i !== 0) {
                scroll(i);
            } else if (sections[i].isInViewport() && i === 0) {
                bindScroll()
            }
        }
    },1000);
    $('.navigation-item').click(function () {
        scroll(parseInt($(this).attr('scrollTo')))
    });

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

    // Validate Form
    $('#submit_button').click(function () {
        var valid = true;
        var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
        $('#contact_form input, #contact_form textarea').each(function () {
            if (!$(this).val()) {
                valid = false;
                var id = $(this).attr('id') + '_validation';
                $('#'+id).text("The field can't be empty")
            } else {
                var id = $(this).attr('id') + '_validation';
                $('#'+id).text("")
            }
        });
        if (!testEmail.test($('#email').val())) {
            valid = false;
            $('#email_validation').text("Email is invalid")
        }
        if (valid) {
            $('#contact_form').submit();
        }
    });
});
function scroll(param) {
    var speed = 1500;
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
        $('#navigation li').css('pointer-events', 'none');
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
            $('#navigation li').css('pointer-events', 'auto');
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
$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};