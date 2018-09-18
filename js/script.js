var sections = [];
var activeSection = 0;
$(document).ready(function() {
    var banner = $('#section_banner');
    var stats = $('#block_information');
    var skills = $('#icons_block');
    var team = $('#photo_team');
    var feedback = $('#section_vidhuku');
    var activities = $('#hobby_activity');
    var portfolio = $('#portfolio-section');
    sections = [banner, stats, skills, team, feedback, activities, portfolio];
    $(document).bind('wheel', function (e) {
        var delta = e.originalEvent.deltaY;
        if (delta > 0) scroll('down');
        else scroll('up');
    });
    $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
        $(this).toggleClass('open');
    });
    $("#navigation li").click(function () {
        scroll(parseInt($(this).attr('id')))
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
    } else {
        activeSection = param;
        start(param);
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
        $('#'+activeSection).after(line);
        setTimeout(function () {
            $(document).bind('wheel', function (e) {
                var delta = e.originalEvent.deltaY;
                if (delta > 0) scroll('down');
                else scroll('up');
            });
        }, speed);
    }
}