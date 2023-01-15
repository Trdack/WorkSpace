/* 目前使用版本为：carousel1.5.js */
/* 作者：初尘 */
/* 日期：2020-5-3 */
/* 通过carousel.js实现轮播效果 */

(function carousels() { //轮播代码
    if (document.getElementById("carousel")) {
        var C = null;

        function carousels() {}
        carousels.prototype = {
            das: ["carousel", "carLeft", "carRight"],
            dbs: ["div8", "div9", "div0", "div1", "div2", "div3", "div4", "div5", "div6", "div7"],
            Sizes: [],
            carLRSizes: [30, 60],
            zIndexs: [3, 4, 5, 4, 3, 2, 1, 0, 1, 2],
            Lefts: [],
            Tops: [],
            Widths: [],
            Heights: [],
            Displays: "block",
            des: [],
            funas: function as() { //循环生成ID接口
                for (var i = 0; i < C.dbs.length; i++) {
                    C.dbs[i] = document.getElementById(C.dbs[i]);
                    if (i < C.das.length) {
                        C.das[i] = document.getElementById(C.das[i]);
                    }
                }
            },
            funbs: function bs() {

            },
            funcrs: function crs() {
                function car(a, b) {
                    a.style.zIndex = b[0];
                    a.style.width = b[5] + "px";
                    a.style.left = b[1] + "px";
                    a.style.top = b[2] + "px";
                    a.style.height = b[3] + "px";
                    a.style.display = b[4];
                }
                for (var i = 0; i < this.des[0].length; i++) {
                    car(C.dbs[i], C.des[i]);
                }
            },
            funNext: function next() {
                var first = C.dbs.shift();
                C.dbs.push(first);
                for (var i = 0; i < C.dbs.length; i++) {
                    C.funcrs();
                }
            },
            funBack: function back() {
                var first = C.dbs.pop();
                C.dbs.unshift(first);
                for (var i = 0; i < C.dbs.length; i++) {
                    C.funcrs();
                }
            },
            funAs: function as() {
                function ds(d) {
                    d.onmouseover = function ta() {
                        clearInterval(as);
                        clearInterval(bs);
                    }
                    d.onmouseout = function tb() {
                        clearInterval(as);
                        clearInterval(bs);
                        C.funAs();
                    }
                }
                var as = setInterval(C.funNext, 1800);
                var bs;
                for (var i = 0; i < this.dbs.length; i++) {
                    ds(C.dbs[i]);
                    if (i < C.das.length) {
                        ds(C.das[i]);
                    }
                }
            },
            funCarLR: function () {
                carLeft.onclick = function bs() {
                    C.funBack();
                };
                carRight.onclick = function as() {
                    C.funNext();
                }
            },
            funSC: function SizeChange() {
                // 定义事件侦听器函数
                function cades() {
                    // 获取窗口的宽度和高度，不包括滚动条
                    var w = document.documentElement.clientWidth;
                    var h = document.documentElement.clientHeight;
                    if (w <= 1000) {
                        C.Sizes[0] = w;
                    } else {
                        C.Sizes[0] = 1000;
                    }
                    C.Sizes[1] = C.Sizes[0] * 3 / 10;
                    carousel.style.width = C.Sizes[0] + "px";
                    carousel.style.height = C.Sizes[1] + "px";
                    C.Heights[0] = C.Sizes[1] * 11 / 15;
                    C.Heights[1] = C.Sizes[1] * 13 / 15;
                    C.Heights[2] = C.Sizes[1] * 15 / 15;
                    C.Heights[3] = C.Sizes[1] * 13 / 15;
                    C.Heights[4] = C.Sizes[1] * 11 / 15;
                    C.Heights[5] = C.Sizes[1] * 9 / 15;
                    C.Heights[6] = C.Sizes[1] * 9 / 15;
                    C.Heights[7] = C.Sizes[1] * 9 / 15;
                    C.Heights[8] = C.Sizes[1] * 9 / 15;
                    C.Heights[9] = C.Sizes[1] * 9 / 15;
                    var ls = C.Sizes[0] * 20 / 100;
                    var las = -(C.Sizes[0] * 20 / 100);
                    for (var i = 0; i < C.dbs.length; i++) {
                        C.des.push([]);
                        C.Widths[i] = C.Sizes[0] * 60 / 100;
                        C.Tops[i] = (C.Sizes[1] - C.Heights[i]) / 2;
                        C.Lefts[i] = las;
                        if (las < 1000) {
                            las += ls;
                        } else {
                            las -= (9 * ls);
                        }
                        C.des[i][0] = C.zIndexs[i];
                        C.des[i][1] = C.Lefts[i];
                        C.des[i][2] = C.Tops[i];
                        C.des[i][3] = C.Heights[i];
                        C.des[i][4] = C.Displays;
                        C.des[i][5] = C.Widths[i];
                    }
                    //console.log(C.des);
                }
                cades();
                // 将事件侦听器函数附加到窗口的resize事件
                window.addEventListener("resize", cades);
            },
            funCars: function Cars() {
                C.funas();
                C.funSC();
                C.funAs();
                C.funCarLR();
            },
        }
        window.onload = Stars();

        function Stars() {
            C = new carousels();
            C.funCars();
        }
    } else {
        console.log("轮播标签不存在");
    }
})();