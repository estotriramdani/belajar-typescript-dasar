"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Keyboard_1 = __importDefault(require("./Keyboard"));
var BaseLaptop = /** @class */ (function () {
    function BaseLaptop(name, type, withNumeric, withTouchButton) {
        this.name = name;
        this.type = type;
        this.withNumeric = withNumeric;
        this.withTouchButton = withTouchButton;
    }
    BaseLaptop.prototype.a = function () {
        return Keyboard_1.default.a();
    };
    BaseLaptop.prototype.b = function () {
        return Keyboard_1.default.b();
    };
    return BaseLaptop;
}());
exports.default = BaseLaptop;
