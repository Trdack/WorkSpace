var dives = new Array();
dives = [{
    fId: ['flipa', 'flipb'],
    sId: ['fcna', 'fcnb'],
    tag: 'div',
    cln: ['fcn', 'fcn'],
    idn: ['fcna', 'fcnb'],
}, {
    fId: ['fcna', 'fcna', 'fcna'],
    sId: ['fortha', 'cataloga', 'nexta'],
    tag: 'div',
    cln: ['forth', 'catalog', 'next'],
    idn: ['fortha', 'cataloga', 'nexta'],
}, {
    fId: ['fcnb', 'fcnb', 'fcnb'],
    sId: ['forthb', 'catalogb', 'nextb'],
    tag: 'div',
    cln: ['forth', 'catalog', 'next'],
    idn: ['forthb', 'catalogb', 'nextb'],
}];

function newdives(div) {
    for (var a = 0; a < div.fId.length; a++) {
        div.fId[a] = document.getElementById(div.fId[a]);
        div.sId[a] = document.createElement(div.tag);
        div.fId[a].appendChild(div.sId[a]);
        div.sId[a].id = div.idn[a];
        div.sId[a].className = div.cln[a];
        div.sId[a].onmouseover = function a() {
            this.style.cursor = "default";
        }
        div.sId.onmouseout = function a() {
            this.style.cursor = "default";
        }
    }
}

for (var a = 0; a < dives.length; a++) {
    newdives(dives[a]);
}

var muluts = ["简介", "编辑器", "基础", "元素", "属性", "标题", "段落", "样式", "格式化", "引用", "计算机代码", "注释", "CSS", "链接", "图像", "表格", "列表", "块", "类", "布局", "响应式设计", "框架", "内联框架", "背景", "脚本", "头部", "实体", "URL", "URL编码", "Web服务器", "颜色", "颜色名", "文档类型", "速查手册"];
var lnas = new Array();
lnas = [{
    fId: ['fortha', 'forthb', 'cataloga', 'catalogb', 'nexta', 'nextb'],
    sId: ['fala', 'fbla', 'cala', 'cbla', 'nala', 'nbla'],
    tag: 'a',
    idn: ['fala', 'fbla', 'cala', 'cbla', 'nala', 'nbla'],
    ihl: ['上一页', '上一页', '目&nbsp;&nbsp;录', '目&nbsp;&nbsp;录', '下一页', '下一页'],
}];

var sumes = "";
var lb = ['./', './../', '_html_', '.html', 'HTML_'];
var la = new Array();
var lc = new Array();
var ld = new Array();
var le = new Array();
var lxs;
var lys = new Array();
var lzs = new Array();
for (var a = 0; a < muluts.length; a++) {
    if (a < 9) {
        sumes = "0" + (a + 1);
    } else {
        sumes = a + 1;
    }
    la[a] = lb[0] + sumes + lb[2] + muluts[a] + lb[3];
    lc[a] = lb[4] + muluts[a];
    var Titles = document.title;
    if (Titles == lc[a]) {
        lxs = a;
    }
    if (lxs < 1) {
        lys[0] = la[0];
        lzs[0] = lc[0];
        lys[1] = la[(lxs + 1)];
        lzs[1] = lc[(lxs + 1)];
    } else if (lxs < muluts.length) {
        lys[0] = la[(lxs - 1)];
        lzs[0] = lc[(lxs - 1)];
        lys[1] = la[(lxs + 1)];
        lzs[1] = lc[(lxs + 1)];
    } else {
        lys[0] = la[(lxs - 1)];
        lzs[0] = lc[(lxs - 1)];
        lys[1] = la[lxs];
        lzs[1] = lc[lxs];
    }
}
for (var a = 0; a < lnas[0].fId.length; a++) {
    lnas[0].fId[a] = document.getElementById(lnas[0].fId[a]);
    lnas[0].sId[a] = document.createElement(lnas[0].tag);
    lnas[0].fId[a].appendChild(lnas[0].sId[a]);
    lnas[0].sId[a].innerHTML = lnas[0].ihl[a];
    lnas[0].sId[0].href = lnas[0].sId[1].href = lys[0];
    lnas[0].sId[4].href = lnas[0].sId[5].href = lys[1];
    lnas[0].sId[2].href = lnas[0].sId[3].href = "./../html_Course.html";
    lnas[0].sId[2].title = lnas[0].sId[3].title = "HTML_目录";
    lnas[0].sId[0].title = lnas[0].sId[1].title = lzs[0];
    lnas[0].sId[4].title = lnas[0].sId[5].title = lzs[1];
}