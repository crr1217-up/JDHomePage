(function () { 
    var timer = null;
    $('.service_frame').mouseenter(function () {
        $('.service_frame').removeClass('service_frame_on');
        $(this).addClass('service_frame_on');
        $('.icon-info').addClass('frame-on');
        
    }).mouseleave(function () {
        timer = setTimeout(function () {
            $(this).removeClass('service_frame_on');
            $('.icon-info').removeClass('frame-on');
        }, 500)
    });

    $('.service-dropdown').mouseenter(function () {
        clearTimeout(timer);
    })
    //     .mouseleave(function () {
    //     $(this).removeClass('service_frame_on');
    //     $('.icon-info').removeClass('frame-on');
    // });

    $('.off').click(function (e) {
        e.preventDefault();
        $('.service_frame_on').removeClass('service_frame_on');
        $('.icon-info').removeClass('frame-on');
    });
}())