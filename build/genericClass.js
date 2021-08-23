"use strict";
var List = /** @class */ (function () {
    function List() {
        var elements = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            elements[_i] = arguments[_i];
        }
        this.data = elements;
    }
    List.prototype.add = function (element) {
        this.data.push(element);
    };
    List.prototype.addMultiple = function () {
        var _a;
        var elements = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            elements[_i] = arguments[_i];
        }
        (_a = this.data).push.apply(_a, elements);
    };
    List.prototype.getAll = function () {
        return this.data;
    };
    return List;
}());
var numbers = new List(1, 2, 3, 4, 5);
numbers.add(2);
numbers.addMultiple(1, 1, 1);
console.log(numbers.getAll());
var random = new List(1, 'dua', 3);
random.add(4);
random.addMultiple('5');
console.log(random.getAll());
