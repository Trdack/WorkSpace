var loca = new Array();
var locb = new Array();
var muluas = new Array();
var Muluas = new Array();
loca[0] = ["", "首页"];
loca[1] = ["", "计算机"];
loca[2] = ["", "Web网页编程"];
loca[3] = ["", "HTML教程"];
muluas = ["简介", "编辑器", "基础", "元素", "属性", "标题", "段落", "样式", "格式化", "引用", "计算机代码", "注释", "CSS", "链接", "图像", "表格", "列表", "块", "类", "布局", "响应式设计", "框架", "内联框架", "背景", "脚本", "头部", "实体", "URL", "URL编码", "Web服务器", "颜色", "颜色名", "文档类型", "速查手册"];
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
var la = "_html_";
var lb = "HTML_";
var das = ['<a href="', '.html" title="', '">', '</a>', '<span> | </span>'];
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