var heads = document.head;
var linkas = new Array();
var scriptas = new Array();
var locas = "./";
linkas = {
    Tag: "link",
    Name: ["index", "carousel", "gotop"],
    Href: [],
    Rel: "stylesheet",
    Type: "text/css",
    CreateHref: function () {
        for (var a = 0; a < this.Name.length; a++) {
            this.Href[a] = locas + "css/" + this.Name[a] + ".css";
        }
    },
};
linkas.CreateHref();
scriptas = {
    Tag: "script",
    Name: ["top", "location", "carousel", "gotop", "bottom"],
    Src: [],
    Type: "text/javascript",
    Defer: "defer",
    CreateSrc: function () {
        for (var a = 0; a < this.Name.length; a++) {
            this.Src[a] = locas + "js/" + this.Name[a] + ".js";
        }
    },
};
scriptas.CreateSrc();
(function newLes(tag, tbg) {
    for (var a = 0; a < tbg.Name.length; a++) {
        tbg.Name[a] = document.createElement(tbg.Tag);
        heads.appendChild(tbg.Name[a]);
        tbg.Name[a].type = tbg.Type;
        tbg.Name[a].defer = tbg.Defer;
        tbg.Name[a].src = tbg.Src[a];
    }
    for (var a = 0; a < tag.Name.length; a++) {
        tag.Name[a] = document.createElement(tag.Tag);
        heads.appendChild(tag.Name[a]);
        tag.Name[a].rel = tag.Rel;
        tag.Name[a].type = tag.Type;
        tag.Name[a].href = tag.Href[a];
    }
})(linkas, scriptas);