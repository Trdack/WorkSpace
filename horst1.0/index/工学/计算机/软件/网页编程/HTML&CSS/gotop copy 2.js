/* var gotop = document.getElementById("gotop");
gotop.className = "gotop";
gotop.innerHTML = "返回顶部";
gotop.onmouseover = function onMouse() {
    this.style.cursor = "default";
} */
/* 
var h_Top;
window.onscroll = function gotoTop() {
    h_Top = document.body.scrollTop;

    if (h_Top < 200) {
        gotop.style.opacity = 0;
    } else {
        gotop.style.opacity = 1;
    }
    return h_Top;
}

gotop.onclick = setTimeout(function hsc() {
    document.body.onscroll = "0px";
}, 30);

 */

(function () {
    var root = document.body;
    var to_top = document.getElementById('gotop');
    to_top.className = "gotop";
    to_top.innerHTML = "↑";
    to_top.style.cursor = "default";
    var run;
    var top;
    var step;
    var all_interval = function loop() {
        if (run) {
            top -= step * 2;
            root.scrollTop = top;
            if (top <= 0) {
                run = false;
            }
        }
        to_top.style.display = root.scrollTop > 100 ? 'block' : 'none';
        requestAnimationFrame(loop);
    };
    all_interval();
    to_top.addEventListener('click', function () {
        run = true;
        top = root.scrollTop;
        step = top / 30; // 60Hz
    });
}());








/* 
var goTop = document.getElementById('to-top');

function setDisplay() {
    curTop = document.documentElement.scrollTop || document.body.scrollTop;
    curHeight = document.documentElement.clientHeight || document.body.clientHeight;
    goTop.style.display = curTop > curHeight ? 'block' : 'none';
}
window.onscroll = setDisplay;
goTop.onclick = function () {
    // 点击按钮，返回顶部，此时让按钮消失
    this.style.display = 'none'; // 只设置display不行，往上走的时候，window.onscroll事件会触发，还是到顶部才能隐藏,需要清除onscroll事件
    window.onscroll = null;
    var duration = 500,
        interval = 10,
        target = document.documentElement.scrollTop || document.body.scrollTop,
        step = (target / duration) * interval;
    var timer = setInterval(function () {
        var curTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (curTop === 0) {
            window.clearInterval(timer);
            window.onscroll = setDisplay; // 回到顶部时，再给window.onscroll重新绑定方法，待下一次执行
            return;
        }
        curTop -= step;
        document.documentElement.scrollTop = curTop;
        document.body.scrollTop = curTop;
    }, interval);
}; */