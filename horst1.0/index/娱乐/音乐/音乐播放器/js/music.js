//JavaScript Document
//播放器
var mymusic = document.getElementById("mymusic");
var mc_all = document.getElementById("mc_all");
//音乐时间
var duration = document.getElementById("duration");
//播放进度条
var prograss = document.getElementById("prograss");
//播放时间
var curtxt = document.getElementById("currenttime");
//歌曲名
var mc_name = document.getElementById("mc_name");
//演唱者
var mc_songer = document.getElementById("mc_songer");
//播放&暂停
var playpuase = document.getElementById("playpause");
//下一曲
var next_mc = document.getElementById("next_mc");
//上一曲
var back_mc = document.getElementById("back_mc");
//播放顺序
var mode_mc = document.getElementById("mode_mc");
var mode_mc1 = document.getElementById("mode_mc1");
//播放列表
var listing_mc = document.getElementById("listing_mc");
//播放声音
var volume_mc = document.getElementById("volume_mc");

var deg = 0; //旋转角度
var disctimer, prograsstimer; //碟片计时器，进度条计时器
var musicindex = 0; //音乐索引


//音乐存储
var mc = new Array(8);
for (i = 0; i < mc.length; i++) {
    mc[i] = new Array();
}
mc = [
    ["BM宝宝王", "不谓侠(女生版)", "mp3"],
    ["Declan Galbraith", "Tell Me Why", "mp3"],
    ["DiESi", "穿越时空的思念(DiESi Remix)", "mp3"],
    ["HITA", "赤伶", "mp3"],
    ["HITA、夏肉肉", "兰芷铃音·记兰生襄铃", "mp3"],
    ["Hmoob", "苗族歌曲卡拉69", "mp3"],
    ["Rewind Top Shelf NCS、九书", "Road So Fars(纯音乐)", "mp3"],
    ["The xx", "Intro", "mp3"],
    ["光少勤", "清新的小女孩", "mp3"],
    ["光良", "童话(钢琴版)", "mp3"],
    ["刁寒", "花好月圆", "mp3"],
    ["刘欢、王菲", "笑傲江湖", "mp3"],
    ["刘雨Key", "大田後生仔", "mp3"],
    ["北京市少年宫合唱团", "我爱你,中国", "mp3"],
    ["匡桐菲", "今天是你的生日我的中国", "mp3"],
    ["半阳", "一曲相思", "mp3"],
    ["华晨宇", "烟火里的尘埃", "mp3"],
    ["周杰伦", "一路向北", "mp3"],
    ["塔米尔", "安和桥(马头琴)", "mp3"],
    ["夏雨菲", "一百万个可能", "mp3"],
    ["夏雨菲", "去年夏天", "mp3"],
    ["夏雨菲", "沙漠骆驼", "mp3"],
    ["子明", "杂草", "mp3"],
    ["孙露", "口是心非", "mp3"],
    ["安小木", "孤芳自赏(男声版)", "mp3"],
    ["安振铎", "安河桥(纯音乐)", "mp3"],
    ["小傻瓜118", "你笑起来真好看", "mp3"],
    ["小石头和孩子们、师葭希", "成都", "mp3"],
    ["师葭希", "九月", "mp3"],
    ["师葭希", "像风一样自由", "mp3"],
    ["师葭希", "探清水河", "mp3"],
    ["师葭希", "故乡", "mp3"],
    ["师葭希", "都选C", "mp3"],
    ["师葭希、韩甜甜", "知否知否", "mp3"],
    ["庄园", "天下有情人", "mp3"],
    ["张蔷", "夜猫", "mp3"],
    ["徐金慧", "我爱你中国(新版)", "mp3"],
    ["戴羽彤", "胆小鬼", "mp3"],
    ["戴荃", "悟空(Live)", "mp3"],
    ["日本群星", "ひだまりの郷", "mp3"],
    ["曹雪", "希望所有的人都快乐", "mp3"],
    ["李君筠", "金枝欲孽(咏叹调)", "mp3"],
    ["李婉莹", "等你回眸", "mp3"],
    ["李智楠", "红色石头", "mp3"],
    ["林子祥", "长路漫漫任我闯(TV版)", "mp3"],
    ["梁--君", "你笑起来真好看", "m4a"],
    ["梁--君", "你笑起来真好看", "mp3"],
    ["楊壹壹", "一个", "mp3"],
    ["毛宁", "蓝蓝的夜蓝蓝的梦", "mp3"],
    ["水木年华", "中学时代", "mp3"],
    ["泽亦龙、小波蒂", "今天你嗨了么", "mp3"],
    ["洪真英", "산다는 건", "mp3"],
    ["童珺", "伪装(女声版)", "mp3"],
    ["竹影聆风", "穿越时空的思念(笛子版)", "mp3"],
    ["纯音乐", "夜空中最亮的星(贝斯)", "mp3"],
    ["纯音乐", "开发右脑的脑波音乐", "mp3"],
    ["花粥", "纸短情长", "mp3"],
    ["苏谭谭", "别无所求", "mp3"],
    ["范茹", "人间不值得", "mp3"],
    ["超文艺", "慕夏", "mp3"],
    ["达宇", "铁血丹心(笛子版)", "mp3"],
    ["陈一彤", "处处吻(女生版)", "mp3"],
    ["陈宝硕", "金枝欲孽(笛子二重奏)", "mp3"],
    ["陈筱雪", "酒醉的蝴蝶(女声版)", "mp3"],
    ["雨宗林", "会哭的人不一定流泪", "mp3"],
    ["麦振鸿", "天地之音", "mp3"],
    ["麦振鸿", "恨爱交加", "mp3"],
    ["麦振鸿", "莫失莫忘", "mp3"],
    ["黄圣依", "只要为你活一天(纯音乐)", "mp3"],
    ["黎林添娇", "公子向北走", "mp3"]
];

var modetas = 1;
//播放模式 
var modes = new Array(3);
modes[0] = "mode1";
modes[1] = "mode2";
modes[2] = "mode3";
var md = 0;
//鼠标点击，判断三种循环模式，并改变图标状态
mode_mc.onclick = function mode_mc() {
    md++;
    if (md >= modes.length) {
        md = 0;
    }
    mode_mc1.className = modes[md];
    var modets = mode_mc1.className;
    if (modets == "mode1") {
        modetas = 1;
    } else if (modets == "mode2") {
        modetas = 2;
    } else {
        modetas = 3;
    }
    return modetas;
}
//顺序播放sequenTials
//sequenTials_a 顺序加
function sequenTials_a() {
    musicindex++; //音乐索引加一
    if (musicindex >= mc.length) //如果音乐索引超过长度，将音乐索引清零
    {
        musicindex = 0;
    }
    return musicindex;
}
//sequenTials_b 顺序减
function sequenTials_b() {
    musicindex--; //音乐索引减一
    if (musicindex < 0) //如果音乐索引小于0，将音乐索引跳到最大
    {
        musicindex = mc.length - 1;
    }
    return musicindex;
}
//随机播放ranDoms
function ranDoms() {
    var allms = mc.length;
    var as = allms;
    musicindex = Math.floor(Math.random() * mc.length);
    console.log(musicindex);
    return musicindex;
}

//songleLoop

//选择模式一>>下一曲
function mode_a() {
    if (modetas == "1") {
        sequenTials_a();
    } else if (modetas == "2") {
        ranDoms();
    } else if (modetas == "3") {
        sequenTials_a();
    }
}

//选择模式二>>上一曲
function mode_b() {
    if (modetas == "1") {
        sequenTials_b();
    } else if (modetas == "2") {
        ranDoms();
    } else if (modetas == "3") {
        sequenTials_b();
    }
}

//选择模式三>>自动换曲
function mode_c() {
    if (modetas == "1") {
        if (mymusic.currentTime >= mymusic.duration - 1) //片尾跳转下一曲
        {
            musicindex++; //音乐索引加一
            if (musicindex >= mc.length) //如果音乐索引超过长度，将音乐索引清零
            {
                musicindex = 0;
            }
            getMusic();
            mymusic.play(); //重载音乐后进行播放
        }
    } else if (modetas == "2") {
        if (mymusic.currentTime >= mymusic.duration - 1) //片尾跳转下一曲
        {
            ranDoms();
            getMusic();
            mymusic.play(); //重载音乐后进行播放
        }
    } else if (modetas == "3") {
        if (mymusic.currentTime >= mymusic.duration - 1) //片尾跳转下一曲
        {
            mymusic.loop = false;
            getMusic();
            mymusic.play(); //重载音乐后进行播放
        }
    }
}


//初始化音乐
function mcstr() {
    clearInterval(disctimer); //清除碟片的定时器
    playpuase.style.background = "url(./images/player_bg/暂停.gif) round"; //改变播放暂停键的图标
    disctimer = setInterval(function () {
        // .styke.transform旋转
        disc[0].style.transform = "rotate(" + deg + "deg)";
        deg += 10;
        //每秒设置进度条长度
    }, 100);
    prograsstimer = setInterval(function () {
        prograss.style.width = (mymusic.currentTime) * 100 / (mymusic.duration) + "%";
        curtime(curtxt, mymusic);
        mode_c();
    }, 1000);
}
//旋转唱片
var disc = document.getElementsByClassName('disc');
//载入列表
/* listing_mc.onclick = function liting_mc() {

} */


//音乐时间显示
function curtime(txt, mymusic) {
    if (mymusic.currentTime < 10) {
        txt.innerHTML = "00:0" + Math.floor(mymusic.currentTime);
    } else
    if (mymusic.currentTime < 60) {
        txt.innerHTML = "00:" + Math.floor(mymusic.currentTime);
    } else {
        var mient = parseInt(mymusic.currentTime / 60);
        var sec = parseInt(mymusic.currentTime % 60);
        if (mient < 10) {
            if (sec < 10) {
                txt.innerHTML = "0" + mient + ":" + "0" + sec;
            } else {
                txt.innerHTML = "0" + mient + ":" + sec;
            }
        } else {
            if (sec < 10) {
                txt.innerHTML = mient + ":" + "0" + sec;
            } else {
                txt.innerHTML = mient + ":" + sec;
            }
        }
    }
}

//播放&暂停
playpuase.onclick = function playpuase() {
    if (mymusic.paused) {
        mymusic.play();
        mcstr();
    } else {
        mymusic.pause(); //停止音乐
        playpause.style.background = "url(./images/player_bg/播放.gif) round";
        clearInterval(disctimer); //清除碟片滚动定时器
        clearInterval(prograsstimer); //清除进度条的定时器
    }
}

//下一曲
next_mc.onclick = function next_mc() {
    mode_a();
    getMusic();
    mymusic.play();
    mcstr();
}

//上一曲
back_mc.onclick = function back_mc() {
    mode_b();
    getMusic();
    mymusic.play();
    mcstr();
}

//点击进度条设置播放进度
function produtions() {
    //获取音乐起始时间
    mymusic.currentTime = 40;
}

//加载歌词

//加载列表
function listIng() {

}

//读取音乐
function getMusic() {
    mymusic.src = "./music/" + mc[musicindex][0] + " - " + mc[musicindex][1] + "." + mc[musicindex][2]; //改变音乐的src(地址)
    mc_name.innerHTML = musicindex + "." + mc[musicindex][1];
    mc_songer.innerHTML = mc[musicindex][0];
    if (mymusic.readyState = "complete") // 判断是否加载完成
    {
        setTimeout(function () {
            if (mymusic.duration < 10) {
                duration.innerHTML = "00" + ":" + "0" + mymusic.duration;
            } else
            if (mymusic.duration < 60) {
                duration.innerHTML = "00" + ":" + mymusic.duration;
            } else {
                var mint = parseInt(mymusic.duration / 60);
                var sce = parseInt(mymusic.duration % 60);
                if (mint < 10) {
                    if (sce < 10) {
                        duration.innerHTML = "0" + mint + ":" + "0" + sce;
                    } else {
                        duration.innerHTML = "0" + mint + ":" + sce;
                    }
                } else {
                    if (sce < 10) {
                        duration.innerHTML = mint + ":" + "0" + sce;
                    } else {
                        duration.innerHTML = mint + ":" + sce;
                    }
                }
            }
        }, 500); //一秒后读取音乐的总时长
    }
}

window.onload = function () {
    getMusic();
}