/* 判断鼠标滚动的方向1.0 */
/* 说明：通过scrollTop页面距离顶部的位置来判断 */
(function () {
    var roota = document.documentElement;
    var rootb = document.body;
    var Tops = new Array();
    var nums;
    Tops[0] = 0;
    window.onscroll = function mouses() {
        if (Tops[1] == null) {
            if (roota.scrollTop == 0) {
                Tops[1] = rootb.scrollTop;
            } else {
                Tops[1] = roota.scrollTop;
            }
        } else {
            Tops.shift();
            if (roota.scrollTop == 0) {
                Tops[1] = rootb.scrollTop;
            } else {
                Tops[1] = roota.scrollTop;
            }
        }
        if (Tops[1] != null) {
            nums = Tops[1] - Tops[0];
            if (nums < 0) {
                //console.log("鼠标向上滚动！");
            } else {
                //console.log("鼠标向下滚动！");
            }
        }
    }
})();


/* 判断鼠标滚动的方向1.1 */
(function () {
    var scrollMouse = function (e) {
        e = e || window.event;
        if (e.wheelDelta) { //判断浏览器IE，谷歌滑轮事件               
            if (e.wheelDelta > 0) { //当滑轮向上滚动时  
                //alert("滑轮向上滚动");
            }
            if (e.wheelDelta < 0) { //当滑轮向下滚动时  
                //alert("滑轮向下滚动");
            }
        } else if (e.detail) { //Firefox滑轮事件  
            if (e.detail > 0) { //当滑轮向下滚动时  
                //alert("滑轮向下滚动");
            }
            if (e.detail < 0) { //当滑轮向上滚动时  
                //alert("滑轮向上滚动");
            }
        }
    }
    //给页面绑定滑轮滚动事件  
    if (document.addEventListener) { //firefox  
        document.addEventListener("DOMMouseScroll", scrollMouse, false);
    }
    //滚动滑轮触发scrollFunc方法  //ie 谷歌  
    window.onmousewheel = scrollMouse;
})();