(function topes() {
    var inatop = document.getElementById("inatop");
    var top = document.createElement("div");
    var logo = document.createElement("div");
    var la = document.createElement("a");
    inatop.appendChild(top);
    top.appendChild(logo);
    logo.appendChild(la);
    top.className = "top";
    logo.className = "logo";
    la.href = "./index.html";
    la.innerHTML = "首页";
})();