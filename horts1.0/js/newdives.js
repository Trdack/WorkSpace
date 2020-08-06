function newdives(div) {
    for (var a = 0; a < div.fId.length; a++) {
        div.fId[a] = document.getElementById(div.fId[a]);
        div.sId[a] = document.createElement(div.tag);
        div.fId[a].appendChild(div.sId[a]);
        div.sId[a].id = div.idn[a];
        div.sId[a].className = div.cln[a];
        div.sId[a].onmouseover = function a() {
            this.style.cursor = "default";
        }
        div.sId.onmouseout = function a() {
            this.style.cursor = "default";
        }
    }
}