"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var UserClass = /** @class */ (function () {
    function UserClass(name, age) {
        var _this = this;
        this.age = age;
        this.getName = function () {
            return _this.name;
        };
        this.name = name;
    }
    UserClass.prototype.setName = function (newName) {
        this.name = newName;
    };
    return UserClass;
}());
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(phone, name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.read = true;
        _this.write = true;
        _this._email = '';
        _this.phone = phone;
        return _this;
    }
    Admin.sayHi = function () {
        return 'Hai!';
    };
    Admin.prototype.getAccessRole = function () {
        return {
            read: this.read,
            write: this.write,
        };
    };
    Object.defineProperty(Admin.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (newEmail) {
            this._email = newEmail;
        },
        enumerable: false,
        configurable: true
    });
    Admin.roleName = 'Admin';
    return Admin;
}(UserClass));
var admin = new Admin('0896572885153', 'Esto', 21);
admin.email = 'estolagi@gmail.com';
console.log(admin.email);
console.log(Admin.roleName);
console.log(Admin.sayHi());
