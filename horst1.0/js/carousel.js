var Sys = null;

function sys() {}
sys.prototype = {
    carWidth: 1000, //轮播区域总宽度
    carHeight: 300, //轮播区域总高度
    carLRwhidth: 31, //轮播按钮宽度
    carLRheight: 50, //轮播按钮高度
    carLRtop: [], //轮播按钮相对top位置
    ImgNumber: 10, //轮播元素数量
    carMap: ["carousel", "carLeft", "carRight", "carMiddle"], //轮播区域中所有DIV
    carMaps: ["carousel", "carLeft", "carRight", "carMiddle"], //DIV#---
    carMs: ["recommend", "etymology", "character", "discipline", "collectionbooks", "thinkingtrain", "eruditememory", "enlightenment", "friends", "entertainment"], //需要轮播的DIV集合
    carMes: ["recommend", "etymology", "character", "discipline", "collectionbooks", "thinkingtrain", "eruditememory", "enlightenment", "friends", "entertainment"], //DIV#---
    carDx: [], //存储DataIndex值
    carMw: 618, //需要轮播DIV的宽度
    carMh: [], //需要轮播DIV的高度集合
    carMt: [0, 20], //需要轮播DIv的相对top位置集合
    carMl: [-200, 0, 200, 400, 600, 800, 1000, 1200, 1400], //需要轮播DIV的相对left位置集合
    funas: function as() {
        Sys.carLRtop = (this.carHeight - this.carLRheight) / 2; //计算轮播按钮相对top值
    },
    funbs: function bs() {
        for (var i = 0; i < this.carMap.length; i++) {
            Sys.carMaps[i] = document.getElementById(this.carMap[i]);
        }
        for (var i = 0; i < this.carMs.length; i++) {
            Sys.carMes[i] = document.getElementById(this.carMs[i]);
        }
    },
}
Sys = new sys();
Sys.funas();
Sys.funbs();


var indax = 0,
    indbx,
    indcx;

function nextas() {
    if (indax < 9) {
        indax++;
    } else if (indax == 9) {
        indax = 0;
    }
    indbx = indax + 1;
    return indax, indbx;
}

function blackas() {
    if (indax > 0) {
        indax--
    } else if (indax == 0) {
        indax = 9;
    }
    indbx = indax - 1;
    return indax, indbx;
}

var tss = 0;

function gocar() {
    var a = indax;
    var b, c;
    if (a == 0) {
        b = 9;
    } else {
        b = a - 1;
    }
    if (a == 9) {
        c = 0;
    } else {
        c = a + 1;
    }
    Sys.carMes[a].style.top = "0px";
    Sys.carMes[a].style.left = "200px";
    Sys.carMes[a].style.height = "300px";
    Sys.carMes[a].style.zIndex = "1";
    Sys.carMes[a].style.display = "block";
    Sys.carMes[b].style.top = "20px";
    Sys.carMes[b].style.left = "0px";
    Sys.carMes[b].style.height = "260px";
    Sys.carMes[b].style.zIndex = "0";
    Sys.carMes[b].style.display = "block";
    Sys.carMes[c].style.top = "20px";
    Sys.carMes[c].style.left = "400px";
    Sys.carMes[c].style.height = "260px";
    Sys.carMes[c].style.zIndex = "0";
    Sys.carMes[c].style.display = "block";
    for (var i = 0; i < Sys.carMes.length; i++) {
        if (i != a && i != b && i != c) {
            Sys.carMes[i].style.top = "0";
            Sys.carMes[i].style.left = "0";
            Sys.carMes[i].style.height = "0";
            Sys.carMes[i].style.zIndex = "0";
            Sys.carMes[i].style.display = "none";
        }
    }
}
gocar();

function sd() {
    gocar();
    nextas();
}
var csd = setInterval(sd, 2000);
var cdd;

function bga() {
    Sys.carMaps[1].style.background = '#000 url("./bg/向左01.gif")';
    Sys.carMaps[1].style.backgroundSize = 'cover';
    Sys.carMaps[2].style.background = '#000 url("./bg/向右01.gif ")';
    Sys.carMaps[2].style.backgroundSize = 'cover';
}

function bgb() {
    Sys.carMaps[1].style.background = '#999 url("./bg/向左01.gif")';
    Sys.carMaps[1].style.backgroundSize = 'cover';
    Sys.carMaps[2].style.background = '#999 url("./bg/向右01.gif")';
    Sys.carMaps[2].style.backgroundSize = 'cover';
}

Sys.carMaps[3].onmouseout = function () {
    bgb();
    cdd = setInterval(sd, 2000);
    return cdd;
}
Sys.carMaps[3].onmouseover = function () {
    bga();
    clearInterval(csd);
    clearInterval(cdd);
}
Sys.carMaps[2].onmouseover = function () {
    bga();
    clearInterval(csd);
    clearInterval(cdd);
}
Sys.carMaps[2].onmouseout = function () {
    bgb();
    cdd = setInterval(sd, 2000);
    return cdd;
}
Sys.carMaps[1].onmouseover = function () {
    bga();
    clearInterval(csd);
    clearInterval(cdd);
}
Sys.carMaps[1].onmouseout = function () {
    bgb();
    cdd = setInterval(sd, 2000);
    return cdd;
}
Sys.carMaps[2].onclick = function () {
    gocar();
    nextas();
}
Sys.carMaps[1].onclick = function () {
    gocar();
    blackas();
}