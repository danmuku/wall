
var firebase = new Firebase('https://dazzling-fire-9662.firebaseio.com/' + 'sogou-geekpark');

firebase.on('child_added', function (snapshot) {
    var message = snapshot.val();
    if (message.length > 35) {
        message = message.substr(0, 35) + "...";
    }
    $(".s_show").append("<div>" + message + "</div>");
    refresh_screen();
});

//初始化弹幕
function refresh_screen() {
    var _width = $(window).width();
    var _height = $(window).height();

    var _top = Math.random() * (_height);
    if (_top > _height - 65) {
        _top += 65;
    }

    var time = Math.random() * 20000 + 10000;
 
    //设定文字的初始化位置
    $(".s_show").children("div:last-child").css({
        left: _width,
        top: _top,
        color: getRandomColor()
    });

    $(".s_show").children("div:last-child").animate({ left: "-" + _width + "px" }, time, function () {
        $(this).remove();
    });
}

//随机获取颜色值
function getRandomColor() {
    return '#' + (function (h) {
        return new Array(7 - h.length).join("0") + h
    })((Math.random() * 0x1000000 << 0).toString(16))
}
