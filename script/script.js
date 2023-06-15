$(document).ready(function() {
    // tab menu
    $('.tab-menu li').click(function() {
        const tab_id = $(this).attr('data-tab');

        $('.tab-menu li').removeClass('active');
        $('.tab-cont').removeClass('active');

        $(this).addClass('active');
        $('#'+tab_id).addClass('active');
    });

    // sub tab
    $('.tab-sort li').click(function() {
        const tab_id = $(this).attr('data-tab');

        $('.tab-sort li').removeClass('active');
        $('.sort-cont').removeClass('active');

        $(this).addClass('active');
        $('#'+tab_id).addClass('active');
    });
});