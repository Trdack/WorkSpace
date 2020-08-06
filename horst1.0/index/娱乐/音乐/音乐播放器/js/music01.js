var atak = new Array();
var atck = new Array();
var atdk = new Array();
atak[0] = document.body.clientWidth;
atak[1] = document.body.clientHeight;
atak[2] = document.body.offsetWidth;
atak[3] = document.body.offsetHeight;
atak[4] = document.body.scrollWidth;
atak[5] = document.body.scrollHeight;
atak[6] = document.documentElement.scrollTop;
atak[7] = document.documentElement.scrollLeft;
atak[8] = window.screenTop;
atak[9] = window.screenLeft;
atak[10] = window.screen.height;
atak[11] = window.screen.width;
atak[12] = window.screen.availHeight;
atak[13] = window.screen.availWidth;
atak[14] = window.innerHeight;
atak[15] = window.innerWidth;

atck[0] = "document.body.clientWidth";
atck[1] = "document.body.clientHeight";
atck[2] = "document.body.offsetWidth(包括边线的宽)";
atck[3] = "document.body.offsetHeight(包括边线的高)";
atck[4] = "document.body.scrollWidth";
atck[5] = "document.body.scrollHeight";
atck[6] = "document.body.scrollTop";
atck[7] = "document.body.scrollLeft";
atck[8] = "window.screenTop";
atck[9] = "window.screenLeft";
atck[10] = "window.screen.height";
atck[11] = "window.screen.width";
atck[12] = "window.screen.availHeight";
atck[13] = "window.screen.availWidth";
atck[14] = "window.innerHeight";
atck[15] = "window.innerWidth";

atdk[0] = "网页可见区域宽：";
atdk[1] = "网页可见区域高：";
atdk[2] = "网页可见区域宽：";
atdk[3] = "网页可见区域高：";
atdk[4] = "网页正文全文宽：";
atdk[5] = "网页正文全文高：";
atdk[6] = "网页被卷去的高：";
atdk[7] = "网页被卷去的左：";
atdk[8] = "网页正文部分上：";
atdk[9] = "网页正文部分左：";
atdk[10] = "屏幕分辨率的高：";
atdk[11] = "屏幕分辨率的宽：";
atdk[12] = "屏幕可用工作区高度：";
atdk[13] = "屏幕可用工作区宽度：";
atdk[14] = "浏览器窗口的内部高度：";
atdk[15] = "浏览器窗口的内部宽度：";

/* for (var i = 0; i < atak.length; i++) {
    document.write(i + "." + atck[i] + atdk[i] + atak[i] + "<br />");
} */