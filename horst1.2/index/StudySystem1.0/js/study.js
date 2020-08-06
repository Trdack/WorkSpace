/* 超级学习系统1.0-->study.js */
/* 开始日期：2020-5-16 */
/* 结束日期：xxxx-xx-xx */
/* 初尘 */
var Sys = null;

function studys() {}
studys.prototype = {
    Switchs: false, //系统状态：false/关闭、true/开启
    QuestionAnsser: {
        Choice: {
            Question: [],
            Ansser: [],
        },
        Judge: {
            Question: [],
            Ansser: [],
        },
        Completion: {
            Question: [],
            Ansser: [],
        }
    },
    functions: ["keydown", "divdowns"], //功能组件
    QuestionBank: ["html_tag"], //训练模块
    QuestionType: ["choice", "judge", "completion"], //QuestionType-题型:choice-选择、judge-判断、completion-填空
    funSetUp: { //设置
        funMode: function funMode() { //模式设置

        },
        funVoice: function funVoice() { //声音设置

        },
    },
    funScript: function funScript() { //加载练习内容模块js文件
    },
    funOpenClose: function funOpenClose() { //程序启动
        Sys.funScript();
        Sys.funSetUp.funMode();
        console.log(Sys.funDivdowns);
        console.log(divdownes);
        console.log(Sys.QuestionAnsser.Question);

    }
}

window.onload = InitStudySys();

function InitStudySys() {
    Sys = new studys();
    Sys.funOpenClose();
}