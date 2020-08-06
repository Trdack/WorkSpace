var Sys = null;

function sys() {}
sys.prototype = {
    carWidth: 1000,
    carHeight: 300,
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
    carMs: [],
    carNs: [],
    carMw: [],
    carMh: [],
    carMl: [],
    funcs: function cs() {
        this.carMw[0] = 618;
        this.carMh[0] = this.carHeight;
        this.carMh[1] = this.carHeight - 40;
        this.carMl[0] = 0;
        this.carMl[1] = (this.carWidth - this.carMw) / 2;
        this.carMl[2] = (this.carWidth - this.carMw);
    },
    funas: function as() {
        Sys.carMs[0] = document.getElementById("carousel");
        Sys.carMs[1] = document.getElementById("carLeft");
        Sys.carMs[2] = document.getElementById("carMiddle");
        Sys.carMs[3] = document.getElementById("carRight");
        Sys.carMs[4] = document.getElementById("carMas");
        Sys.carMs[5] = document.getElementById("carMbs");
        Sys.carMs[6] = document.getElementById("carMcs");
        for (var i = 0; i < this.aImages.length; i++) {
            this.carNs[i] = '<a href="' + this.aImages[i][2] + '" title="' + this.aImages[i][0] + '"><img src="' + this.aImages[i][3] + '" title="' + this.aImages[i][0] + '" /></a>';
        }
        console.log(this.carNs);    
        Sys.carLRtop = (this.carHeight - this.carLRheight) / 2;
        this.funbs(this.carMs[0], this.carWidth, this.carHeight);
        this.funbs(this.carMs[1], this.carLRwhidth, this.carLRheight, this.carLRtop);
        this.funbs(this.carMs[3], this.carLRwhidth, this.carLRheight, this.carLRtop);
        this.funbs(this.carMs[2], this.carWidth, this.carHeight);
        this.funbs(this.carMs[4], this.carMw[0], this.carMh[1], "20", this.carMl[0], "transparent", "1", this.carNs[0]);
        this.funbs(this.carMs[5], this.carMw[0], this.carMh[0], "0", this.carMl[1], "transparent", "2", this.carNs[1]);
        this.funbs(this.carMs[6], this.carMw[0], this.carMh[1], "20", this.carMl[2], "transparent", "0", this.carNs[2]);
        this.carMs[4].innerHTML = this.carNs[0];
        this.carMs[5].innerHTML = this.carNs[1];
        this.carMs[6].innerHTML = this.carNs[2];
        console.log(this.carNs);
    },
    funbs: function bs(a, b, c, d, e, f, g) {
        a.style.width = b + "px";
        a.style.height = c + "px";
        a.style.top = d + "px";
        a.style.left = e + "px";
        a.style.background = f;
        a.style.position = "absolute";
        a.style.zIndex = g;
        this.carMs[0].style.position = "none";
        console.log(a);
    },
}
Sys = new sys();
Sys.funcs();
Sys.funas();