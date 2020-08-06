//n级目录：muluas,mulubs,mulucs,muluds……
var bkName = "《JavaScript高级程序设计》";
var muluas = ["JavaScript简介", "a1", "a2", "", "", , "a6", "a7", "a8", "a9", "a10"];
var mulubs = [
    ["ba1", "ba2", "ba3", "ba4", "", , "", "ba8"],
    ["bb1", "bb2", "bb3"],
    ["bc1", "bc2"],
    ["bd1", "bd2"]
];
var mulucs = [
    [
        ["caa1", "caa2", "caa3", "caa4", "caa5"],
        ["cab1"],
        ["cac1"],
        ["cad1"]
    ],
    [],
    []
];

//删除子目录多余项
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



var cOder = new Array();
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




var index = document.getElementById("index");
var body = document.body;
var Da = new Array(),
    Daa = new Array(),
    Dab = new Array(),
    Db = new Array(),
    Dba = new Array(),
    Dbb = new Array(),
    Dc = new Array(),
    Dca = new Array(),
    Dcb = new Array();
var La = new Array(),
    Lb = new Array(),
    Lc = new Array();
var Sa = new Array(),
    Sb = new Array(),
    Sc = new Array();
console.log(muluas);
var as = 0,
    bs = 0,
    cs = 0;

//生成书名
var bk = document.createElement("div");
var nh = document.createElement("h1");
bk.appendChild(nh);
nh.innerHTML = bkName;
body.insertBefore(bk, body.childNodes[0]);
bk.id = "bkname";
bk.className = "bkname";

function divs(dst) {
    var st = document.createElement(dst);
    return st;
}

if (muluas != undefined) {
    for (var a = 0; a < muluas.length; a++) {
        if (muluas[a] != undefined && muluas[a] != null && muluas[a] != "") {
            Da[as] = divs("div");
            Da[as].id = "mIa" + as;
            Da[as].className = "mCa";
            index.appendChild(Da[as]);
            Daa[as] = divs("div");
            Daa[as].id = "mIaa" + as;
            Daa[as].className = "mCaa";
            Daa[as].innerHTML = "+";
            Daa[as].style.color = "transparent";
            Da[as].appendChild(Daa[as]);
            Dab[as] = divs("div");
            Dab[as].id = "mIab" + as;
            Dab[as].className = "mCab";
            Da[as].appendChild(Dab[as]);
            Sa[as] = divs("span");
            Sa[as].id = "mSia" + as;
            Sa[as].className = "mSca";
            Sa[as].innerHTML = "第" + cOder[as] + "章" + " ";
            Dab[as].appendChild(Sa[as]);
            La[as] = divs("a");
            La[as].href = "./index/" + muluas[a] + ".html";
            La[as].title = muluas[a];
            La[as].target = "_blank";
            La[as].innerHTML = muluas[a];
            Dab[as].appendChild(La[as]);
            as++;
            if (mulubs != undefined && mulubs[a] != undefined) {
                for (var b = 0; b < mulubs[a].length; b++) {
                    if (mulubs[a][b] != undefined && mulubs[a][b] != null && mulubs[a][b] != "") {
                        Db[bs] = divs("div");
                        Db[bs].id = "mIb" + bs;
                        Db[bs].className = "mCb";
                        index.appendChild(Db[bs]);
                        Dba[bs] = divs("div");
                        Dba[bs].id = "mIba" + bs;
                        Dba[bs].className = "mCba";
                        Dba[bs].innerHTML = "+";
                        Dba[bs].style.color = "transparent";
                        Db[bs].appendChild(Dba[bs]);
                        Dbb[bs] = divs("div");
                        Dbb[bs].id = "mIbb" + bs;
                        Dbb[bs].className = "mCbb";
                        Db[bs].appendChild(Dbb[bs]);
                        Sb[bs] = divs("span");
                        Sb[bs].id = "mSib" + bs;
                        Sb[bs].className = "mScb";
                        Sb[bs].innerHTML = mbOrder[bs] + " ";
                        Dbb[bs].appendChild(Sb[bs]);
                        Lb[bs] = divs("a");
                        Lb[bs].href = "./index/" + muluas[a] + "/" + mulubs[a][b] + ".html";
                        Lb[bs].title = mulubs[a][b];
                        Lb[bs].target = "_blank";
                        Lb[bs].innerHTML = mulubs[a][b];
                        Dbb[bs].appendChild(Lb[bs]);
                        bs++;
                        if (mulucs != undefined && mulucs[a] != undefined && mulucs[a][b] != undefined) {
                            for (var c = 0; c < mulucs[a][b].length; c++) {
                                if (mulucs[a][b][c] != undefined && mulucs[a][b][c] != null && mulubs[a][b][c] != "") {
                                    Dc[cs] = divs("div");
                                    Dc[cs].id = "mIc" + cs;
                                    Dc[cs].className = "mCc";
                                    index.appendChild(Dc[cs]);
                                    Dca[cs] = divs("div");
                                    Dca[cs].id = "mIca" + cs;
                                    Dca[cs].className = "mCca";
                                    Dca[cs].innerHTML = "+";
                                    Dca[cs].style.color = "transparent";
                                    Dc[cs].appendChild(Dca[cs]);
                                    Dcb[cs] = divs("div");
                                    Dcb[cs].id = "mIcb" + cs;
                                    Dcb[cs].className = "mCcb";
                                    Dc[cs].appendChild(Dcb[cs]);
                                    Sc[cs] = divs("span");
                                    Sc[cs].id = "mSic" + cs;
                                    Sc[cs].className = "mScc";
                                    Sc[cs].innerHTML = mcOrder[cs] + " ";
                                    Dcb[cs].appendChild(Sc[cs]);
                                    Lc[cs] = divs("a");
                                    Lc[cs].href = "./index/" + muluas[a] + "/" + mulubs[a][b] + "/" + mulucs[a][b][c] + "/" + mulucs[a][b][c] + ".html";
                                    Lc[cs].title = mulucs[a][b][c];
                                    Lc[cs].target = "_blank";
                                    Lc[cs].innerHTML = mulucs[a][b][c] + "woshsi sidoodl";
                                    Dcb[cs].appendChild(Lc[cs]);
                                    cs++;
                                } else {
                                    cs++;
                                }
                            }
                        } else {
                            cs++;
                        }
                    } else {
                        bs++;
                    }
                }
            } else {
                bs++;
            }
        } else {
            as++;
        }
    }
} else {
    as++;
}

//鼠标移动显示，移除隐藏
//存在子目录
function onMoveras(cst) {
    cst.style.color = "#0f0";
    cst.style.cursor = "default";
}
//不存在子目录
function onMoverbs(cst) {
    cst.style.color = "transparent";
    cst.style.cursor = "default";
}
//鼠标移除
function onMout(cst) {
    cst.style.color = "transparent";
    cst.style.cursor = "none";
}

for (var a = 0; a < muluas.length; a++) {}