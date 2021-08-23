"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Asus_1 = __importDefault(require("./Asus"));
var asus = new Asus_1.default('Asus', 'Zenbook', true, false);
console.log(asus.name);
console.log(asus.type);
console.log(asus.withNumeric);
console.log(asus.withTouchButton);
asus.a();
asus.b();
