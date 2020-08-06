/* 使用版本为：index_1.3.js */

/* 获取页面在网站中的位置 */
(function index() {
    var Links;
    (function () {
        var Urlas = decodeURIComponent(location.href.replace(/^.*=/, ""));
        //var Urlbs = decodeURIComponent(location.pathname.replace(/^.*=/, ""));
        //var locations = decodeURIComponent(location.host.replace(/^.*=/, ""));
        //var names = Urlbs.substr(Urlas.lastIndexOf("/") + 1);
        var URLs = Urlas.split("/");
        if (Urlas.indexOf("http:") == -1) { //本地打开
            //console.log("本地打开！");
            var linknums = URLs.length - (URLs.indexOf("StudySystem1.0") + 1);
        } else { //站点打开
            //console.log("站点打开！");
            var linknums = URLs.length - 3;
        }
        var links = "";
        for (var i = 0; i < linknums; i++) {
            Links = "./" + links;
            links += "../";
        }
    })();
    (function () {
        var Lcs = null;
        //建立构造函数Lcs，在head中插入<link>标签和<script>标签
        function linkscript() {}
        linkscript.prototype = {
            H: document.head,
            Las: [], //linkas
            L: [],
            Sas: [], //scriptas
            S: [],
            funas: function () {
                for (var i = 0; i < this.Las.length; i++) {
                    this.L[i] = this.Las[i];
                    this.Las[i] = document.createElement("link");
                    this.H.appendChild(this.Las[i]);
                    this.Las[i].rel = "stylesheet";
                    this.Las[i].type = "text/css";
                    this.Las[i].href = Links + "css/" + this.L[i] + ".css";
                }
                for (var i = 0; i < this.Sas.length; i++) {
                    this.S[i] = this.Sas[i];
                    this.Sas[i] = document.createElement("script");
                    this.H.appendChild(this.Sas[i]);
                    this.Sas[i].defer = "defer";
                    this.Sas[i].type = "text/javascript";
                    this.Sas[i].src = Links + "js/" + this.S[i] + ".js";
                }
            }
        }


        /* 获取浏览器信息 */
        var browser = {
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
            }()
        }


        /* 判断是mabile还是pc */
        if (browser.versions.mobile || browser.versions.ios || browser.versions.android || browser.versions.iPhone || browser.versions.iPad) {
            Lcs = new linkscript();
            Lcs.Las = ["Mmiddle", "Mabile"];
            Lcs.Sas = ["mabile", "location"];
            Lcs.funas();
        } else {
            Lcs = new linkscript();
            Lcs.Las = ["study"];
            Lcs.Sas = ["html_tag", "keydown", "divdowns", "study"];
            Lcs.funas();
        }
    })();
})();