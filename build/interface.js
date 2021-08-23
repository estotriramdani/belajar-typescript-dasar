"use strict";
var Asus = /** @class */ (function () {
    function Asus() {
        this.name = 'Asus TUF Gaming';
        this.isGaming = true;
    }
    Asus.prototype.on = function () {
        console.log('menyalakan');
    };
    Asus.prototype.off = function () {
        console.log('mematikan');
    };
    return Asus;
}());
var Macbook = /** @class */ (function () {
    function Macbook() {
        this.name = 'Macbook Pro Retina 2017';
    }
    Macbook.prototype.on = function () {
        console.log('menyalakan macbook');
    };
    Macbook.prototype.off = function () {
        console.log('mematikan macbook');
    };
    return Macbook;
}());
var asus = new Asus();
console.log(asus.isGaming);
asus.on();
