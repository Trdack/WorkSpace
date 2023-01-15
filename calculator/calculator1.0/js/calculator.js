/* 计算器1.0 */




var Calc = null;
/* 建立key系列数组，分别存放各个元素ID */
/* keyas 数字0-9和. */
var keyas = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Spot"];
/* keybs 运算符+,-,×,÷,= */
var keybs = ["Plus", "Reduce", "Ride", "Except", "Result"];
/* 显示区域,input/输入，output/输出，state/状态 */
var keycs = ["inputs", "outputs", "states", "voice"];
/* 功能按键；Shift/切换, */
var keyds = ["Shift", "Alpha", "Apps", "Calc", "Mode", "Open", "bracketsLeft", "bracketsRight", "up", "right", "left", "down"];
/* 建立数组key用于合并所有ID数组 */
var key = new Array();
/* 建立数组keys用于备份ID原始名 */
var keys = new Array();
keys = keyas.concat(keybs).concat(keycs).concat(keyds);
key = keyas.concat(keybs).concat(keycs).concat(keyds);
console.log(Zero.id);
console.log(keyas);
/* 获取Key中所有ID接口 */
for (var i = 0; i < key.length; i++) {
    key[i] = document.getElementById(key[i]);
}



/* 语音预载 */
var audios = keyas.concat(keybs);
var vois = new Array();
(function voicets() {
    for (var i = 0; i < audios.length; i++) {
        vois[i] = audios[i] + "_v";
        vois[i] = document.createElement("audio");
        voice.appendChild(vois[i]);
        vois[i].id = audios[i] + "_v";
        vois[i].src = "./voice/" + audios[i] + ".mp3";
    }
})();

/* 语音调用z */
function voices(vs) {
    for (var i = 0; i < audios.length; i++) {
        if (vs == audios[i]) {
            vois[i].currentTime = 0;
            vois[i].play();
        }
    }
}



/* 点击元素获取该元素ID存入变量clicksId */
var clicksId;
document.onclick = function (event) {
    var e = event || window.event;
    clicksId = e.target.id || e.srcElement.id;
    //changeCss(clicksId);
    Analysis(clicksId);
    voices(clicksId);
    console.log(clicksId);
}
/* 获取键盘按键触发对应元素的ID存入变量keysId */
var keysId;



/* 输入 */
/* count/计数:声明count系列变量作为计数器 */
var countas = 0;
/* 声明InPuta数组用于存入输入的单元数据(数字) */
var InPuta = "";
var first = true;

function Inputas(num) {
    var nums;
    if (num < 10) {
        nums = num;
    } else {
        if (first) {
            nums = ".";
            first = false;
        } else {
            nums = "";
        }

    }

    InPuta += nums;
    inputs.innerHTML = InPuta;
}

/* 将输入的单元数据(数字)即时的显示在inputs元素中(屏幕) */
//unit/单元
function Displayas(unit) {

    console.log(unit);
    /*
    var units = "";
    if (unit.length == 1) {
        units = unit[0];
    } else {
        for (var i = 0; i < unit.length; i++) {
            units += unit[i];
        }
    }
    inputs.innerHTML = units; */
}

/* 对获取的ID进行分析处理 */
function Analysis(myId) {
    for (var i = 0; i < keyas.length; i++) {
        if (myId == keyas[i]) {
            Inputas(i);
        }
    }
}


function calc() {}
calc.prototype = {
    Memory: [], //记忆
    Input: [], //输入的数字
    Cache: [], //缓存，用来存储输入过程中产生的数据！
    funkeys: function keys() {
        console.log("funckeys函数运行了！");
    }(),
}






/* 按下键盘改变颜色 */
function changeCss(k) {
    for (var i = 0; i < key.length; i++) {
        if (k == key[i].id) {
            key[i].style.background = "#fff";
            key[i].style.color = "#000";
            var num = i;
            var recovery = setTimeout(function () {
                key[num].style.background = "#272727";
                key[num].style.color = "#fff";
            }, 100);
        }
    }
}


/* PC键盘输入 */
var sky = false;
document.onkeydown = function (event) {
    keysId = "";
    var e = event || window.event || arguments.callee.caller.arguments[0];
    /* Shift组合键 */
    var shiftKey = e.shiftKey || e.shiftKey;
    /* Ctrl组合键 */
    var ctrlKey = e.ctrlKey || e.metaKey;
    /* Alt */
    var altKey = e.altKey || e.altKey;
    var es = e && e.keyCode;
    console.log(e);
    console.log(e.keyCode);
    if (es == 16) {
        if (!sky) {
            sky = true;
        } else {
            sky = false;
        }
        console.log(sky);
    }
    if (es == 96 || !shiftKey && es == 48) { //按【0】 
        keysId = "Zero";
    }
    if (es == 97 || !shiftKey && es == 49) { //按【1】
        keysId = "One";
    }
    if (es == 98 || !shiftKey && es == 50) { //按【2】 
        keysId = "Two";
    }
    if (es == 99 || !shiftKey && es == 51) { //按【3】 
        keysId = "Three";
    }
    if (es == 100 || !shiftKey && es == 52) { //按【4】 
        keysId = "Four";
    }
    if (es == 101 || !shiftKey && es == 53) { //按【5】 
        keysId = "Five";
    }
    if (es == 102 || !shiftKey && es == 54) { //按【6】 
        keysId = "Six";
    }
    if (es == 103 || !shiftKey && es == 55) { //按【7】 
        keysId = "Seven";
    }
    if (es == 104 || !shiftKey && es == 56) { //按【8】 
        keysId = "Eight";
    }
    if (es == 105 || !shiftKey && es == 57) { //按【9】 
        keysId = "Nine";
    }
    if (es == 110 || sky && es == 190) { //按【.】 
        keysId = "Spot";
    }
    if (es == 107 || shiftKey && es == 187) { //按【+】 
        keysId = "Plus";
        console.log("+");
    }
    if (es == 189 || es == 109) { //按【-】 
        keysId = "Reduce";
    }
    if (es == 106 || shiftKey && es == 56) { //按【*】 
        keysId = "Ride";
    }
    if (es == 111 || sky && es == 191) { //按【/】 
        keysId = "Except";
    }
    if (es == 13 || !shiftKey && es == 187) { //按【=】 
        keysId = "Result";
    }
    if (keysId != "") {
        Analysis(keysId);
        changeCss(keysId);
        voices(keysId);
    }
};



/* 
1.开机：按【ON】启动开机程序！
2.关机：按【shift】+【off】启动关机程序！
3.开关机状态： Switchs: false / 关闭状态、 true / 开启状态！
4.函数OpenClose()执行开启或关闭！
 */
var Switchs = false;

function OpenClose() {
    if (!Switchs) {
        alert("开启！");
        Switchs = true;
    }
    if (Switchs) {
        alert("关闭！");
        Switchs = false;
    }
}

/* 加载页面完成初始化:Init/初始化、Calculator/计算器 */
window.onload = InitCalculator;

function InitCalculator() {

}