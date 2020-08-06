var Loc = null;
//获取网页文件名
var pn = location.pathname;
var htmlFileName = pn.substr(pn.lastIndexOf("/") + 1);
var b = pn.substr(pn.lastIndexOf("/") + 2);
var c = pn.substr(pn.lastIndexOf("/") + 3);
var tvs = document.getElementById("index");
var dvs = tvs.innerHTML;
console.log(b);
console.log(pn);
var Str = new String(decodeURI(pn));
var tsds = Str.indexOf('/');
var tses = Str.match(/\//g);
var tsgs = Str.split("/");
console.log(tsgs);
console.log("\\");
console.log(tses);
for (var i = 0; i < tses.length; i++) {
    var tsfs = Str.search(/\//g);
    console.log(tsfs);
}
for (var i = 0; i < Str.length; i++) {
    //console.log(Str.charAt(i) + "的编码是：" + Str.charCodeAt(i));
}
var Mate = null;
function mates() {}
mates.prototype = {
    a: ["a", {
        b: ["b", {
            c: ["c", {
                d: "ddddofg",
            }],
        }],
    }],
}
Mate = new mates();

console.log(Mate);
var tsdes = new Object();
tsdes.prototype = {
    a: {
        ab: {
            abc: {
                abcd: "abcd",
            }
        }
    }
}
console.log(Object.getOwnPropertyNames(tsdes.prototype.a.ab.abc).sort()); //return:"abcd";
function Ts() {
    this.namea = "";
    this.nameb = "";
    this.namec = "";
    this.named = "";
}
Ts.protorype.namea = "Hello!";
var obj = new Ts();



Str.property;
console.log(Str);
(function a() {
    console.log(location);
})();


console.log("abcdefghijklmn" [1]);


function loc() {}
loc.prototype = {
    loca: [],
    locb: [],
    locc: [],
    muluas: [],

}





var loca = new Array();
var locb = new Array();
var muluas = new Array();
var Muluas = new Array();
loca[0] = ["", "首页"];
muluas = [];
var locals = "";
for (var a = 0; a < loca.length; a++) {
    locals += "../";
    locb[a] = locals;
}
var locc = locb.reverse();
for (var a = 0; a < loca.length; a++) {
    loca[a][0] = "./" + locc[a] + loca[a][1] + ".html";
}
//获取网页标题
var Title = document.title;
var la = null;
var lb = null;
var das = ['<a href="', '" title="', '">', '</a>', '<span> | </span>'];
var lx;
var ly;
var locaes = new Array();
var locationes = "";
for (var a = 0; a < muluas.length; a++) {
    Muluas[a] = lb + muluas[a];
    if (Muluas[a] == Title) {
        lx = a;
    }
}
if (lx < 9) {
    ly = "0" + (lx + 1);
} else {
    ly = lx;
}
for (var a = 0; a < loca.length; a++) {
    locaes[a] = das[0] + loca[a][0] + das[1] + loca[a][1] + das[2] + loca[a][1] + das[3] + das[4];
    locationes += locaes[a];
}
var locags = das[0] + "./" + ly + la + muluas[lx] + das[1] + lb + muluas[lx] + das[2] +
    lb + muluas[lx] + das[3];
var locas = document.getElementById("loca");
var locations = document.createElement("div");
locas.appendChild(locations);
locations.id = "location";
locations.className = "location";
locations.innerHTML = locationes + locags;