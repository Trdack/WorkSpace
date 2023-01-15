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
var mc = new Array(6);
for (i = 0; i < mc.length; i++) {
    mc[i] = new Array();
}
mc[0][0] = "花粥";
mc[0][1] = "纸短情长";
mc[0][2] = "mp3";
mc[1][0] = "李智楠";
mc[1][1] = "红色石头";
mc[1][2] = "mp3";
mc[2][0] = "孙露";
mc[2][1] = "口是心非";
mc[2][2] = "mp3";
mc[3][0] = "华晨宇";
mc[3][1] = "烟火里的尘埃";
mc[3][2] = "mp3";
mc[4][0] = "半阳";
mc[4][1] = "一曲相思";
mc[4][2] = "mp3";
mc[5][0] = "HITA、夏肉肉";
mc[5][1] = "兰芷铃音·记兰生襄铃";
mc[5][2] = "mp3";

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
        next_a();
    }, 1000);
}


//旋转唱片
var disc = document.getElementsByClassName('disc');
//载入列表
/* listing_mc.onclick = function liting_mc() {

} */


//音乐时间显示
function curtime(txt, misic) {
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

//播放模式 
var modes = new Array(3);
modes[0] = "mode1";
modes[1] = "mode2";
modes[2] = "mode3";
var md = 0;
var mc = 0;
mode_mc.onclick = function mode_mc() {
    md++;
    if (md >= modes.length) {
        md = 0;
    }
    mode_mc1.className = modes[md];
    var mdd = mc++;
    mode_mc1.innerHTML = mdd;
}
//顺序sequential
function sequenTials() {}
//随机random
//单曲singleLoop
//跳转下一曲
function next_a() {
    if (mdd == 0) {

    } else if (mdd == 1) {

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
    musicindex++;
    if (musicindex >= mc.length) //如果音乐索引超过存储数组长度，将音乐索引清零
    {
        musicindex = 0;
    }
    getMusic();
    mymusic.play();
    mcstr();
}

//上一曲
back_mc.onclick = function back_mc() {
    musicindex--;
    if (musicindex < 0) //如果索引小于0,将索引变为最大值
    {
        musicindex = mc.length - 1;
    }
    getMusic();
    mymusic.play();
    mcstr();
}


//加载歌词

//加载列表
function listIng() {

}

//读取音乐
function getMusic() {
    mymusic.src = "./music/" + mc[musicindex][0] + " - " + mc[musicindex][1] + "." + mc[musicindex][2]; //改变音乐的src(地址)
    mc_name.innerHTML = mc[musicindex][1];
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
        }, 120); //一秒后读取音乐的总时长
    }
}

window.onload = function () {
    getMusic();
}