var Sys = null;

function sys() {}
sys.prototype = {
    carWidth: 1000,
    carHeight: 500,
    carLRwhidth: 31,
    carLRheight: 50,
    carLRtop: [],
    carMabcs: [],
    ImgNumber: 10,
    carMap: [],
    divas: [],
    divbs: [],
    divcs: [],
    aImages: [
        ["特别推荐", "recommend", "./recommend.html", "./img/carousel/recommend.jpg"],
        ["识文断字", "etymology", "./etymology.html", "./img/carousel/etymology.jpg"],
        ["知人辨物", "character", "./character.html", "./img/carousel/character.jpg"],
        ["学类分科", "discipline", "./discipline.html", "./img/carousel/discipline.jpg"],
        ["书籍典藏", "collectionbooks", "./collectionbooks.html", "./img/carousel/collectionbooks.jpg"],
        ["思维特训", "thinkingtrain", "./thinkingtrain.html", "./img/carousel/thinkingtrain.jpg"],
        ["博学强记", "eruditememory", "./eruditememory.html", "./img/carousel/eruditememory.jpg"],
        ["悟道明理", "enlightenment", "./enlightenment.html", "./img/carousel/enlightenment.jpg"],
        ["以道会友", "friends", "./friends.html", "./img/carousel/friends.jpg"],
        ["娱乐天地", "entertainment", "./entertainment.html", "./img/carousel/entertainment.jpg"]
    ],
    /*
    funcas: function cas() {
        var dives = new Array();
        dives[0] = [
            ["carousel"],
            "div",
            ["carLeft", "carMiddle", "carRight"]
        ];
        dives[1] = [
            ["carMiddle"],
            "div",
            ["recommend", "etymology", "character", "discipline", "collectionbooks", "thinkingtrain", "eruditememory", "enlightenment", "friends", "entertainment"]
        ];
        dives[2] = [
            ["recommend", "etymology", "character", "discipline", "collectionbooks", "thinkingtrain", "eruditememory", "enlightenment", "friends", "entertainment"],
            "a",
            ["Arecommend", "Aetymology", "Acharacter", "Adiscipline", "Acollectionbooks", "Athinkingtrain", "Aeruditememory", "Aenlightenment", "Afriends", "Aentertainment"]
        ];
        dives[3] = [
            ["Arecommend", "Aetymology", "Acharacter", "Adiscipline", "Acollectionbooks", "Athinkingtrain", "Aeruditememory", "Aenlightenment", "Afriends", "Aentertainment"],
            "img",
            ["Imgrecommend ", "Imgetymology ", "Imgcharacter ", "Imgdiscipline ", "Imgcollectionbooks ", "Imgthinkingtrain ", "Imgeruditememory ", "Imgenlightenment ", "Imgfriends ", "Imgentertainment"]
        ];
        this.funcbs(dives);
    }, */
    /* 
    funcbs: function cbs(a) {
        for (var i = 0; i < a.length; i++) {
            this.divas.push([]);
            this.divbs.push([]);
            this.divcs.push([]);
            for (var j = 0; j < a[i][2].length; j++) {
                this.divbs[i][j] = a[i][2][j];
                if (a[i][0].length == 1) {
                    this.divas[i][j] = document.getElementById(a[i][0][0]);
                } else {
                    this.divas[i][j] = document.getElementById(a[i][0][j]);
                }
                a[i][2][j] = document.createElement(a[i][1]);
                this.divas[i][j].appendChild(a[i][2][j]);
                if (a[i][1] == "div") {
                    a[i][2][j].id = this.divbs[i][j];
                    a[i][2][j].className = this.divbs[i][j];
                    this.divcs[i][j] = a[i][2][j];
                } else if (a[i][1] == "a") {
                    a[i][2][j].id = this.divbs[i][j];
                    a[i][2][j].href = "./" + this.divbs[i][j] + ".html";
                    a[i][2][j].title = this.aImages[j][0];
                    //a[i][2][j].innerHTML = this.aImages[j][0];
                    this.divcs[i][j] = a[i][2][j];
                } else if (a[i][1] == "img") {
                    a[i][2][j].src = "./img/carousel/" + j + ".jpg";

                }
            }
        }
    }, */
    carMs: [],
    carNs: [],
    carMw: [],
    carMh: [],
    carMl: [],
    funas: function as() {
        this.carMs[0] = document.getElementById("carousel");
        this.carMs[1] = document.getElementById("carLeft");
        this.carMs[2] = document.getElementById("carMiddle");
        this.carMs[3] = document.getElementById("carRight");
        this.carMs[4] = document.getElementById("carMas");
        this.carMs[5] = document.getElementById("carMbs");
        this.carMs[6] = document.getElementById("carMcs");
        for (var i = 0; i < this.aImages.length; i++) {
            this.carNs[i] = '<a href="' + this.aImages[i][2] + '" title="' + this.aImages[i][0] + '"><img src="' + this.aImages[i][3] + '" title="' + this.aImages[i][0] + '" /></a>';
        }
        this.carLRtop = (this.carHeight - this.carLRheight) / 2;
        console.log(this.carNs);
        this.funbs(this.carMs[0], this.carWidth, this.carHeight);
        this.funbs(this.carMs[1], this.carLRwhidth, this.carLRheight, this.carLRtop);
        this.funbs(this.carMs[3], this.carLRwhidth, this.carLRheight, this.carLRtop);
        this.funbs(this.carMs[2], this.carWidth, this.carHeight);
        this.funbs(this.carMs[4], this.carMw[0], this.carMh[0], "0px", this.carMl[0], "red", "1");
        this.funbs(this.carMs[5], this.carMw[0], this.carMh[0], "0px", this.carMl[1], "#fff", "2");
        this.funbs(this.carMs[6], this.carMw[0], this.carMh[0], "0px", this.carMl[2], "#0f0", "0");
    },
    funbs: function bs(a, b, c, d, e, f, g) {
        a.style.width = b + "px";
        a.style.height = c + "px";
        a.style.top = d + "px";
        a.style.left = e + "px";
        a.style.background = f;
        a.style.position = "absolute";
        a.style.zIndex = g;
    },
    funcs: function cs() {
        this.carMw[0] = 618;
        this.carMh[0] = this.carHeight;
        this.carMl[0] = 0;
        this.carMl[1] = (this.carWidth - this.carMw) / 2;
        this.carMl[2] = (this.carWidth - this.carMw);
    },
}
Sys = new sys();
Sys.funcs();
Sys.funas();