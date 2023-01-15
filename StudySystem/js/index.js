/* 
    文件名：index.js
    版  本：2.0正式版
    作  者：初尘
    说  明：用于为页面动态写入所有js和css文件入口
*/
(function index() {
    var Lcs = null;

    function linkscript() {};
    linkscript.prototype = {
        H: document.head,
        Las: [], //linkas
        L: [],
        Sas: [], //scriptas
        S: [],
        Links: "",
        funas: function () {
            for (var i = 0; i < Lcs.Las.length; i++) {
                Lcs.L[i] = Lcs.Las[i];
                Lcs.Las[i] = document.createElement("link");
                Lcs.H.appendChild(Lcs.Las[i]);
                Lcs.Las[i].rel = "stylesheet";
                Lcs.Las[i].type = "text/css";
                Lcs.Las[i].href = Lcs.Links + "css/" + Lcs.L[i] + ".css";
            }
            for (var i = 0; i < Lcs.Sas.length; i++) {
                Lcs.S[i] = Lcs.Sas[i];
                Lcs.Sas[i] = document.createElement("script");
                Lcs.H.appendChild(Lcs.Sas[i]);
                Lcs.Sas[i].type = "text/javascript";
                Lcs.Sas[i].defer = "defer";
                Lcs.Sas[i].src = Lcs.Links + "js/" + Lcs.S[i] + ".js";
            }
        },
        funLinks: function () {
            var Urlas = decodeURIComponent(location.href.replace(/^.*=/, "")); //获取文件url;
            var urlArr = Urlas.split("/"); //将文件url以/分割并存入数组;
            var links = "";
            if (Urlas.indexOf("http:") == -1) { //本地打开
                var linknums = urlArr.length - (urlArr.indexOf("StudySystem") + 1); //获取返回层
            } else { //站点打开
                var linknums = urlArr.length - 3; //获取返回层
            }
            for (var i = 0; i < linknums; i++) {
                Lcs.Links = "./" + links;
                links += "../";
            }
        },
        browser: {
            versions: function () {
                var u = navigator.userAgent;
                return {
                    trident: u.indexOf('Trident') > -1, //IE内核
                    presto: u.indexOf('Presto') > -1, //opera内核
                    webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
                    gecko: u.indexOf('Firefox') > -1, //火狐内核Gecko
                    mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
                    ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios
                    android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android
                    iPhone: u.indexOf('iPhone') > -1, //iPhone
                    iPad: u.indexOf('iPad') > -1, //iPad
                    webApp: u.indexOf('Safari') > -1 //Safari
                };
            }
        },
        start: function () {
            Lcs.funLinks(); //获取页面层数;
            Lcs.browser.versions(); //获取客户端类型;
            var bvs = Lcs.browser.versions();
            if (bvs.mobile || bvs.ios || bvs.android || bvs.iPhone || bvs.iPad) { //移动端
                Lcs.Las = []; //移动端css文件
                Lcs.Sas = []; //移动端js文件
            } else { //PC端
                Lcs.Las = ["study"]; //PC端css文件
                Lcs.Sas = ["StudySystem"]; //PC端js文件
            }
            Lcs.funas();
        }

    }
    Lcs = new linkscript();
    Lcs.start();
})();