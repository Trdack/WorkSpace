/* PC键盘输入 */

var sky = false;
var keyInput;
document.onkeydown = function keys(event) {
    var e = event || window.event || arguments.callee.caller.arguments[0];
    var es = e || e.keyCode || e.which;
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
    console.log(event);
    console.log("就是这里：");
    //console.log(e.key);
    //console.log(valueCapsLock);
    keyInput = es.key || e.key;
    //a~z:65~90
    var las = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var lbs = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var charas = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+', '=', '[', ']', '{', '}', '\\', '|', ':', ';', '"', "'", ',', '.', '/', '<', '>', '?', '~', '_'];
    var charbs = ['`', ];
    var displays = document.getElementById("displays");
    var inbs = document.getElementById("inbs");
    var inputTexts;
    displays.innerHTML = keyInput;

}