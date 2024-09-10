"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Example = void 0;
exports.Logger = Logger;
exports.LogMethod = LogMethod;
exports.LogProperty = LogProperty;
// Class decorator
function Logger(constructor) {
    console.log("Logging...");
    console.log(constructor);
}
// Method decorator
function LogMethod(target, propertyName, descriptor) {
    var method = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("Method ".concat(propertyName, " called with arguments: ").concat(args.join(", ")));
        return method.apply(this, args);
    };
}
// Property decorator
function LogProperty(target, propertyKey) {
    var value = target[propertyKey];
    var getter = function () {
        console.log("Getting value of ".concat(propertyKey, ": ").concat(value));
        return value;
    };
    var setter = function (newVal) {
        console.log("Setting value of ".concat(propertyKey, " to ").concat(newVal));
        value = newVal;
    };
    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter
    });
}
// Using the decorators
var Example = /** @class */ (function () {
    function Example(name) {
        this.name = name;
    }
    Example.prototype.greet = function (message) {
        console.log("".concat(this.name, " says: ").concat(message));
    };
    __decorate([
        LogProperty
    ], Example.prototype, "name", void 0);
    __decorate([
        LogMethod
    ], Example.prototype, "greet", null);
    Example = __decorate([
        Logger
    ], Example);
    return Example;
}());
exports.Example = Example;
