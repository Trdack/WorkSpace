(function () {
    if (document.getElementById("carousel")) {
        var C = null;

        function carousels() {}
        carousels.prototype = {
            das: ["div8", "div9", "div0", "div1", "div2", "div3", "div4", "div5", "div6", "div7"],
            dbs: ["carousel", "carLeft", "carRight"],
            des: [
                [3, -200, 40, 220, "block"],
                [4, 0, 20, 260, "block"],
                [5, 200, 0, 300, "block"],
                [4, 400, 20, 260, "block"],
                [3, 600, 40, 220, "block"],
                [2, 800, 60, 180, "block"],
                [1, 1000, 60, 180, "block"],
                [0, -800, 60, 180, "block"],
                [1, -600, 60, 180, "block"],
                [2, -400, 60, 180, "block"],
            ],
            funas: function as() {
                for (var i = 0; i < this.das.length; i++) {
                    this.das[i] = document.getElementById(this.das[i]);
                    if (i < this.dbs.length) {
                        this.dbs[i] = document.getElementById(this.dbs[i]);
                    }
                }
            },
            funcar: function car(a, b) {
                a.style.zIndex = b[0];
                a.style.left = b[1] + "px";
                a.style.top = b[2] + "px";
                a.style.height = b[3] + "px";
                a.style.display = b[4];
            },
            funcrs: function crs() {
                for (var i = 0; i < C.das.length; i++) {
                    C.funcar(C.das[i], C.des[i]);
                }
            }
        }
        var C = new carousels();
        C.funas();
        C.funcrs();

        function next() {
            var first = C.das.shift();
            C.das.push(first);
            for (var i = 0; i < C.das.length; i++) {
                C.funcrs();
            }
        }

        function back() {
            var first = C.das.pop();
            C.das.unshift(first);
            for (var i = 0; i < C.das.length; i++) {
                C.funcrs();
            }
        }
        var as = setInterval(next, 1800),
            bs;

        function ds(d) {
            d.onmouseover = function ta() {
                clearInterval(as);
                clearInterval(bs);
            }
            d.onmouseout = function tb() {
                clearInterval(as);
                clearInterval(bs);
                bs = setInterval(next, 1800);
                return bs;
            }
        }
        for (var i = 0; i < C.das.length; i++) {
            ds(C.das[i]);
            if (i < C.dbs.length) {
                ds(C.dbs[i]);
            }
        }

        carRight.onclick = function as() {
            next();
        }
        carLeft.onclick = function bs() {
            back();
        }
    } else {
        console.log("轮播标签不存在");
    }
})();