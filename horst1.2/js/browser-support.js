/* 当前使用版：browser-support.js */
/* 创建日期：2020-5-13 */
/* 初尘 */

(function () {
    if (document.getElementById("browser-support")) {
        var thebs = document.getElementById("browser-support");
        var imges = thebs.innerHTML.split(",");
        thebs.innerHTML = "";
        var imgas = new Array();
        for (var i = 0; i < imges.length; i++) {
            imgas[i] = document.createElement("img");
            thebs.appendChild(imgas[i]);
            imgas[i].src = "./../../img/browser-support/compatible_" + imges[i] + ".gif";
            imgas[i].style.margin = "10px 0px 0px 5px";
            if (imges[i].indexOf("no") == -1) {
                if (imges[i].indexOf("ie") != -1) {
                    imgas[i].title = "Internet Explorer支持";
                } else if (imges[i].indexOf("firefox") != -1) {
                    imgas[i].title = "Firefox支持";
                } else if (imges[i].indexOf("opera") != -1) {
                    imgas[i].title = "Opera支持";
                } else if (imges[i].indexOf("chrome") != -1) {
                    imgas[i].title = "Google Chrome支持";
                } else if (imges[i].indexOf("safari") != -1) {
                    imgas[i].title = "Safari支持";
                }
            } else {
                if (imges[i].indexOf("ie") != -1) {
                    imgas[i].title = "Internet Explorer不支持";
                } else if (imges[i].indexOf("firefox") != -1) {
                    imgas[i].title = "Firefox不支持";
                } else if (imges[i].indexOf("opera") != -1) {
                    imgas[i].title = "Opera不支持";
                } else if (imges[i].indexOf("chrome") != -1) {
                    imgas[i].title = "Google Chrome不支持";
                } else if (imges[i].indexOf("safari") != -1) {
                    imgas[i].title = "Safari不支持";
                }
            }
        }
    }
})();