"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mult = void 0;
exports.greaterThan = greaterThan;
exports.type = type;
exports.concatenateStrings = concatenateStrings;
function greaterThan(a, b) {
    return a > b;
}
function type(a) {
    return a;
}
var mult = function (a, b) { return a * b; };
exports.mult = mult;
function concatenateStrings(a) {
    var others = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        others[_i - 1] = arguments[_i];
    }
    return __spreadArray([a], others, true).join(' ');
}
