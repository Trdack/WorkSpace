/* 获取页面在网站中的位置 */
var Links;
(function () {
    var Urlas = decodeURIComponent(location.pathname.replace(/^.*=/, ""));
    var Urlbs = decodeURIComponent(location.href.replace(/^.*=/, ""));
    var locations = decodeURIComponent(location.host.replace(/^.*=/, ""));
    //console.log(Urlas);
    //console.log(Urlbs);
    //console.log(typeof (Urlbs));
    var URLs = Urlbs.split("/");
    var names = Urlbs.substr(Urlbs.lastIndexOf("/") + 1);
    //console.log("端口" + locations);
    //console.log(URLs);
    //console.log(names);
    var linknums = URLs.length - 3;
    //console.log(linknums);
    var links = "";
    for (var i = 0; i < linknums; i++) {
        Links = "./" + links;
        links += "../";
    }
    //console.log(Links);
})();


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

// 定义事件侦听器函数
function displayWindowSize() {
    // 获取窗口的宽度和高度，不包括滚动条
    var w = document.documentElement.clientWidth;
    var h = document.documentElement.clientHeight;

    function redirectPage() {
        var wjb51 = screen.width;
        var hjb51 = screen.height;
        //alert("经系统检测，你的屏幕分辨率为 " + wjb51 + "*" + hjb51 + "by 脚本之家jb51.net");
    }
    redirectPage();
    // 在div元素中显示结果
    //console.log("宽: " + w + ", " + "高: " + h);
    var body = document.documentElement;
    //console.log(w);
    if (w <= 600) {
        //body.style.backgroundColor = "#fff";
    } else if (w <= 700) {
        //body.style.backgroundColor = "#000";
    } else if (w <= 800) {
        //body.style.backgroundColor = "#f00";
    } else if (w <= 900) {
        //body.style.backgroundColor = "#f0f";
    } else if (w <= 1000) {
        //body.style.backgroundColor = "#00f";
    } else if (w <= 1100) {
        //body.style.backgroundColor = "#0ff";
    } else if (w <= 1200) {
        //body.style.backgroundColor = "#ff0";
    } else if (w <= 1300) {
        //body.style.backgroundColor = "#0f0";
    } else if (w <= 1400) {
        //body.style.backgroundColor = "#999";
    } else if (w <= 1500) {
        //body.style.backgroundColor = "#0f9";
    } else if (w <= 1600) {
        //body.style.backgroundColor = "#f90";
    } else if (w <= 1700) {
        //body.style.backgroundColor = "#fac";
    } else if (w <= 1800) {
        //body.style.backgroundColor = "#f09";
    } else if (w <= 1900) {
        //body.style.backgroundColor = "#fcc";
    } else {
        //body.style.backgroundColor = "#9f0";
    }
}
// 将事件侦听器函数附加到窗口的resize事件
window.addEventListener("resize", displayWindowSize);
// 第一次调用该函数
displayWindowSize();

/* 判断是mabile还是pc */
if (browser.versions.mobile || browser.versions.ios || browser.versions.android || browser.versions.iPhone || browser.versions.iPad) {
    Lcs = new linkscript();
    Lcs.Las = ["Mmiddle", "Mabile"];
    Lcs.Sas = ["mabile", "location"];
    Lcs.funas();
} else {
    Lcs = new linkscript();
    Lcs.Las = ["pc_index", "carousel1.1"];
    Lcs.Sas = ["jquery-2.2.0.min", "preloadids", "scrollmouse", "top", "location", "carousel1.5", "bottom", "pc_css"];
    Lcs.funas();
}