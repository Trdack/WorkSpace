/* 建立网站导航目录 */
var Cat = null;

function catalogue() {}
catalogue.prototype = {
    Fils: ["index.html"],
    Fols: {
        img: {
            Fils: [],
            Fols: {
                carousel: {
                    Fils: [""],
                },
                x00: {}
            }
        },
        css: {},
        bg: {},
        js: {},
    }
}
Cat = new catalogue();
//alert("catalogue.js已经加载！");



console.log(Cat);