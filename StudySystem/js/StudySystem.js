/* 
    超级学习系统主程序：StudySystem.js
*/
var Sys = null;

function studys() {};

studys.prototype = {
    BigLetter: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    CapLetter: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    Character: ['`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '=', '[', ']', '{', '}', '|', '\\', ';', ':', '"', "'", ',', '<', '.', '>', '/', '?'],
    Number: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    whichs: false, //游戏状态:true/运行、false/暂停
    Speeds: [1000, 900, 800, 700, 600, 500, 400, 300, 200, 100], //速度:等级
    CurrentSpeed: 1000, //当前速度
    divNumber: [1, 2, 3, 4, 5, 6, 7, 8, 9], //当前画面同时出现下落块数量，可自加自减可设置
    CurrentNumber: 1,
    lifes: [100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0], //生命初始值100；一次失误扣除10,为0时结束游戏
    life: 100,
    Modes: ['字母练习', '字母+数字', '字母+符号', '综合', '大小写'], //所有模式
    CurrentMode: 0, //当前模式
    Grades: ['初级', '中级', '高级', '困难', '特难', '超难'], //所有难度等级
    obtainAlls: [], //
    Generate: [],
    SizeX: [], //div横坐标
    SzieY: [], //div纵坐标
    sum: [],
    Timer: [],
    correct: 0,
    error: 0,
    divas: {
        index: [],
        sonId: [],
        classNames: [],
        idNames: [],
        tops: [],
        lefts: [],
        speed: [],
    },
    divbs: {
        index: [],
        sonId: [],
        clssNames: [],
        tops: [],
        lefts: [],
        idNames: [],
    },
    keydown: function() {
        if (Sys.whichs) {
            document.onkeydown = function(even) {
                var e = event || window.event || arguments.callee.caller.arguments[0];
                var es = e || e.keyCode || e.which;
                console.log(e);
                //console.log(e.keyCode);
                //console.log(e.code);
                //var valueCapsLock = e.keyCode ? e.keyCode : e.which;
                /* Shift组合键 */
                var shiftKey = e.shiftKey || e.shiftKey;
                /* Ctrl组合键 */
                var ctrlKey = e.ctrlKey || e.metaKey;
                /* Alt */
                var altKey = e.altKey || e.altKey;
                /* 判断shift是否按 下 */
                if (es == 16) {
                    if (!sky) {
                        sky = true;
                    } else {
                        sky = false;
                    }
                    console.log(sky);
                }
                Sys.blastDisplay();
                // return false;
            }
        } else if (!Sys.whichs) {
            document.onkeydown = null;
        }
    },
    classMode: { //模式
        InitMode: function() { //初始化练习模式
            var modeList = Sys.fn("mode");
            if (modeList.options.length == 0) {
                for (var i = 0; i < Sys.Modes.length; i++) {
                    var varItem = new Option(Sys.Modes[i], i);
                    modeList.options.add(varItem);
                }
            }
            Sys.classMode.SetModeSelected();
        },
        SetModeSelected: function() {
            var modeList = Sys.fn("mode");
            for (var i = 0; i < modeList.options.length; i++) {
                if (modeList.options[i].value == Sys.CurrentMode) {
                    modeList.options[i].selected = true;
                    break;
                }
            }
            Sys.classMode.fnobtain();
        },
        ChangeMode: function() {
            var modeList = Sys.fn("mode");
            Sys.CurrentMode = parseInt(modeList.options[modeList.selectedIndex].value);
            Sys.classMode.fnobtain();
        },
        fnobtain: function() {
            Sys.obtainAlls = [];
            var d = Sys.CurrentMode;
            switch (d) {
                case 0:
                    Sys.obtainAlls = Sys.CapLetter;
                    break;
                case 1:
                    Sys.obtainAlls = Sys.CapLetter.concat(Sys.Number);
                    break;
                case 2:
                    Sys.obtainAlls = Sys.CapLetter.concat(Sys.Character);
                    break;
                case 3:
                    Sys.obtainAlls = Sys.CapLetter.concat(Sys.Number).concat(Sys.Character);
                    break;
                case 4:
                    Sys.obtainAlls = Sys.CapLetter;
                    break;
            }
        }
    },
    classNumber: { //数量
        InitNumber: function() { //初始化下落数量
            var numberList = Sys.fn("number");
            if (numberList.options.length == 0) {
                for (var i = 0; i < Sys.divNumber.length; i++) {
                    var varItem = new Option(i + 1, Sys.divNumber[i]);
                    numberList.options.add(varItem);
                }
            }
            Sys.classNumber.SetNumberSelected();
        },
        SetNumberSelected: function() {
            var numberList = Sys.fn("number");
            for (var i = 0; i < numberList.options.length; i++) {
                if (numberList.options[i].value == Sys.CurrentNumber) {
                    numberList.options[i].selected = true;
                    break;
                }
            }
        },
        ChangeNumber: function() {
            var numberList = Sys.fn("number");
            Sys.CurrentNumber = parseInt(numberList.options[numberList.selectedIndex].value);

        },
    },
    classSpeed: { //速度
        InitSpeed: function() { //初始化游戏级别
            var speedList = Sys.fn("speed");
            if (speedList.options.length == 0) {
                for (var i = 0; i < Sys.Speeds.length; i++) {
                    var varItem = new Option(i + 1, Sys.Speeds[i]);
                    speedList.options.add(varItem);
                }
            }
            Sys.classSpeed.SetSpeedSelected();
        },
        SetSpeedSelected: function() { //选中级别
            var speedList = Sys.fn("speed");
            for (var i = 0; i < speedList.options.length; i++) {
                if (speedList.options[i].value == Sys.CurrentSpeed) {
                    speedList.options[i].selected = true;
                    break;
                }
            }
        },
        ChangeSpeed: function() {
            var speedList = Sys.fn("speed");
            Sys.CurrentSpeed = parseInt(speedList.options[speedList.selectedIndex].value);
            console.log(Sys.CurrentSpeed);
        }
    },
    divObiatn: function(n) { //生成div块
        var m = Sys.obtainAlls.length;
        var n = Sys.CurrentNumber;
        var divas = new Array();
        for (var i = 0; i < Sys.obtainAlls.length; i++) {
            divas[i] = Sys.obtainAlls[i];
        }
        var sum = new Array();
        for (var i = m; i > (m - n); i--) {
            var sums = Math.floor(Math.random() * i);
            Sys.Generate.push(divas.splice(sums, 1)[0]);
        }
        console.log(Sys.Generate);
    },
    divlocation: function() { //div位置
        var
    },
    CorrectError: function() { //判断正确还是错误

    },
    divdown: function() { //div下落;

    },
    SoundEffect: function() { //爆炸音效
        var audio = Sys.fn("audio");
        audio.currentTime = 0;
        audio.play();
    },
    volume: function() { //音量

    },
    blastDisplay: function() { //爆炸画面
        var blastDisplay = Sys.fn("blastDisplay");
        blastDisplay.style.display = "block";
        var timeoutas = setTimeout(
            function() {
                Sys.SoundEffect();
            }, 300);
        var timeouts = setTimeout(
            function() {
                blastDisplay.style.display = "none";
            }, 700);
    },
    fn: function(id) {
        return document.getElementById(id);
    },
    Display: {
        starts: function() {

        }
    },
    start: function() {
        var starts = Sys.fn("starts");
        starts.onclick = function() {
            if (!Sys.whichs) { //开始
                starts.innerHTML = "暂停";
                Sys.Timer[0] = setInterval("Sys.divObiatn()", 1000);
                Sys.whichs = true;
            } else { //暂停
                starts.innerHTML = "开始";
                clearInterval(Sys.Timer[0]);
                Sys.whichs = false;
            }
            Sys.keydown();
            Sys.Display.starts();
        }
    }
};

window.onload = InitCalculator;

function InitCalculator() {
    Sys = new studys();
    Sys.classMode.InitMode();
    Sys.classNumber.InitNumber();
    Sys.classSpeed.InitSpeed();
    Sys.start();
}