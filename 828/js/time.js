

function compute() {
    var begin_time = new Date("2019/02/17 23:24:00");
    var now = new Date();
    // 秒数
    var time_diff = (now.getTime() - begin_time.getTime()) / 1000;
    var day_diff = Math.floor(time_diff / (24 * 3600));
    time_diff = time_diff % (24 * 3600);
    var hour_diff = Math.floor(time_diff / 3600);
    time_diff = time_diff % (3600);
    var min_diff = Math.floor(time_diff / 60);
    time_diff = time_diff % 60;
    var sec_diff = Math.floor(time_diff);

    var dateTime = '我们已经在一起了：' + day_diff + '天，' + hour_diff + '小时，' + min_diff + '分钟，' + sec_diff + '秒';
    var divNode = document.getElementById("our_time");
    divNode.innerHTML = dateTime;
}

window.setInterval("compute()",1000);