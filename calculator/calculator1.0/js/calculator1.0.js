/* 计算器1.0 */
var Sys = null;
/* 建立一个整体结构 */
function sys() {}
sys.prototype = {
    Switchs: false, //计算器状态：flase/关机、true/开机
    sky: false,
    shiftState: false,
    Memory: [], //记忆
    States: [], //指示状态数据存储
    Input: [], //输入单元数据存储
    Inputes: [], //输入显示模块数据存储
    Cache: [], //缓存，用来存储输入过程中产生的数据！
    Results: [], //计算结果
    Displayes: [], //屏显示内容
    clicksId: [], //获取鼠标点击虚拟键盘id值
    keysId: [], //获取实体键盘按键对应虚拟键盘id值
    vios: [], //语音模块数据存储空间
    /* 建立key系列数组，分别存放各个元素ID */
    Idas: ["displays", "inputs", "outputs", "states", "voice"], //kaycs显示区域,input/输入，output/输出，state/指示状态 
    keyas: ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Spot"], //keyas 数字0-9和.
    keybs: ["Plus", "Reduce", "Ride", "Except", "Result"], //keybs 运算符+,-,×,÷,=
    keycs: ["Shift", "Alpha", "Apps", "Calc", "Mode", "Open", "bracketsLeft", "bracketsRight", "up", "right", "left", "down"], //kayds功能按键；Shift/切换,
    key: [], //数组key用于为所有键盘建立id通道
    keys: [], //数组keys用于备份ID原始名
    audios: [], //数组用于建立语音通道
    fundivIds: function divIds() { //获取所有ID接口
        Sys.key = this.keyas.concat(this.keybs).concat(this.keycs); //合并虚拟键盘所有按键id
        Sys.keys = this.keyas.concat(this.keybs).concat(this.keycs); //对虚拟键盘id名进行备份
        for (var i = 0; i < this.key.length; i++) {
            Sys.key[i] = document.getElementById(this.key[i]); //通过ID为所有虚拟键盘按键建立接口
        }
        Sys.audios = this.keyas.concat(this.keybs); //为语音模块获取按键id值
    },
    funCoives: { //语音模块
        PreloadCoives: function Coives() { //预载语音模块1.0
            for (var i = 0; i < Sys.audios.length; i++) {
                Sys.vois[i] = Sys.audios[i] + "_v";
                Sys.vois[i] = document.createElement("audio");
                Sys.voice.appendChild(vois[i]);
                Sys.vois[i].id = Sys.audios[i] + "_v";
                Sys.vois[i].src = "./voice/" + Sys.audios[i] + ".mp3";
            }
        },
        CallCoives: function CallCoives() { //调用语音模块1.0

        }
    },
    funDisplays: { //显示模块
        OpenCloses: function () { //开关机显示效果
            if (Sys.Switchs) { //开机状态，点亮屏幕
                displays.style.background = "#efefff";
            } else { //关机状态，熄灭屏幕
                displays.style.background = "#000";
            }
        },
        States: function () { //功能指示状态区

        },
    },
    funVkde: { //虚拟键盘显示效果--->Virtual keyboard display effect
        changeStyles: function Styles(a, b, c, d) { //改变按键样式
            Sys.key[a].style.background = b;
            Sys.key[a].style.color = c;
            Sys.key[a].style.textShadow = d;
        },
        openKeyDownCss: function changeCss(k) { // 开机状态下按下键盘改变颜色
            for (var i = 0; i < Sys.key.length; i++) {
                if (k == Sys.key[i].id) {
                    Sys.funVkde.changeStyles(i, "#aaa", "#f00", "2px 2px 2px #0011ff");
                    var num = i;
                    var recovery = setTimeout(function () {
                        Sys.funVkde.changeStyles(num, "#272727", "#fff", "none");
                    }, 100);
                }
            }
        },
        closeKeyCss: function closeKeyCss() { //关机状态所有按键显示效果初始化
            for (var i = 0; i < Sys.key.length; i++) {
                Sys.funVkde.changeStyles(i, "#272727", "#fff", "none");
            }

        },
        stateKeyCss: function stateKeyCss(k) { //显示按键状态指示效果
            for (var i = 0; i < Sys.key.length; i++) {
                if (k == Sys.key[i].id) {
                    Sys.funVkde.changeStyles(i, "#272727", "#f00", "2px 2px 2px #0011ff");
                }
            }
        },
        stateKeyOutCss: function stateKeyOutCss(k) { //清除按键状态指示效果
            for (var i = 0; i < Sys.key.length; i++) {
                if (k == Sys.key[i].id) {
                    Sys.funVkde.changeStyles(i, "#272727", "#fff", "none");
                }
            }
        },
        funShifts: function shifts() {
            if (!Sys.shiftState) {
                Sys.funVkde.stateKeyCss("Shift");
                Sys.funSwitchShifts();
                Sys.shiftState = true;
            } else {
                Sys.funVkde.stateKeyOutCss("Shift");
                Sys.funSwitchShifts();
                Sys.shiftState = false;
            }
        },
    },
    funSwitchShifts: function SwitchShifts() {
        if (!Sys.shiftState) {
            console.log("shift点亮！");
        } else {
            console.log("shift关闭！");
        }
    },
    funInputs: function Inputs() { //输入存储模块

    },
    funClicksId: document.onclick = function (event) { //虚拟按键功能模块
        Sys.clicksId = ""; //清空之前获取的值。--->以防出现错误
        var e = event || window.event;
        Sys.clicksId = e.target.id || e.srcElement.id; //获取鼠标点击元素ID值
        if (Sys.clicksId != null) { //clicksId不为空时触发
            Sys.funVkde.openKeyDownCss(Sys.clicksId); //鼠标点击虚拟按键时触发按键样式
        }
    },
    funKeysId: function KeysId() { //实体按键功能模块
        document.onkeydown = function (event) {
            Sys.keysId = ""; //清空之前获取的值。--->以防出现错误
            var e = event || window.event || arguments.callee.caller.arguments[0];
            /* Shift组合键 */
            var shiftKey = e.shiftKey || e.shiftKey;
            /* Ctrl组合键 */
            var ctrlKey = e.ctrlKey || e.metaKey;
            /* Alt */
            var altKey = e.altKey || e.altKey;
            var es = e && e.keyCode; //获取键盘输入的按键值
            console.log(e);
            console.log(e.keyCode);
            if (es == 16) {
                if (!this.sky) {
                    this.sky = true;
                } else {
                    this.sky = false;
                }
                console.log(this.sky);
            }
            if (es == 96 || !shiftKey && es == 48) { //按【0】 
                Sys.keysId = "Zero";
            }
            if (es == 97 || !shiftKey && es == 49) { //按【1】
                Sys.keysId = "One";
            }
            if (es == 98 || !shiftKey && es == 50) { //按【2】 
                Sys.keysId = "Two";
            }
            if (es == 99 || !shiftKey && es == 51) { //按【3】 
                Sys.keysId = "Three";
            }
            if (es == 100 || !shiftKey && es == 52) { //按【4】 
                Sys.keysId = "Four";
            }
            if (es == 101 || !shiftKey && es == 53) { //按【5】 
                Sys.keysId = "Five";
            }
            if (es == 102 || !shiftKey && es == 54) { //按【6】 
                Sys.keysId = "Six";
            }
            if (es == 103 || !shiftKey && es == 55) { //按【7】 
                Sys.keysId = "Seven";
            }
            if (es == 104 || !shiftKey && es == 56) { //按【8】 
                Sys.keysId = "Eight";
            }
            if (es == 105 || !shiftKey && es == 57) { //按【9】 
                Sys.keysId = "Nine";
            }
            if (es == 110 || this.sky && es == 190) { //按【.】 
                Sys.keysId = "Spot";
            }
            if (es == 107 || shiftKey && es == 187) { //按【+】 
                Sys.keysId = "Plus";
            }
            if (es == 189 || es == 109) { //按【-】 
                Sys.keysId = "Reduce";
            }
            if (es == 106 || shiftKey && es == 56) { //按【*】 
                Sys.keysId = "Ride";
            }
            if (es == 111 || this.sky && es == 191) { //按【/】 
                Sys.keysId = "Except";
            }
            if (!shiftKey && es == 13 || !shiftKey && es == 187) { //按【=】 
                Sys.keysId = "Result";
            }
            if (shiftKey && ctrlKey && altKey && es == 13) { //关机：按【Shift】+【Ctrl】+【Alt】+【Esc】
                Sys.funClose();
            }
            if (!altKey && !ctrlKey && shiftKey && es == 13) { //开机状态下：按【shift】+【=】切换功能键
                Sys.funVkde.funShifts(); //启动shift按键对应程序
            }
            if (Sys.keysId != null) {
                Sys.funVkde.openKeyDownCss(Sys.keysId);
            }
        }
    },
    funCalcs: function Calcs() { //计算模块
    },
    funOpen: function Open() { //开机模块
        if (!Sys.Switchs) {
            Sys.Switchs = true;
            Sys.funDisplays.OpenCloses(); //进入开机画面
            //加载屏幕显示模块
            //加载语音模块
            Sys.fundivIds(); //加载ID通道
            Sys.funKeysId(); //加载按键通道1:实体键盘
            //加载按键通道2:虚拟键盘
            return Sys.Switchs;
        }
    },
    funClose: function Close() { //关机模块
        if (Sys.Switchs) {
            Sys.Switchs = false;
            //清除屏幕显示内容
            Sys.funDisplays.OpenCloses(); //进入关机机画面
            //清除存储数据
            //断开按键通道、保留开机按键取消其余按键功能
            Sys.funVkde.closeKeyCss();
            InitCalculator();
            return Sys.Switchs;
        }
    },
    funOpenClose: function OpenClose() {
        document.onkeydown = function (event) { //实体键盘开机
            var e = event || window.event || arguments.callee.caller.arguments[0];
            /* Shift组合键 */
            var shiftKey = e.shiftKey || e.shiftKey;
            /* Ctrl组合键 */
            var ctrlKey = e.ctrlKey || e.metaKey;
            /* Alt */
            var altKey = e.altKey || e.altKey;
            var es = e && e.keyCode;
            if (!altKey && !ctrlKey && shiftKey && es == 13) { //关机状态下；按【Shift】+【=】开机
                Sys.funOpen();
                Sys.funVkde.stateKeyCss("Open");
            }
        };
        (function onclicks() {
            var Opens = document.getElementById("Open");
            Opens.onclick = function () {
                Sys.funOpen();
                Sys.funVkde.stateKeyCss("Open");
            }
        })();
    },
}
/* 加载页面完成初始化:Init/初始化、Calculator/计算器 */
window.onload = InitCalculator;

function InitCalculator() {
    Sys = new sys(); //初始化程序
    Sys.funOpenClose(); //开关机
}
















var fn = function (id) {
    return document.getElementById(id);
};

(function ($) {
    var buttons = $("functions").children;
    console.log(buttons);
})(fn);