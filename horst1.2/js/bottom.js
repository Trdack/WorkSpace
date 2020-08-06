/* 当前使用版本为：bottom1.0.js 
/* 原创：初尘 
/* 日期：2020-5-3
/* 说明：
/* bottom.js用于封装bottom版块
/* 
/* 
/* 
/* 
/* 
/* 
/* 
/* 
 */

(function bottoms() {
    //页面id接口预载
    function fn(id) {
        return document.getElementById(id);
    }
    var allids;
    (function ($) {
        var body = document.body;
        allids = $("index").children;
    })(fn);
    //插入ID接口
    function fc(Id, Tag) {
        return Id = document.createElement(Tag);
    };
    //CSS
    function fncss() {}
    var bota = fc("bota", "div");
    var botb = fc("botb", "div");
    var botc = fc("botc", "div");
    var botd = fc("botd", "div");
    var bote = fc("bote", "div");
    bottom.appendChild(bota);
    bottom.appendChild(botb);
    bota.appendChild(botc);
    bota.appendChild(botd);
    bota.appendChild(bote);
    bota.id = "bota";
    botb.id = "botb";
    botc.id = "botc";
    botd.id = "botd";
    bote.id = "bote";
    bota.className = "bota";
    botb.className = "botb";
    botc.className = "botc";
    botd.className = "botd";
    bote.className = "bote";
    botb.innerHTML = "www.xktop.com|备案号:(新12345556676)";

    function ChangeSize() {
        // 获取窗口的宽度和高度，不包括滚动条
        var w = document.documentElement.clientWidth;
        var h = document.documentElement.clientHeight;
        if (w <= 1000) {
            console.log(w);
            bota.style.width = w + "px";
            botb.style.width = w + "px";
        } else {
            console.log("1000px");
            bota.style.width = "1000px";
            botb.style.width = "1000px";
        }
    }
    //第一次调用
    ChangeSize();
    // 将事件侦听器函数附加到窗口的resize事件
    window.addEventListener("resize", ChangeSize);
})();