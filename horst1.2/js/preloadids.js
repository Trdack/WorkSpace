//页面id接口预载
function fn(id) {
    return document.getElementById(id);
}
var allids;
(function ($) {
    var body = document.body;
    allids = $("index").children;
})(fn);
//插入ID接口
function fc(Id, Tag) {
    return Id = document.createElement(Tag);
};