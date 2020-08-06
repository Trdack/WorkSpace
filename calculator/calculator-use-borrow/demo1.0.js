var fn = function (id) {
    return document.getElementById(id);
};



(function ($) {


    var buttons = $("base-panel").children
    console.log(buttons);
    var forEachBtn = function (btn) {
        //var text = btn.dataset.voice
        var text = "这个真的吗？";
        var audio = document.createElement('audio')
        audio.src = "https://fanyi.baidu.com/gettts?lan=zh&text=" + text + "&spd=5&source=web";
        audio.muted;
        document.body.appendChild(audio);
        audio.currentTime = 0;
        audio.play();
        btn.addEventListener('click', function () {})
    };
    for (var i = 0; i < buttons.length; i++) {
        forEachBtn(buttons[i]);
    }

    //代理： 对父级标签绑定事件，产生自己标签的作用。
    $("base-panel").onclick = function (e) {
        var evt = e || window.event; //w3c event && IE event
        var target = evt.target || evt.srcElement; //w3c target && IE target
        if (target.tagName.toUpperCase() === "A") {
            _switch(target.innerHTML);
        }

    };



})(fn);