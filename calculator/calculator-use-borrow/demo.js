var fn = function (id) {
    return document.getElementById(id);
};

Math.fix = function (n) {
    return 1 / n;
};

var Util = {
    "√": "sqrt",
    "1/x": "fix"
};


(function ($) {

    var result = $("result"),
        part1 = $("first-part"),
        calcReady, functionReady;

    var sizeChange = function () {
        if (result.innerHTML.length <= 12) {
            result.style.fontSize = "22px";
            if (!result.innerHTML) {
                result.innerHTML = 0;
            }
        } else {
            result.style.fontSize = "18px";
        }
    };
    var toggle = function () {
        part1.innerHTML += result.innerHTML.charAt(0) === "-" ?
            "(" + result.innerHTML + ")" :
            result.innerHTML;
    };

    var _switch = function (chr) {
        //console.log(chr);
        switch (chr) {
            case "←":
                //去掉最后一个字符 
                result.innerHTML = result.innerHTML.substring(0, result.innerHTML.length - 1);
                sizeChange();
                break;
            case "CE":
                result.innerHTML = "0";
                calcReady = false;
                break;
            case "C":
                result.innerHTML = "0";
                part1.innerHTML = "";
                calcReady = false;
                break;
            case "±":
                //正负号切换
                result.innerHTML = result.innerHTML.charAt(0) === '-' ?
                    result.innerHTML.substring(1, result.innerHTML.length) :
                    "-" + result.innerHTML
                break;
            case "√":
            case "1/x":
                functionReady || toggle();
                part1.innerHTML = Util[chr] + "(" + part1.innerHTML + ")";
                result.innerHTML = eval("with(Math){(" + part1.innerHTML + ")}");
                sizeChange();
                calcReady = true;
                functionReady = true;
                break;

            case "/":
            case "*":
            case "-":
            case "+":
            case "%":
                if (calcReady) { //如果表达式部分以符号结尾
                    part1.innerHTML = !part1.innerHTML.split(/[+-\\*\\/]+/).pop() ?
                        part1.innerHTML.substring(0, part1.innerHTML.length - 1) + chr :
                        part1.innerHTML + chr;
                } else { //否则，要先追加数字进行计算并获得结果，然后追加符号
                    toggle();
                    result.innerHTML = eval("with(Math){(" + part1.innerHTML + ")}");
                    sizeChange();
                    part1.innerHTML += chr;
                    calcReady = true;
                }
                functionReady = false;
                break;

            case ".":
                if (calcReady) {
                    result.innerHTML = "0";
                    calcReady = false;
                }

                if (result.innerHTML.length < 18 && result.innerHTML.indexOf(".") == -1) {
                    result.innerHTML += chr;
                }
                break;
            case "=":
                toggle();
                result.innerHTML = eval("with(Math){(" + part1.innerHTML + ")}");
                part1.innerHTML = "";
                sizeChange();
                break;
            default: //数字
                if (calcReady) {
                    result.innerHTML = "0";
                    calcReady = false;
                }
                if (functionReady) {
                    part1.innerHTML = "";
                }


                if (result.innerHTML.length < 18) {
                    result.innerHTML = result.innerHTML == "0" ? chr : result.innerHTML + chr;
                }
                sizeChange();
        }
    };

    var buttons = $("base-panel").children
    var forEachBtn = function (btn) {
        var text = btn.dataset.voice
        var audio = document.createElement('audio')
        audio.src = "https://fanyi.baidu.com/gettts?lan=zh&text=" + text + "&spd=5&source=web"
        document.body.appendChild(audio);
        var afterEq
        if (btn.innerText === '=') {
            afterEq = document.createElement('audio')
            document.body.appendChild(afterEq);
        }

        btn.addEventListener('click', function () {
            audio.currentTime = 0;
            audio.play().then(function () {
                var text = result.innerText;
                afterEq.src = "https://fanyi.baidu.com/gettts?lan=zh&text=" + text + "&spd=5&source=web"
                afterEq.play()
            });
        })

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

/*
var fn = function(jq){
	alert(jq);	
};

fn(jQuery);
*/


(function ($) {
    if (!$) return;
    $(".header .mini").on("click", function () {
        $("#calc").animate({
            height: 28,
            left: 114,
            bottom: 160
        }, 500, "swing", function () {
            $(".header").one("mouseover", function () {
                $("#calc").animate({
                    height: 322,
                    left: "50%",
                    bottom: "50%"
                });
            });
        });
    });

    $(".header .close").on("click", function () {
        $("#calc").addClass("rotate");
        setTimeout(function () {
            $("#calc").remove();
        }, 1000);
    });



})(jQuery);