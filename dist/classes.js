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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admin = exports.client = void 0;
var client = /** @class */ (function () {
    function client(name, email, birthDate, id, isBanned) {
        if (isBanned === void 0) { isBanned = false; }
        this.name = name;
        this.email = email;
        this.birthDate = birthDate;
        this.id = id;
        this.isBanned = isBanned;
    }
    client.prototype.displayUser = function () {
        return "name: ".concat(this.name, ", email: ").concat(this.email, ", birthDate: ").concat(this.birthDate);
    };
    return client;
}());
exports.client = client;
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(name, email, birthDate, id, position) {
        var _this = _super.call(this, name, email, birthDate, id) || this;
        _this.name = name;
        _this.email = email;
        _this.birthDate = birthDate;
        _this.id = id;
        _this.position = position;
        return _this;
    }
    Admin.prototype.displayUser = function () {
        return "Admin name: ".concat(this.name, ", Position: ").concat(this.position);
    };
    return Admin;
}(client));
exports.Admin = Admin;
