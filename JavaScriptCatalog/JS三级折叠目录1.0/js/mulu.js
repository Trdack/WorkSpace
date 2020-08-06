//书名
var body = document.body;
var bk = document.createElement("div");
var nh = document.createElement("h1");
bk.appendChild(nh);
nh.innerHTML = "《JavaScript从入门到精通》";
body.insertBefore(bk, body.childNodes[0]);
bk.id = "bkName";
bk.className = "bkName";
nh.style = "font:50px '楷体';color:red;";
bk.style = "margin:0px auto;padding:0px;border-bottom:1px solid #2c2c2c;width: calc(100% - 480px);";


//三级菜单目录
//muluas,一级目录
var muluas = ["JavaScript概述", "HTML是学习JavaScript的基础", "JavaScript基本语法", "JavaScript运算符", "JavaScript结构语法", "JavaScript函数", "初级开发与调试", "Number对象", "String对象", "Math对象", "Array数组对象", "Date对象", "Window对象", "Document对象", "Form表单对象", "event事件对象", "JavaScript其他对象", "CSS在JavaScript中的应用", "面向对象编程", "DOM对象", "Web 2.0调试与测试", "Ajax", "XML与JSON", "综合案例"];
//mulubs,二级目录
var mulubs = [
    ["什么是JavaScript", "为什么使用JavaScript", "JavaScript有什么作用", "在什么地方使用JavaScript", "如何使用JavaScript", "怎样编写JavaScript", "如何运行JavaScript", "小结"],
    ["HTML简介", "结构化标记", "文本标记", "列表标记", "表单标记", "小结"],
    ["注释", "关键字", "&lt;script&gt;标记", "分号", "数据类型", "变量", "小结"],
    ["赋值运算符", "算术运算符", "字符串运算符", "比较运算符", "逻辑运算符", "位运算符", "条件运算符", "返回数据类型运算符", "其他运算符", "运算符优先级", "小结"],
    ["基本结构语句", "条件结构语句", "循环结构语句", "跳转结构语句", "异常处理语句", "使用with语句进行对象操作", "小结"],
    ["全局函数", "自定义函数", "函数对象", "小结"],
    ["管理源代码", "代码排版风格", "命名风格", "注释风格", "编写工具", "调试工具", "小结"],
    ["Number对象的简介和语法", "Number对象的属性", "Number对象的方法", "小结"],
    ["String对象的简介和语法", "字符串比较", "对字符串中字符的操作", "对字符串的操作", "格式化字符串", "小结"],
    ["Math对象语法", "Math对象属性", "Math对象方法", "小结"],
    ["数组对象语法", "对数组的操作", "对数组元素的操作", "自定义数组方法", "小结"],
    ["Date对象语法", "Date对象方法", "Date对象的计算", "显示日期和时间", "小结"],
    ["打开关闭窗口", "对话框", "对窗口的操作", "定时设置", "窗口事件", "小结"],
    ["文档中的对象", "文档中的内容", "对文档的操作", "文档事件", "小结"],
    ["表单对象", "按钮对象", "文本框对象", "复选框和单选按钮", "列表对象", "文件上传对象", "小结"],
    ["键盘按键", "鼠标操作", "鼠标指针位置", "小结"],
    ["frame框架对象", "history历史对象", "location对象", "navigator浏览器对象", "screen屏幕对象", "小结"],
    ["CSS基础", "CSS属性", "CSS定义方式", "小结"],
    ["面向对象基础", "使用Object类建立对象", "深入Object对象", "类的定义", "this详解", "文字记号法", "小结"],
    ["DOM概述", "访问DOM节点", "修改DOM节点实现动态HTML", "小结"],
    ["调试与测试的区别", "用Firebug调试JavaScript", "JsUnit做自动化单元格测试", "小结"],
    ["Ajax概述", "Ajax基础", "Dojo Ajax工具箱", "小结"],
    ["XML", "XPath", "Ajax与JSON", "小结"],
    ["跟随鼠标的彩色文字", "烟花效果的下拉菜单", "网络导航条", "类似QQ的菜单", "三级联动菜单", "实现关机效果的界面", "Ajax效果：字符串过滤", "Ajax效果：可拖拽的表格", "拖拽表格行改变顺序"]
];
//mulucs,三级目录
var mulucs = [
    [
        [
            ["111"]
        ]
    ]
];
//muluds,四级目录
var muluds = [
    [
        [
            []
        ]
    ]
];

function dlest(myMus, myLt, myLs) {
    var ms = myMus.splice(myLt, myLs);
}
if (mulubs.length > muluas.length) {
    dlest(mulubs, muluas.length, mulubs.length);
}
for (var i = 0; i < mulubs.length; i++) {
    if (mulucs[i] != undefined) {
        var mlb = mulubs[i].length;
        var mlc = mulucs[i].length;
        var mlu = mulucs[i];
        if (mlc > mlb) {
            var mlt = mlb - 1;
            var mls = mlc - mlb;
            dlest(mlu, mlt, mls);
        } else {
            continue;
        }
    } else {
        continue;
    }
}
//muluas数组长度:ma;mulubs数组长度:mb;mulucs数组长度:mc;
var ma = 0,
    mb = 0,
    mc = 0;
var masL = new Array(),
    mbsL = new Array(),
    mcsL = new Array(),
    mcsLs = new Array();
//计算muluas,mulubs,mulucs数组长度;
for (var a = 0; a < muluas.length; a++) {
    if (muluas != undefined) {
        ma++;
    } else {
        continue;
    }
}
for (var a = 0; a < mulubs.length; a++) {
    mbsL[a] = mulubs[a].length;
    for (var b = 0; b < mulubs[a].length; b++) {
        if (mulubs[a] != undefined) {
            mb++;
        } else {
            continue;
        }
    }
}
var mcs = 0;
for (var i = 0; i < mulucs.length; i++) {
    mcsLs[i] = new Array();
    for (var j = 0; j < mulucs[i].length; j++) {
        mcsL[mcs] = mulucs[i][j].length;
        mcs++;
        for (var n = 0; n < mulucs[i][j].length; n++) {
            if (mulucs[i][j] != undefined) {
                mcsLs[i][j] = mulucs[i][j].length;
                mc++;
            } else {
                continue;
            }
        }
    }
}
var index = document.getElementById("index");
//章chapter;节section;小结summary;顺序order;
//声明封装章序号的数组
var cOder = new Array();
//声明封装节序号的数组
var sectionOrder = new Array();
//声明封装小节序号的数组
var summaryOrder = new Array();
//声明封装节链接的数组
var sectionName = new Array();
//声明封装包含节链接的DIV数组
var sectionDiv = new Array();
for (var i = 0; i < mulubs.length; i++) {
    sectionName[i] = new Array();
    sectionDiv[i] = new Array();
}
//声明封装章链接的数组
var chapterName = new Array();
//声明封装包含章链接的DIV数组
var listDiva = new Array();
var listDivb = new Array();
var listDivc = new Array();
var listDivaa = new Array();
var listDivab = new Array();
var listDivba = new Array();
var listDivbb = new Array();
var listDivca = new Array();
var listDivcb = new Array();
var listAa = new Array();
var listAb = new Array();
var listAc = new Array();
//for循环,生成章序号
var coa = new Array();
var cob = new Array();
var coc = new Array();
var cod = new Array();
var coe = new Array();
var cof = new Array();
var cog = new Array();
var coh = new Array();
var coi = new Array();
var coj = new Array();
var cok = new Array();
var col = new Array();
var com = new Array();
for (var i = 0; i < muluas.length; i++) {
    var ans = ["", "一", '二', '三', '四', '五', '六', '七', '八', '九'];
    var bns = ["零", "十", "百", "千", "万", "亿", "兆", ];
    var j;
    var n = i + 1;
    if (i < 9) {
        j = i + 1;
        cOder[i] = ans[j];
        coa[0] = ans[0];
        coa[n] = bns[0] + ans[j];
    } else if (i < 19) {
        j = i - 9;
        cOder[i] = bns[1] + ans[j];
        coa[n] = ans[1] + bns[1] + ans[j];
    } else if (i < 29) {
        j = i - 19;
        cOder[i] = coa[n] = ans[2] + bns[1] + ans[j];
    } else if (i < 39) {
        j = i - 29;
        cOder[i] = coa[n] = ans[3] + bns[1] + ans[j];
    } else if (i < 49) {
        j = i - 39;
        cOder[i] = coa[n] = ans[4] + bns[1] + ans[j];
    } else if (i < 59) {
        j = i - 49;
        cOder[i] = coa[n] = ans[5] + bns[1] + ans[j];
    } else if (i < 69) {
        j = i - 59;
        cOder[i] = coa[n] = ans[6] + bns[1] + ans[j];
    } else if (i < 79) {
        j = i - 69;
        cOder[i] = coa[n] = ans[7] + bns[1] + ans[j];
    } else if (i < 89) {
        j = i - 79;
        cOder[i] = coa[n] = ans[8] + bns[1] + ans[j];
    } else if (i < 99) {
        j = i - 89;
        cOder[i] = coa[n] = ans[9] + bns[1] + ans[j];
    } else if (i < 199) {
        j = i - 99;
        cOder[i] = cob[j] = ans[1] + bns[2] + coa[j];
    } else if (i < 299) {
        j = i - 199;
        cOder[i] = coc[j] = ans[2] + bns[2] + coa[j];
    } else if (i < 399) {
        j = i - 299;
        cOder[i] = cod[j] = ans[3] + bns[2] + coa[j];
    } else if (i < 499) {
        j = i - 399;
        cOder[i] = coe[j] = ans[4] + bns[2] + coa[j];
    } else if (i < 599) {
        j = i - 499;
        cOder[i] = cof[j] = ans[5] + bns[2] + coa[j];
    } else if (i < 699) {
        j = i - 599;
        cOder[i] = cog[j] = ans[6] + bns[2] + coa[j];
    } else if (i < 799) {
        j = i - 699;
        cOder[i] = coh[j] = ans[7] + bns[2] + coa[j];
    } else if (i < 899) {
        j = i - 799;
        cOder[i] = coi[j] = ans[8] + bns[2] + coa[j];
    } else if (i < 999) {
        j = i - 899;
        cOder[i] = coj[j] = ans[9] + bns[2] + coa[j];
    }
}
//一级目录序号
var maOrder = new Array();
for (var i = 0; i < muluas.length; i++) {
    var n = i + 1;
    maOrder[i] = n + ". ";
}
console.log(maOrder);
//二级目录序号
var mbOrder = new Array();
var mbsk = 0;
for (var a = 0; a < mulubs.length; a++) {
    for (var b = 0; b < mulubs[a].length; b++) {
        var x, y;
        x = a + 1;
        y = b + 1;
        mbOrder[mbsk] = x + "." + y;
        mbsk++;
    }
}
//三级目录序号
var mcOrder = new Array();
var mcsk = 0;
for (var a = 0; a < mulucs.length; a++) {
    for (var b = 0; b < mulucs[a].length; b++) {
        for (var c = 0; c < mulucs[a][b].length; c++) {
            var x, y, z;
            x = a + 1;
            y = b + 1;
            z = c + 1;
            mcOrder[mcsk] = x + "." + y + "." + z + " ";
            mcsk++;
        }
    }
}
// for循环 createElement生成DIV appendChild插入DIV
//for循环，建立嵌套式DIV目录结构;
var mulubsNumbor = 0;
var mulucsNumbor = 0;
var muludsNumbor = 0;
for (var a = 0; a < muluas.length; a++) {
    listDiva[a] = document.createElement("div");
    index.appendChild(listDiva[a]);
    listDiva[a].id = "divIa" + a;
    listDiva[a].className = "divCa";
    listDivaa[a] = document.createElement("div");
    listDivaa[a].id = "divIaa" + a;
    listDivaa[a].className = "divCaa";
    listDiva[a].appendChild(listDivaa[a]);
    listDivaa[a].innerHTML = "+";
    listDivaa[a].style.color = "transparent";
    listDivab[a] = document.createElement("div");
    listDivab[a].id = "divIab" + a;
    listDivab[a].className = "divCab";
    listDiva[a].appendChild(listDivab[a]);
    listAa[a] = document.createElement("a");
    listAa[a].href = "./index/" + muluas[a] + ".html";
    listAa[a].title = muluas[a];
    listAa[a].target = "_blank";
    listAa[a].innerHTML = maOrder[a] + muluas[a];
    listDivab[a].appendChild(listAa[a]);
    if (mulubs[a] != undefined) {
        for (var b = 0; b < mulubs[a].length; b++) {
            var bs = mulubsNumbor;
            listDivb[bs] = document.createElement("div");
            listDivb[bs].id = "divIb" + bs;
            listDivb[bs].className = "divCb";
            listDivb[bs].style.display = "none";
            index.appendChild(listDivb[bs]);
            listDivba[bs] = document.createElement("div");
            listDivba[bs].id = "divIba" + bs;
            listDivba[bs].className = "divCba";
            listDivba[bs].innerHTML = "+";
            listDivba[bs].style.color = "transparent";
            listDivb[bs].appendChild(listDivba[bs]);
            listDivbb[bs] = document.createElement("div");
            listDivbb[bs].id = "divIbb" + bs;
            listDivbb[bs].className = "divCbb";
            listDivb[bs].appendChild(listDivbb[bs]);
            listAb[bs] = document.createElement("a");
            listAb[bs].href = "./index/" + muluas[a] + "/" + mulubs[a][b] + ".html";
            listAb[bs].title = mulubs[a][b];
            listAb[bs].target = "_blank";
            listAb[bs].innerHTML = mbOrder[bs] + " " + mulubs[a][b];
            listDivbb[bs].appendChild(listAb[bs]);
            mulubsNumbor += 1;
            if (mulucs[a] != undefined && mulucs[a][b] != undefined) {
                for (var c = 0; c < mulucs[a][b].length; c++) {
                    var cs = mulucsNumbor;
                    listDivc[cs] = document.createElement("div");
                    listDivc[cs].id = "divIc" + cs;
                    listDivc[cs].className = "divCc";
                    listDivc[cs].style.display = "none";
                    index.appendChild(listDivc[cs]);
                    listDivca[cs] = document.createElement("div");
                    listDivca[cs].id = "divIca" + cs;
                    listDivca[cs].className = "divCca";
                    listDivca[cs].innerHTML = "+";
                    listDivca[cs].style.color = "transparent";
                    listDivc[cs].appendChild(listDivca[cs]);
                    listDivcb[cs] = document.createElement("div");
                    listDivcb[cs].id = "divIcb" + cs;
                    listDivcb[cs].className = "divCcb";
                    listDivc[cs].appendChild(listDivcb[cs]);
                    listAc[cs] = document.createElement("a");
                    listAc[cs].href = "./index/" + muluas[a] + "/" + mulubs[a][b] + "/" + mulucs[a][b][c] + ".html";
                    listAc[cs].title = mulucs[a][b][c];
                    listAc[cs].target = "_blank";
                    listAc[cs].innerHTML = mcOrder[cs] + mulucs[a][b][c];
                    listDivcb[cs].appendChild(listAc[cs]);
                    mulucsNumbor += 1;
                }
            } else {
                continue;

            }
        }
    } else {
        continue;
    }
}
//鼠标点击展开，关闭子目录;
//鼠标移入,存在子目录时
function onMovera(cs) {
    cs.style.color = "#f00";
    cs.style.cursor = "default";
}
//鼠标移入,不存在子目录时
function onMoverb(cs) {
    cs.style.color = "transparent";
    cs.style.cursor = "default";
}
//鼠标移除
function onMout(cs) {
    cs.style.color = "transparent";
    cs.style.cursor = "none";
}

var sma = 0;
var smb = 0;
for (var a = 0; a < muluas.length; a++) {
    if (mulubs != undefined && mulubs[a] != undefined && mulubs[a] != null && mulubs[a] != "") {
        listDivaa[a].onmouseover = function atak() {
            onMovera(this);
        }
    } else {
        listDivaa[a].onmouseover = function atak() {
            onMoverb(this);
        }
    }
    listDivaa[a].onmouseout = function atbk() {
        onMout(this);
    }
    listDivaa[a].onclick = function openClose() {
        var at = this.innerHTML;
        var idMabor = new String(this.id);
        var ha = "";
        var has = new Array();
        for (var i = 0; i < idMabor.length; i++) {
            var j = i + 6;
            has[i] = idMabor.charAt(j);
            ha += has[i];
        }
        var suak = 0;
        var sual = 0;
        for (var i = 0; i <= ha; i++) {
            var j = i - 1;
            if (j < 0) {
                suak = 0;
            } else {
                suak += mbsL[j];
            };
            sual += mbsL[i];
        };
        var suat = sual - suak;
        if (at == "+") {
            this.innerHTML = "-";
            for (var s = 0; s < suat; s++) {
                var ka = s + suak;
                listDivb[ka].style.display = "block";
            }
        } else {
            this.innerHTML = "+";
            for (var s = 0; s < suat; s++) {
                var ka = s + suak;
                listDivb[ka].style.display = "none";
            };
        }
    }
    if (mulubs != undefined && mulubs[a] != undefined) {
        for (var b = 0; b < mulubs[a].length; b++) {
            if (mulucs[a] != undefined && mulucs[a][b] != undefined && mulucs[a][b] != null && mulucs[a][b] != "") {
                listDivba[sma].onmouseover = function atck() {
                    this.style.color = "#f00";
                    this.style.cursor = "default";
                }
            } else {
                listDivba[sma].onmouseover = function atck() {
                    this.style.color = "transparent";
                    this.style.cursor = "default";
                }
            }
            listDivba[sma].onmouseout = function atdk() {
                this.style.color = "transparent";
                this.style.cursor = "none";
            }
            listDivba[sma].onclick = function openClose() {
                var bt = this.innerHTML;
                var idMbbor = new String(this.id);
                var hb = "";
                var hbs = new Array();
                for (var i = 0; i < idMbbor.length; i++) {
                    var j = i + 6;
                    hbs[i] = idMbbor.charAt(j);
                    hb += hbs[i];
                }
                var x = -1,
                    y = 0;
                var hbt = 0;
                for (var i = 0; i < mbsL.length; i++) {
                    if (hbt <= hb) {
                        hbt += mbsL[i];
                        x++;
                    } else {
                        continue;
                    }
                    y = mbsL[x] - (hbt - hb);
                }
                var subk = 0;
                var subl = 0;
                var subt = 0;
                var subs = 0;
                for (var i = 0; i < x; i++) {
                    if (mcsLs[i] != undefined) {
                        for (var j = 0; j < mcsLs[i].length; j++) {
                            if (x == 0) {
                                subk = 0;
                            } else {
                                subk += mcsLs[i][j];
                                console.log(mcsLs[i][j]);
                            }
                        }
                    } else {
                        continue;
                    }
                }
                for (var j = 0; j < y; j++) {
                    if (mcsLs[x] != undefined && mcsLs[x][y] != undefined) {
                        subl += mcsLs[x][j];
                    } else {
                        continue;
                    }
                }
                subt = subk + subl;
                if (mcsLs[x] != undefined && mcsLs[x][y] != undefined) {
                    subs = mcsLs[x][y];
                } else {
                    subs = 0;
                }
                if (bt == "+") {
                    this.innerHTML = "-";
                    for (var s = 0; s < subs; s++) {
                        var kb = s + subt;
                        listDivc[kb].style.display = "block";
                    }
                } else {
                    this.innerHTML = "+";
                    for (var s = 0; s < subs; s++) {
                        var kb = s + subt;
                        listDivc[kb].style.display = "none";
                    }
                }
            }
            sma++;
            if (mulucs != undefined && mulucs[a] != undefined && mulucs[a][b] != undefined) {
                for (var c = 0; c < mulucs[a][b].length; c++) {
                    if (muluds != undefined && muluds != "" && muluds[a] != undefined && muluds[a][b] != undefined && muluds[a][b][c] != undefined) {
                        listDivca[smb].onmouseover = function () {
                            this.style.color = "#f00";
                            this.style.cursor = "default";
                            this.style.background = "transparent";
                        }
                    } else {
                        listDivca[smb].onmouseover = function () {
                            this.style.color = "transparent";
                            this.style.cursor = "default";
                            this.style.background = "transparent";
                        }
                    }
                    listDivca[smb].onmouseout = function () {
                        this.style.color = "transparent";
                        this.style.cursor = "none";
                        this.style.background = "transparent";
                    }
                    smb++;
                }
            } else {
                continue;
            }
        }
    } else {
        continue;
    }
}