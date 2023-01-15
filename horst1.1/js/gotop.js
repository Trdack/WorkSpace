(function () {
    var roota = document.documentElement;
    var rootb = document.body;
    var to_top = document.getElementById('gotop');
    var images = document.createElement("img");
    to_top.appendChild(images);
    to_top.className = "gotop";
    to_top.style.cursor = "default";
    images.src = "./bg/up01.gif";
    images.id = "imga";
    images.className = "imgac";
    to_top.onmouseover = function as() {
        images.src = "./bg/up02.gif";
    }
    to_top.onmouseout = function bs() {
        images.src = "./bg/up01.gif";
    }
    var run;
    var top;
    var step;
    var all_interval = function loop() {
        if (run) {
            top -= step * 2;
            if (roota.scrollTop == 0) {
                rootb.scrollTop = top;
            } else {
                roota.scrollTop = top;
            }
            if (top <= 0) {
                run = false;
            }
        }
        if (roota.scrollTop == 0) {
            to_top.style.display = rootb.scrollTop > 100 ? 'block' : 'none';
        } else {
            to_top.style.display = roota.scrollTop > 100 ? 'block' : 'none';
        }
        requestAnimationFrame(loop);
    };
    all_interval();
    to_top.addEventListener('click', function () {
        run = true;
        if (roota.scrollTop == 0) {
            top = rootb.scrollTop;
        } else {
            top = roota.scrollTop;
        }
        step = top / 30; // 60Hz
    });
}());