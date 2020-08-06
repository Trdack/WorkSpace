function getId(evt) {
    evt = evt || window.event;
    var obj = evt.target || evt.srcElement;
    document.getElementById("text").innerHTML = obj.id;
}
var body = document.body;
var container = document.getElementById("container");
console.log(container);
console.log(body);
body.onclick = function as() {
    getId();
};
/* 
$(function () {
    $(document).click(function (e) { // 在页面任意位置点击而触发此事件


        var v_id = $(e.target).attr('id');

        alert(v_id);
    })

}); */