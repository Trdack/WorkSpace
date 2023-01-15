//n级目录：muluas,mulubs,mulucs,muluds……
var bkName = "《JavaScript高级程序设计》";
//一级目录
var muluas = ["JavaScript简介", "在HTML中使用JavaScript", "基本概念", "变量、作用域和内存问题", "引用类型", "面向对象的程序设计", "函数表达式", "BOM", "客户端检测", "DOM", "DOM扩展", "DOM2和DOM3", "事件", "表单脚本", "使用Canvas绘图", "HTML5脚本编程", "错误处理与调试", "JavaScript与XML", "E4X", "JSON", "Ajax与Comet", "高级技巧", "离线运用于客户端存储", "最佳实践", "新兴的API", "附录A:ECMAScript Harmony", "附录B: 严格模式", "附录C: JavaScript库", "附录D: JavaScript工具"];
//二级目录
var mulubs = [
    ["ss"],
    [],
    []
];
//三级目录
var mulucs = [
    [
        ["ss"],
        []
    ],
    [
        [],
        []
    ]
];
//四级目录
var muluds = [
    [
        [
            [],
            []
        ],
        [
            [],
            []
        ]
    ],
    [
        [
            [],
            []
        ],
        [
            [],
            []
        ]
    ]
];
//一级目录序号
var maOrder = new Array();
//二级目录序号
var mbOrder = new Array();
//三级目录序号
var mcOrder = new Array();
//四级目录序号
var mdOrder = new Array();

var body = document.body;
var index = document.getElementById("index");
var mBook = new Array();
var mDiva = new Array();
var mDivb = new Array();
var mDivc = new Array();
var mDivaa = new Array();
var mDivab = new Array();
var mDivac = new Array();
var mDivba = new Array();
var mDivbb = new Array();
var mDivca = new Array();
var mDivcb = new Array();
var mDivda = new Array();
var mDivdb = new Array();

var mLinka = new Array();
var mLinkb = new Array();
var mLinkc = new Array();
var mLinkd = new Array();

//生成书名
var bk = document.createElement("div");
var nh = document.createElement("h1");
bk.appendChild(nh);
nh.innerHTML = bkName;
body.insertBefore(bk, body.childNodes[0]);
bk.id = "bkname";
bk.className = "bkname";

//生成嵌套式结构目录
var as = 0,
    bs = 0,
    cs = 0,
    ds = 0,
    es = 0,
    fs = 0;
for (var a = 0; a < muluas.length; a++) {
    if (muluas != (undefined && null && "") && muluas[a] != (undefined && null && "")) {
        mDiva[as] = document.createElement("div");
        mDiva[as].id = "myIa" + as;
        mDiva[as].className = "myCa";
        index.appendChild(mDiva[as]);
        mDivaa[as] = document.createElement("div");
        mDivaa[as].id = "myIaa" + as;
        mDivaa[as].className = "myCaa";
        mDivaa[as].innerHTML = "+";
        mDiva[as].appendChild(mDivaa[as]);
        mDivab[as] = document.createElement("div");
        mDivab[as].id = "myIab" + as;
        mDivab[as].className = "myCab";
        mDiva[as].appendChild(mDivab[as]);
        mLinka[as] = document.createElement("a");
        mLinka[as].href = "./index/" + muluas[a] + ".html";
        mLinka[as].title = muluas[a]
        mLinka[as].target = "_blank";
        mLinka[as].innerHTML = as + ". " + muluas[as];
        mDivab[as].appendChild(mLinka[as]);
        as++;
        if (mulubs != (undefined && null && "") && mulubs[a] != (undefined && null && "")) {
            for (var b = 0; b < mulubs[a].length; b++) {
                mDivb[bs] = document.createElement("div");
                mDivb[bs].id = "myIb" + bs;
                mDivb[bs].className = "myCb";
                index.appendChild(mDivb[bs]);
                mDivba[bs] = document.createElement("div");
                mDivba[bs].id = "myIba" + bs;
                mDivba[bs].className = "myCba";
                mDivba[bs].innerHTML = "+";
                mDivb[bs].appendChild(mDivba[bs]);
                mDivbb[bs] = document.createElement("div");
                mDivbb[bs].id = "myIbb" + bs;
                mDivbb[bs].className = "myCbb";
                mDivb[bs].appendChild(mDivbb[bs]);
                mLinkb[bs] = document.createElement("a");
                mLinkb[bs].href = "./index/" + muluas[a][b] + ".html";
                mLinkb[bs].title = muluas[a][b];
                mLinkb[bs].target = "_blank";
                mLinkb[bs].innerHTML = mulubs[a][b];
                mDivbb[bs].appendChild(mLinkb[bs]);
                bs++;
                if (mulucs != (undefined && null && "") && mulucs[a] != (undefined && null && "") && mulucs[a][b] != (undefined && null && "")) {
                    for (var c = 0; c < mulucs[a][b].length; c++) {
                        if (mulucs[a][b][c] != (undefined && null && "")) {
                            mDivc[cs] = document.createElement("div");
                            mDivc[cs].id = "myIc" + cs;
                            mDivc[cs].className = "myCc";
                            index.appendChild(mDiva[cs]);
                            mDivca[cs] = document.createElement("div");
                            mDivca[cs].id = "myIca" + cs;
                            mDivca[cs].className = "myCca";
                            mDivca[cs].innerHTML = "+";
                            mDivc[cs].appendChild(mDivaa[cs]);
                            mDivcb[cs] = document.createElement("div");
                            mDivcb[cs].id = "myIcb" + cs;
                            mDivcb[cs].className = "myCcb";
                            mDivc[cs].appendChild(mDivab[cs]);
                            mLinkc[cs] = document.createElement("a");
                            mLinkc[cs].href = "./index/" + muluas[a][b][c] + ".html";
                            mLinkc[cs].title = muluas[a][b][c];
                            mLinkc[cs].target = "_blank";
                            mLinkc[cs].innerHTML = mulucs[a][b][c];
                            mDivcb[cs].appendChild(mLinkc[cs]);
                            cs++;
                        } else {
                            cs++;
                        }
                    }
                } else {
                    cs++;
                }
            }
        } else {
            bs++;
        }

    } else {
        as++;
    }
}


/* 
if (mulubs != undefined && mulubs[a] != undefined && mulubs[a] != null && mulubs[a] != "") {
    
} */
/* 
 */