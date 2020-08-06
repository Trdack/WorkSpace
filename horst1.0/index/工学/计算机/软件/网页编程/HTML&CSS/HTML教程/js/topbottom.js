function topes() {
    var inatop = document.getElementById("inatop");
    var top = document.createElement("div");
    var logo = document.createElement("div");
    var la = document.createElement("a");
    inatop.appendChild(top);
    top.appendChild(logo);
    logo.appendChild(la);
    top.className = "top";
    logo.className = "logo";
    la.href = "./../../../#.html";
    la.innerHTML = "首页";
}

function bottomes() {
    var bottom = document.getElementById("bottom");
    var wzxx = document.createElement("div");
    var p = document.createElement("p");
    bottom.appendChild(wzxx);
    wzxx.appendChild(p);
    wzxx.id = "wzxx";
    wzxx.className = "wzxx";
    var bas = '<span>网站声明：</span>';
    var bbs = '我们不是知识的创造者，我们只是知识的传播者！本网站所提供的一切资料，仅供学习参考。本网站不保证绝对正确。任何人使用本网站所提供的资料所造成的一切后果均由个人承担，本网站概不负责！';
    var bcs = '(<a href ="http://www.miitbeian.gov.cn">新ICP备15002866号</a>)';

    p.innerHTML = bas + bbs + bcs;
}

topes();
bottomes();