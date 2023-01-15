//n级目录：muluas,mulubs,mulucs,muluds,......
//书名：bkname;
var bkname = "《JavaScript从入门到精通》";
var muluas = ["JavaScript概述", "", "", , "HTML是学习JavaScript的基础", "JavaScript基本语法", "JavaScript运算符", "JavaScript结构语法", "JavaScript函数", "初级开发与调试", "Number对象", "String对象", "Math对象", "Array数组对象", "Date对象", "Window对象", "Document对象", "Form表单对象", "event事件对象", "JavaScript其他对象", "CSS在JavaScript中的应用", "面向对象编程", "DOM对象", "Web 2.0调试与测试", "Ajax", "XML与JSON", "综合案例"];
var mulubs = [
    ["什么是JavaScript", "为什么使用JavaScript", "JavaScript有什么作用", "在什么地方使用JavaScript", "如何使用JavaScript", "怎样编写JavaScript", "如何运行JavaScript", "小结"],
    ["HTML简介", "结构化标记", "文本标记", "列表标记", "表单标记", "小结"],
    ["注释", "关键字", "&lt;script&gt;标记", "分号", "数据类型", "变量", "小结"],
    ["赋值运算符", "算术运算符", "字符串运算符", "比较运算符", "逻辑运算符", "位运算符", "条件运算符", "返回数据类型运算符", "其他运算符", "运算符优先级", "小结"],
    ["基本结构语句", "条件结构语句", "循环结构语句", "跳转结构语句", "异常处理语句", "使用with语句进行对象操作", "小结"],
    ["全局函数", "自定义函数", "函数对象", "小结"],
    ["管理源代码", "代码排版风格", "命名风格", "注释风格", "编写工具", "调试工具", "小结"],
    ["Number对象的简介和语法", "Number对象的属性", "Number对象的方法", "小结"],
    ["String对象的简介和语法", "字符串比较", "对字符串中字符的操作", "对字符串的操作", "格式化字符串", "小结"],
    ["Math对象语法", "Math对象属性", "Math对象方法", "小结"],
    ["数组对象语法", "对数组的操作", "对数组元素的操作", "自定义数组方法", "小结"],
    ["Date对象语法", "Date对象方法", "Date对象的计算", "显示日期和时间", "小结"],
    ["打开关闭窗口", "对话框", "对窗口的操作", "定时设置", "窗口事件", "小结"],
    ["文档中的对象", "文档中的内容", "对文档的操作", "文档事件", "小结"],
    ["表单对象", "按钮对象", "文本框对象", "复选框和单选按钮", "列表对象", "文件上传对象", "小结"],
    ["键盘按键", "鼠标操作", "鼠标指针位置", "小结"],
    ["frame框架对象", "history历史对象", "location对象", "navigator浏览器对象", "screen屏幕对象", "小结"],
    ["CSS基础", "CSS属性", "CSS定义方式", "小结"],
    ["面向对象基础", "使用Object类建立对象", "深入Object对象", "类的定义", "this详解", "文字记号法", "小结"],
    ["DOM概述", "访问DOM节点", "修改DOM节点实现动态HTML", "小结"],
    ["调试与测试的区别", "用Firebug调试JavaScript", "JsUnit做自动化单元格测试", "小结"],
    ["Ajax概述", "Ajax基础", "Dojo Ajax工具箱", "小结"],
    ["XML", "XPath", "Ajax与JSON", "小结"],
    ["跟随鼠标的彩色文字", "烟花效果的下拉菜单", "网络导航条", "类似QQ的菜单", "三级联动菜单", "实现关机效果的界面", "Ajax效果：字符串过滤", "Ajax效果：可拖拽的表格", "拖拽表格行改变顺序"]
];
var mulucs = [
    [
        ["abca1", "abca2", "abca3", "", "", , "", "abca8"],
        ["abca1", "abca2", "abca3", "", "", , "", "abca8"],
        ["abca1", "abca2", "abca3", "", "", , "", "abca8"]
    ],
    [],
    [
        [""],
        []
    ],
    [
        ["abca1", "abca2", "abca3", "", "", , "", "abca8"],
        ["abca1", "abca2", "abca3", "", "", , "", "abca8"],
        ["abca1", "abca2", "abca3", "", "", , "", "abca8"]
    ],
    [
        ["abca1", "abca2", "abca3", "", "", , "", "abca8"],
        ["abca1", "abca2", "abca3", "", "", , "", "abca8"],
        ["abca1", "abca2", "abca3", "", "", , "", "abca8"]
    ],
    [
        ["abca1", "abca2", "abca3", "", "", , "", "abca8"],
        ["abca1", "abca2", "abca3", "", "", , "", "abca8"],
        ["abca1", "abca2", "abca3", "", "", , "", "abca8"]
    ]
];


//dlest()删除数组多余元素
//为保证下级目录数组元素与上级目录相同删除下级数组中多余的元素
function dlest(myMus, myLt, myLs) {
    var ms = myMus.splice(myLt, myLs);
}



