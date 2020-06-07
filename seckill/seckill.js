(function () {

    var time1 = new Date('2020.3.1 23:00:00').getTime();
    var timer = setInterval(function () {
        var nowTime = new Date().getTime();
        var disTime = time1 - nowTime;
        if (disTime > 0) {
            var hour = Math.floor(disTime / 1000 / 60 / 60);
            var minutes = Math.floor(disTime / 1000 / 60 - hour * 60);
            var second = Math.floor(disTime / 1000 - hour * 60 * 60 - minutes * 60);
            if (hour < 10) {
                hour = '0' + hour;
            }
            if (minutes < 10) {
                minutes = '0' + minutes;
            }
            if (second < 10) {
                second = '0' + second;
            }
            $('.sec-hour').text(hour);
            $('.sec-minutes').text(minutes);
            $('.sec-second').text(second);
        } else { 
            $('.sec-hour').text('00');
            $('.sec-minutes').text('00');
            $('.sec-second').text('00');
            clearInterval(timer);
        }
    },1000);


 }())