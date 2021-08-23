"use strict";
// numeric enums
var Incremental;
(function (Incremental) {
    Incremental[Incremental["ONE"] = 0] = "ONE";
    Incremental[Incremental["TWO"] = 2] = "TWO";
    Incremental[Incremental["THREE"] = 3] = "THREE";
    Incremental[Incremental["FOUR"] = 4] = "FOUR";
    Incremental[Incremental["FIVE"] = 5] = "FIVE";
})(Incremental || (Incremental = {}));
console.log(Incremental.ONE);
console.log(Incremental.TWO);
console.log(Incremental.THREE);
// sting enums
var Month;
(function (Month) {
    Month["JAN"] = "Januari";
    Month["FEB"] = "Februari";
    Month["MAR"] = "MARET";
    Month[Month["APR"] = 122] = "APR";
})(Month || (Month = {}));
console.log(Month.JAN);
console.log(Month.APR);
