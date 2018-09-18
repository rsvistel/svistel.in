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
        scroll();
    });
    $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
        $(this).toggleClass('open');
    });
});
function scroll(direction) {
    var speed = 2000;
    if (direction === 'down' && activeSection < sections.length-1) {
        activeSection++;
        start()
    } else if (direction === 'up' && activeSection > 0) {
        activeSection--;
        start()
    }
    function start() {
        $('html, body').animate({
            scrollTop: sections[activeSection].offset().top
        }, speed);
        $(document).unbind('wheel');
        setTimeout(function () {
            $(document).bind('wheel', function (e) {
                var delta = e.originalEvent.deltaY;
                if (delta > 0) scroll('down');
                else scroll('up');
            });
        }, speed);
    }
}