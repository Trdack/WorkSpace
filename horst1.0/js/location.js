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