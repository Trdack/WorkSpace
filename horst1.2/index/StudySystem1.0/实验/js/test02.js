console.log($("index"));

console.log(study);
console.log(Sys);
study.c = "kaix";
Sys.c = {
    z: $("index"),
};
console.log(study.c);
console.log(Sys.c);
console.log(Sys);

Sys.b = function styles() {
    Sys.c.z.style.color = "red";
    Sys.c.z.style.fontSize = "100px";
}

Sys.b();

Sys.styles = {}

console.log(Sys);