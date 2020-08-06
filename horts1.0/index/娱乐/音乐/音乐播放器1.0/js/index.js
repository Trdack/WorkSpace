(function Ind() {
    var Sys = null;

    function sys() {}
    sys.prototype = {
        linkas: [],
        scriptas: [],
        funas: function as() {
            for (var i = 0; i < this.sysa.length; i++) {
                console.log(this.sysa[i]);
            }
        },
    }
    Sys = new sys();
    Sys.linkas = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];
    Sys.funas();
})();

//person人
person = new Object();//新建一个对象
person.name = "mike";//为对象的name属性赋值
person.sex = "male";//为对象的sex属性赋值
person.age = 30;//为对象的age属性赋值
