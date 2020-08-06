/* 当前使用版本为lcation2.0.js */
/* 作者：初尘 */
/* 修改日期：2020-5-3 */
/* 修改人：初尘 */
/* 通过页面URL建立网页导航locations目录 */
/* location.href方法获取页面URL,decodeURIComponent()用于URL字符串解码*/
(function locationes() { //代码主体源于index1.3.js
    var Urlas = decodeURIComponent(location.href.replace(/^.*=/, ""));
    var UrlArr = Urlas.split("/"); //用split()方法将获取的url字符串以"/"分割并存入UrlArr数组
    var UrlArrlength = UrlArr.length; //获取UrlArr数组长度
    var filename = UrlArr[(UrlArrlength - 1)].split("."); //将UrlArr数组最后一个元素以"."分割并存入filename数组,filename数组的第一个元素则是此页面的文件名
    UrlArr[(UrlArrlength - 1)] = filename[0]; //用此页面的文件名替换掉UrlArr数组的最后一个元素;
    var fileName; //声明一个变量fileName,当页面为index.html时用于将其替换成“首页”;
    var Locnums;
    var Loces = new Array();
    var Lces = "";
    var LocArr = new Array();
    if (UrlArr.indexOf("http:") == -1) {
        console.log("本地打开！");
        var las = (UrlArr.indexOf("horts") + 1);
        Locnums = UrlArr.length - las;
        for (var i = 0; i < Locnums; i++) {
            Loces[i] = Lces;
            Lces += "../";
        }
        Loces.reverse();
        console.log(Loces);
        for (var i = 0; i < Locnums; i++) {
            if (UrlArr[(i + las)] == "index") {
                fileName = "首页";
            } else {
                fileName = UrlArr[(i + las)];
            }
            LocArr[i] = '<a href="./' + Loces[i] + UrlArr[(i + 3)] + '.html">' + fileName + '</a>';
        }

    } else {
        console.log("站点打开！");
        if (UrlArrlength == 4 && UrlArr[3] == "") {
            UrlArr[3] = "index";
        }
        Locnums = UrlArr.length - 3;
        for (var i = 0; i < Locnums; i++) {
            Loces[i] = Lces;
            Lces += "../";
        }
        Loces.reverse();
        console.log(Loces);
        for (var i = 0; i < Locnums; i++) {
            if (UrlArr[(i + 3)] == "index") {
                fileName = "首页";
            } else {
                fileName = UrlArr[(i + 3)];
            }
            LocArr[i] = '<a href="./' + Loces[i] + UrlArr[(i + 3)] + '.html">' + fileName + '</a>';
        }
    }
    console.log(UrlArr);
    //console.log(LocArr);
    var Locs = LocArr.join("<span>|</span>");
    locations.innerHTML = Locs;
})();