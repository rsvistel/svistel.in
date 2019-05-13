var sections = [];
var activeSection = 0;
var isMobile = false;
$(document).ready(function() {
    if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
        || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
        isMobile = true
    }
    $('[data-toggle="popover"]').popover({ trigger: "hover" });
    $('.section, .section1').each(function () {
       sections.push($(this));
    });
    if (!isMobile) {
        setTimeout(function () {
            for (i = 0; i < sections.length; i++) {
                if (sections[i].isInViewport() && i !== 0) {
                    scroll(i);
                } else if (sections[i].isInViewport() && i === 0) {
                    scroll(0)
                }
            }
        }, 1000);
    } else {
        $('body').bind('touchmove', function(e) {
            if ($('#menuToggle input').prop("checked") === true) {
                $('#menuToggle input').click()
            }
        });
    }
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
 // Scroll image
    $(".hobby-teaching-bottom-text-style").on("scroll", function () {
        var len = $(this)[0].scrollHeight;
        var scroll = $(this).scrollTop();
        if (scroll < len / 4) {
                $('.teacher-block-image').removeClass('active');
                $('.image1').attr('src','img/tourism/TR5.JPG').addClass('active');

        } else if (scroll < len / 2) {
            $('.teacher-block-image').removeClass('active');
            $('.image2').attr('src', 'img/tourism/T1.JPG').addClass('active');

        }else if (scroll < len / 4 * 3) {
            $('.teacher-block-image').removeClass('active');
                $('.image3').attr('src','img/tourism/TR5.JPG').addClass('active');

        } else if (scroll > 800) {
            $('.teacher-block-image').removeClass('active');
                $('.image4').attr('src','img/tourism/T1.JPG').addClass('active');

            }
        //} else if (scroll > 360) {
            //$('.teacher-block-image.section-two').attr('src', 'img/tourism/T1.JPG');
        //}
    });
     // Scroll image
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
    var temp = activeSection;
    if (param === 'down' && activeSection < sections.length-1) {
        activeSection++;
        start(activeSection);
    } else if (param === 'up' && activeSection > 0) {
        activeSection--;

        start(activeSection);
    } else if (param !== 'up' && param !== 'down') {
        if (activeSection >= 0 && activeSection <= sections.length-1) {
            activeSection = param;
            start(activeSection);
        }
    }
    if ($('#menuToggle input').prop("checked") === true) {
        $('#menuToggle input').click()
    }
    function start(i) {
        $('html, body').animate({
            scrollTop: sections[i].offset().top
        }, speed);
        $('.section').removeClass('shownext showprev');
        if (temp < i) {
            sections[i].addClass('shownext');
            $('.icon_block_information').addClass('bottom').removeClass('top');
        } else {
            sections[i].addClass('showprev');
            $('.icon_block_information').addClass('top').removeClass('bottom');
        }
        if (temp === 3) {
            $('.icon_block_information').addClass('bottom').removeClass('top');
        }
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
        if (sections[1].hasClass('shownext') || sections[1].hasClass('showprev')) {
            animateStatistics()
        }
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
    section.css('display', 'flex');
    $('#hobby_activity').hide();
    $('#menu_left').hide();
    $('.menu_right').hide();
    $(document).unbind('wheel');
    $('.heading-hobby').hide()
}
function closeHobby() {
    $('#travel-section').hide();
    $('#teaching-section').hide();
    $('#hobby_activity').show();
    $('#menu_left').show();
    $('.menu_right').show();
    bindScroll();
    $('.heading-hobby').show()
}
$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};
function animateStatistics() {
    if (activeSection === 1) {
        $('.icon_block_information .svg_text').mouseover();
        setTimeout(function () {
            animateStatistics()
        }, 2000);
    } else {
        return
    }

}
