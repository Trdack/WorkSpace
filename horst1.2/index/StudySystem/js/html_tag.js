(function () {
    var htmlTag = [
        ["!--...--", "定义注释"],
        ["!DOCTYPE", "定义文档类型"],
        ["a", "定义超文本链接"],
        ["abbr", "定义缩写"],
        ["acronym", "定义只取首字母的缩写，HTML5不支持"],
        ["address", "定义文档作者或拥有者的联系信息"],
        ["applet", "定义嵌入的applet，HTML5不支持"],
        ["area", "定义图像映射内部的区域"],
        ["article", "定义一个文章区域"],
        ["aside", "定义页面侧边栏内容"],
        ["audio", "定义音频内容"],
        ["b", "定义字体粗体"],
        ["base", "定义页面中所有链接的默认地址或默认目标"],
        ["basefont", "定义页面中文本的默认字体、颜色和尺寸，HTML5不支持，不赞成使用"],
        ["bdi", "允许您设置一段文本，使其脱离父系元素的文本方向设置"],
        ["bdo", "定义文本方向"],
        ["big", "定义大号字体，HTML5不支持"],
        ["blockquote", "定义长的引用"],
        ["body", "定义文档主体"],
        ["br", "定义转行"],
        ["button", "定义一个按钮"],
        ["canvas", "定义图形，比如图表和其他图像，标签只是图形容器，您必须使用脚本来绘制图形"],
        ["caption", "定义表格标题"],
        ["center", "定义居中文本，HTML5不支持"],
        ["cite", "定义引用(citation)"],
        ["code", "定义计算机代码文本"],
        ["col", "定义表格中一个或多个列的属性值"],
        ["colgroup", "定义表格中供格式化的列组"],
        ["command", "定义命令按钮，比如单选按钮、复选框或按钮"],
        ["datalist", "定义选项列表。请与input元素配合使用该元素，来定义input可能的值"],
        ["dd", "定义定义列表中项目的描述"],
        ["del", "定义被删除文本"],
        ["details", "用于描述文档或文档某个部分的细节"],
        ["dfn", "定义定义项目"],
        ["dialog", "定义对话框，比如提示框"],
        ["dir", "定义目录列表，HTML5不支持"],
        ["div", "定义文档中的节"],
        ["dl", "定义列表详情"],
        ["dt", "定义列表中的项目"],
        ["em", "定义强调文本"],
        ["embed", "定义嵌入内容，比如插件"],
        ["fieldset", "定义围绕表单中元素的边框"],
        ["figcaption", "定义&lt;figure&gt;元素的标题"],
        ["figure", "规定独立的流内容(图像，图表，照片，代码等等)"],
        ["font", "定义文字的字体、尺寸和颜色，HTML5不支持"],
        ["footer", "定义section或document的页脚"],
        ["form", "定义HTML文档的表单"],
        ["frame", "定义框架集的窗口或框架"],
        ["frameset", "定义框架集"],
        ["h1~h6", "定义HTML标题"],
        ["head", "定义关于文档的信息"],
        ["header", "定义文档头部区域"],
        ["hr", "定义水平线"],
        ["html", "定义HTML文档"],
        ["i", "定义斜体"],
        ["iframe", "定义内联框架"],
        ["img", "定义图像"],
        ["input", "定义输入控件"],
        ["ins", "定义被插入文本"],
        ["kbd", "定义键盘文本"],
        ["keygen", "规定用于表单的密钥对生成器字段"],
        ["label", "定义input元素的标注"],
        ["legend", "定义fieldset元素的标题"],
        ["li", "定义列表的项目"],
        ["link", "定义文档与外部资源的关系"],
        ["main", "定义文档的主体部分"],
        ["map", "定义图像的映射"],
        ["mark", "定义带有记号的文本，请在需要突出显示文本时使用&lt;m&gt;标签"],
        ["menu", "定义菜单列表，不赞成使用"],
        ["meta", "定义关于HTML文档的元信息"],
        ["metter", "定义度量衡。仅用于已知最大和最小值的度量"],
        ["nav", "定义导航链接的部分"],
        ["noframes", "定义针对不支持框架的用户的替代内容。HTML5不支持"],
        ["noscript", "定义针对不支持客户端脚本的用户的替代内容。"],
        ["object", "定义内嵌对象。"],
        ["ol", "定义有序列表。"],
        ["optgroup", "定义选择列表中相关选项的组合。"],
        ["option", "定义选择列表中的选项。"],
        ["output", "定义不同类型的输出，比如脚本输出。"],
        ["p", "定义段落。"],
        ["param", "定义对象的参数。"],
        ["pre", "定义预格式文本。"],
        ["progress", "定义运行中的进度(进程)。"],
        ["q", "定义短的引用。"],
        ["rp", "定义不支持&lt;ruby&gt;元素的浏览器所显示的内容。在ruby注释中使用。"],
        ["rt", "定义字符(中文注音或字符)的解释或发音。"],
        ["ruby", "定义ruby注释(中文注音或字符)。"],
        ["s", "定义加删除线的文本，不赞成使用。"],
        ["samp", "定义计算机代码样本。"],
        ["script", "定义客户端脚本。"],
        ["section", "定义文档中的节(section、区段)。比如章节、页眉、页脚或文档中的其他部分。"],
        ["select", "定义选择列表(下拉列表)。"],
        ["small", "定义小号文本。"],
        ["source", "为媒介元素(比如&lt;video&gt;和&lt;audio&gt;)定义媒介资源。"],
        ["span", "定义文档中的节。"],
        ["strike", "定义加删除线文本。HTML5不支持"],
        ["strong", "定义强调文本。"],
        ["style", "定义文档的样式信息。"],
        ["sub", "定义下标文本。"],
        ["summary", '包含details元素的标题，"details"元素用于描述有关文档或文档片段的详细信息。'],
        ["sup", "定义上标文本。"],
        ["table", "定义表格。"],
        ["tbody", "定义表格中的主体内容。"],
        ["td", "定义表格中的单元。"],
        ["textarea", "定义多行的文本输入控件。"],
        ["tfoot", "定义表格中的表注内容(脚注)。"],
        ["th", "定义表格中的表头单元格。"],
        ["thead", "定义表格中表头的内容。"],
        ["time", "定义日期或时间，或者两者。"],
        ["title", "定义文档的标题。"],
        ["tr", "定义表格中的行。"],
        ["track", "为诸如video元素之类的媒介规定外部文本轨道。"],
        ["tt", "定义打字机文本。"],
        ["u", "定义下划线文本。不赞成使用"],
        ["ul", "定义无序列表。"],
        ["var", "定义文本的变量部分。"],
        ["video", "定义视频，比如电影片段或其他视频流。"],
        ["wbr", "规定在文本中的何处合适添加换行符。"]
    ];

    /*     var displays = document.getElementById("displays");
        var inbs = document.getElementById("inbs");
        var inputTexts;

        function displayes() {
            displays.innerHTML = document.myForm.inas.value;
        }


        document.onkeyup = function (event) {
            var e = event || window.event || arguments.callee.caller.arguments[0];
            var es = e && e.keyCode;
            if (es == 13) {
                document.getElementById("inas").focus();
                document.getElementById("inas").value = "";
            }
        }
        document.onkeydown = function (event) {
            var e = event || window.event || arguments.callee.caller.arguments[0];
            var es = e && e.keyCode;
            if (es == 13) {
                displayes();
            }
        } */
})();