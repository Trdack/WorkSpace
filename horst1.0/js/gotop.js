(function () {
    var root = (document.documentElement || document.body);
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