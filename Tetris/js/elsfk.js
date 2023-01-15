var Sys = null;

function sys() {}
sys.prototype = {
    GameMap: [],
    HorizontalNum: 12, //游戏map水平方向格数
    VerticalNum: 18, //游戏map竖直方向格数
    CreateGameMap: function () { //创建游戏map
        for (var i = 0; i < this.VerticalNum; i++) {
            this.GameMap.push([]);
            for (var j = 0; j < this.HorizontalNum; j++) {
                this.GameMap[i][j] = {};
                this.GameMap[i][j][Sys.TypesNum.blocks] = null; //TypesNum:方块类型(变形),blocks整块。
            }
        }
    },
}



function Base() {
    //定义Base类
}

function InitGame() {
    //初始化游戏
}

function GameStart() {
    //游戏开始暂停结束
}

function Moving() {
    //方块移动
}

function ChangeSheep() {
    //切换等级
}

function keyDown(e) {
    //按键操作
}

//用数组表示方块
var fkes = new Array();
//L顺
fkes[0] = [
    [
        [0, 1],
        [0, 1],
        [0, 1, 1]
    ],
    [
        [0, 0, 1],
        [1, 1, 1],
        [0, 0, 0]
    ],
    [
        [1, 1, 0],
        [0, 1, 0],
        [0, 1, 0]
    ],
    [
        [0, 0, 0],
        [1, 1, 1],
        [1, 0, 0]
    ]

];
//L逆
fkes[1] = [
    [
        [0, 1],
        [0, 1],
        [1, 1]
    ],
    [
        [0, 0, 0],
        [1, 1, 1],
        [0, 0, 1]
    ],
    [
        [0, 1, 1],
        [0, 1, 0],
        [0, 1, 0]
    ],
    [
        [1, 0, 0],
        [1, 1, 1]
    ]
];
//Z顺
fkes[2] = [
    [
        [1, 1, 0],
        [0, 1, 1]
    ],
    [
        [0, 0, 1],
        [0, 1, 1],
        [0, 1, 0]
    ]
];
//Z逆
fkes[3] = [
    [
        [0, 1, 1],
        [1, 1, 0]
    ],
    [
        [1, 0],
        [1, 1],
        [0, 1]
    ]
];

//T形
fkes[4] = [
    [
        [0, 1, 0],
        [1, 1, 1]
    ],
    [
        [0, 1],
        [1, 1],
        [0, 1]
    ],
    [
        [0, 0, 0],
        [1, 1, 1],
        [0, 1, 0]
    ],
    [
        [1, 0],
        [1, 1],
        [1, 0]
    ]
];

//田形
fkes[5] = [
    [
        [1, 1],
        [1, 1]
    ]
];
//条形
fkes[6] = [
    [
        [0, 1],
        [0, 1],
        [0, 1],
        [0, 1]
    ],
    [
        [0, 0, 0, 0],
        [1, 1, 1, 1]
    ],
    [
        [0, 0, 1],
        [0, 0, 1],
        [0, 0, 1],
        [0, 0, 1]
    ],
    [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [1, 1, 1, 1]
    ]

];

//初始化网格
var w = 12;
var h = 20;
var Ls = 43;
var wh = w * h;
var wg = new Array();
var wk = new Array();
var wf = 0;
for (var a = 0; a < h; a++) {
    wg[a] = new Array();
    for (var b = 0; b < w; b++) {
        wg[a][b] = wf;
        wk[wf] = wf;
        wf++;
    }
}
console.log(wk);
//获取的方块；fkas;


var as = "#000";
var bs = "transparent"
var fkges = new Array();
for (var i = 0; i < wk.length; i++) {
    var index = document.getElementById("index");
    index.style.width = w * Ls + "px";
    index.style.height = h * Ls + "px";
    fkges[i] = document.createElement("div");
    index.appendChild(fkges[i]);
    fkges[i].id = "fksi" + i;
    fkges[i].className = "fksc";
    fkges[i].innerHTML = "+";
    fkges[i].style.width = Ls - 2 + "px";
    fkges[i].style.height = Ls - 2 + "px";
    fkges[i].style.lineHeight = Ls - 2 + "px";
    fkges[i].style.fontSize = Ls - 2 + "px";
}
var fkbs = new Array();
var fns = 0;

function tes(fkas) {
    for (var a = 0; a < fkas.length; a++) {
        for (var b = 0; b < fkas[a].length; b++) {
            if (fkas[a][b] == 1) {
                fkbs[fns] = a * w + b;
                fns++;
            }

        }

    }
}

console.log(fkes[0][0]);
tes(fkes[6][3]);
for (var a = 0; a < fkbs.length; a++) {
    var ts = fkbs[a];
    fkges[ts].style.background = as;
}
console.log(fkes[0][1]);