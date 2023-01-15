var Sys = null;

function sys() {}
sys.prototype = {
    carWidth: 1000,
    carHeight: 500,
    carLRwhidth: 30.9,
    carLRheight: 50,
    ImgNumber: 10,
    carMap: [],
    divas: [],
    divbs: [],
    divcs: [],
    aImages: [
        ["特别推荐", "recommend", "", ""],
        ["识文断字", "etymology", "", ""],
        ["知人辨物", "character", "", ""],
        ["学类分科", "discipline", "", ""],
        ["书籍典藏", "collectionbooks", "", ""],
        ["思维特训", "thinkingtrain", "", ""],
        ["博学强记", "eruditememory", "", ""],
        ["悟道明理", "enlightenment", "", ""],
        ["以道会友", "friends", "", ""],
        ["娱乐天地", "entertainment", "", ""]
    ],
    funcas: function cas() {
        var dives = new Array();
        dives[0] = [
            ["carousel"],
            "div",
            ["carLeft", "carMiddle", "carRight"]
        ];
        dives[1] = [
            ["carMiddle"],
            "div",
            ["recommend", "etymology", "character", "discipline", "collectionbooks", "thinkingtrain", "eruditememory", "enlightenment", "friends", "entertainment"]
        ];
        dives[2] = [
            ["recommend", "etymology", "character", "discipline", "collectionbooks", "thinkingtrain", "eruditememory", "enlightenment", "friends", "entertainment"],
            "a",
            ["Arecommend", "Aetymology", "Acharacter", "Adiscipline", "Acollectionbooks", "Athinkingtrain", "Aeruditememory", "Aenlightenment", "Afriends", "Aentertainment"]
        ];
        dives[3] = [
            ["Arecommend", "Aetymology", "Acharacter", "Adiscipline", "Acollectionbooks", "Athinkingtrain", "Aeruditememory", "Aenlightenment", "Afriends", "Aentertainment"],
            "img",
            ["Imgrecommend ", "Imgetymology ", "Imgcharacter ", "Imgdiscipline ", "Imgcollectionbooks ", "Imgthinkingtrain ", "Imgeruditememory ", "Imgenlightenment ", "Imgfriends ", "Imgentertainment"]
        ];
        this.funcbs(dives);
    },
    funcbs: function cbs(a) {
        for (var i = 0; i < a.length; i++) {
            this.divas.push([]);
            this.divbs.push([]);
            this.divcs.push([]);
            for (var j = 0; j < a[i][2].length; j++) {
                this.divbs[i][j] = a[i][2][j];
                if (a[i][0].length == 1) {
                    this.divas[i][j] = document.getElementById(a[i][0][0]);
                } else {
                    this.divas[i][j] = document.getElementById(a[i][0][j]);
                }
                a[i][2][j] = document.createElement(a[i][1]);
                this.divas[i][j].appendChild(a[i][2][j]);
                if (a[i][1] == "div") {
                    a[i][2][j].id = this.divbs[i][j];
                    a[i][2][j].className = this.divbs[i][j];
                    this.divcs[i][j] = a[i][2][j];
                } else if (a[i][1] == "a") {
                    a[i][2][j].id = this.divbs[i][j];
                    a[i][2][j].href = "./" + this.divbs[i][j] + ".html";
                    a[i][2][j].title = this.aImages[j][0];
                    //a[i][2][j].innerHTML = this.aImages[j][0];
                    this.divcs[i][j] = a[i][2][j];
                } else if (a[i][1] == "img") {
                    a[i][2][j].src = "./img/carousel/" + j + ".jpg";

                }
            }
        }
    },
    funccs: function ccs() {},
};
Sys = new sys();
Sys.funcas();
console.log(Sys.carHeight);

var tas;
var ts;
tas = document.getElementsByClassName("carLeft")[0];
ts = window.tas.offsetHeight;

var tbs = parseInt(window.getComputedStyle(Sys.divcs[0][0]).getPropertyValue('height'));

var pcs = Sys.carWidth * 0.618;
var pds = pcs * 0.618;
console.log(pcs);
console.log(pds);
var ds = window.getComputedStyle(Sys.divcs[0][0]).height;
Sys.divas[0][0].style.height = Sys.carHeight + "px";
Sys.divcs[0][0].style.top = (Sys.carHeight - tbs) / 2 + "px";
Sys.divcs[0][2].style.top = (Sys.carHeight - tbs) / 2 + "px";
Sys.divcs[1][0].style.width = "618px";
Sys.divcs[1][0].style.left = "186px";





/* 
Sys.nDivId[0].style.width = "1000px";
Sys.nDivId[0].style.height = "500px";
var ts;
var teacas;
Sys.nDivId[0].onclick = function () {
    clearInterval(teacas);
    ts = 1;
    var s = 0;
    var e = 0;
    teacas = setInterval(function tds() {
        s++;
        if (ts < 9) {
            tas = "00" + (ts + 1);
        } else if (ts < 99) {
            tas = "0" + (ts + 1);
        } else {
            tas = ts + 1;
        }
        console.log(tas);
        if (ts < 10) {
            Sys.nDivId[0].src = "./img/carousel/" + tas + ".jpg";
        } else {
            tfs();
            window.alert("s这是第" + s + "次");
            window.alert("e这是第" + e + "次");
        }
        e++;
        ts++;
    }, 1000);

    function tfs() {
        clearInterval(teacas);
        window.alert("ts=10");
        ts = 0;
    }

}
 */


/* 
(function() {
  var entertainment = document.getElementById("entertainment");
  var imga = document.createElement("img");
  entertainment.appendChild(imga);
  imga.src = "./img/carousel/001.jpg";
  imga.title = "thitle";
})(); */

/* 

var cares = new Array();
var carSum = 10;
cares = [{
    fId: ['carousel'],
    sId: ['carLeftBtn', 'carMiddle', 'carRightBtn'],
    tag: ['div'],
    cln: ['carLtn', 'carMiddle', 'carRtn'],
    idn: ['carLeft', 'carMiddle', 'carRight'],
}, {
    fId: ['carMiddle'],
    sId: [],
    tag: ['div'],
    cln: ['divas'],
    idn: [],
    funs: function () {
        for (var a = 0; a < carSum; a++) {
            this.sId[a] = "div" + a;
            this.idn[a] = "div" + a;
        }
    }
}, {
    fId: [],
    sId: [],
    tag: ['img'],
    cln: ['imgas'],
    idn: [],
    Src: [],
    funs: function () {
        var sum = new Array();
        for (var a = 0; a < carSum; a++) {
            if (a < 9) {
                sum[a] = "00" + (a + 1);
            } else if (a < 99) {
                sum[a] = "0" + (a + 1);
            } else {
                sum[a] = a + 1;
            }
        }
        for (var a = 0; a < carSum; a++) {
            this.fId[a] = "div" + a;
            this.sId[a] = "img" + a;
            this.idn[a] = "img" + a;
            this.Src[a] = "./img/carousel/" + sum[a] + ".jpg";
        }
    },
}];
for (var a = 0; a < cares.length; a++) {
    if (cares[a].funs != undefined) {
        cares[a].funs();
    }
}
//ts.map(t => t && t())

console.log(cares[1].sId);

function newdives(div) {
    var a, b, c, d, e, f, g, h, i, j;
    a = div.fId;
    b = div.sId;
    c = div.tag;
    d = div.cln;
    e = div.idn;
    for (var x = 0; x < b.length; x++) {
        if (a.length == 1) {
            f = a[0];
        } else {
            f = a[x];
        }
        if (b.length == 1) {
            g = b[0];
        } else {
            g = b[x];
        }
        if (c.length == 1) {
            h = c[0];
        } else {
            h = c[x];
        }
        if (d.length == 1) {
            i = d[0];
        } else {
            i = d[x];
        }
        if (e.length == 1) {
            j = e[0];
        } else {
            j = e[x];
        }
        f = document.getElementById(f);
        g = document.createElement(h);
        f.appendChild(g);
        g.id = j;
        g.className = i;
        if (div.Src != undefined) {
            g.src = div.Src[x];
        }
        g.onmouseover = function as() {
            this.style.cursor = "default";
        }
        g.onmouseout = function as() {
            this.style.cursor = "default";
        }

    }
}

for (var a = 0; a < cares.length; a++) {
    newdives(cares[a]);
}
carLeft.innerHTML = "<";
carRight.innerHTML = ">";

console.log(cares[1].sId[2]);
var carSumas = new Array();

var cardecas = 0;

function carrt() {
    for (var a = 0; a < carSum; a++) {
        cares[1].sId[a] = document.getElementById(cares[1].idn[a]);
        cares[1].sId[a].style.zIndex = 0;
    }
    cardecas++;
    if (cardecas == carSum) {
        cardecas = 0;
    }
    var a = cardecas - 1;
    if (a < 0) {
        a = carSum;
    }
    var b = cardecas + 1;
    if (b < carSum) {
        b = 0;
    }
    cares[1].sId[cardecas].style.zIndex = 1;
}

function carlt() {
    for (var a = 0; a < carSum; a++) {
        cares[1].sId[a] = document.getElementById(cares[1].idn[a]);
        cares[1].sId[a].style.zIndex = 0;
    }
    if (cardecas == 0) {
        cardecas = carSum;
    }
    cardecas--;
    cares[1].sId[cardecas].style.zIndex = 1;

}
carLeft.onclick = function () {
    carlt();
};
carRight.onclick = function () {
    carrt();
};

function nextes() {

}

function blackes() {

}
document.onkeydown = function (event) {
    var e = event || window.event;
    var es = e && e.keyCode;
    //向左
    if (es == 37 || es == 38) {
        carlt();
    }
    //向右
    if (es == 39 || es == 40) {
        carrt();
    }
} */