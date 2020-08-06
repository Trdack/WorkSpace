/* 当前使用版本为：ps_css1.0.js */
/* 作者：初尘 */
/* 日期：2020-5-3 */
/* ps_css.js用于PC端自适应页面布局 */

//页面id接口预载


(function () {
    function fn(id) {
        return document.getElementById(id);
    }
    var aIds;
    var bIds = new Array();
    (function ($) {
        var body = document.body;
        aIds = $("index").children;
        for (var i = 0; i < aIds.length; i++) {
            bIds[i] = $(aIds[i].id).children;
        }
    })(fn);

    console.log("pc_css.js页面：aIds");
    console.log(aIds);
    console.log(bIds);

    // 定义事件侦听器函数
    function displayWindowSize() {
        // 获取窗口的宽度和高度，不包括滚动条
        var w = document.documentElement.clientWidth;
        var h = document.documentElement.clientHeight;

        function redirectPage() {
            var wjb51 = screen.width;
            var hjb51 = screen.height;
            //console.log("经系统检测，你的屏幕分辨率为 " + wjb51 + "*" + hjb51);
        }
        redirectPage();
        // 在div元素中显示结果
        //console.log("宽: " + w + ", " + "高: " + h);
        var body = document.documentElement;
        var width = (w - 10);
        if (w <= 1000) {
            body.style.backgroundColor = "#efefef";
            tops.style.width = width + "px";
            locations.style.width = width + "px";
            middle.style.width = width + "px";
        } else {
            body.style.backgroundColor = "#edf6ff";
            tops.style.width = "1000px";
            locations.style.width = "1000px";
            middle.style.width = "1000px";
        }
    }
    // 将事件侦听器函数附加到窗口的resize事件
    window.addEventListener("resize", displayWindowSize);
    // 第一次调用该函数
    displayWindowSize();
})();