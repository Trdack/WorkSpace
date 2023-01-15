function test() {
    var roota = document.docuemntElemet;
    var rootb = document.body;
    var has = window.screen.availHeight;
    var hbs = window.screen.availWidth;
    var lastTouchEnd = 0;
    document.documentElement.addEventListener('touchend', function (event) {
        var now = Date.now();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);
}
test();
/*     window.alert("屏幕可用工作区域高度：" + has + "\n屏幕可用工作区域宽度：" + hbs);
    // 判断苹果、安卓、pc
    if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) { //判断iPhone|iPad|iPod|iOS
        //window.location.href = "iPhone.html";
        window.alert("这是iPhone|iPad|iPod|iOS客户端！");
    } else if (/(Android)/i.test(navigator.userAgent)) { //判断Android
        // window.location.href = "Android.html";
        window.alert("这是Android客户端！");
    } else { //pc
        // window.location.href = "pc.html";
        window.alert("这是PC客户端！");
    }; */