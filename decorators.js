// "use strict";
// var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
//     var useValue = arguments.length > 2;
//     for (var i = 0; i < initializers.length; i++) {
//         value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
//     }
//     return useValue ? value : void 0;
// };
// var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
//     function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
//     var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
//     var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
//     var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
//     var _, done = false;
//     for (var i = decorators.length - 1; i >= 0; i--) {
//         var context = {};
//         for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
//         for (var p in contextIn.access) context.access[p] = contextIn.access[p];
//         context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
//         var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
//         if (kind === "accessor") {
//             if (result === void 0) continue;
//             if (result === null || typeof result !== "object") throw new TypeError("Object expected");
//             if (_ = accept(result.get)) descriptor.get = _;
//             if (_ = accept(result.set)) descriptor.set = _;
//             if (_ = accept(result.init)) initializers.unshift(_);
//         }
//         else if (_ = accept(result)) {
//             if (kind === "field") initializers.unshift(_);
//             else descriptor[key] = _;
//         }
//     }
//     if (target) Object.defineProperty(target, contextIn.name, descriptor);
//     done = true;
// };
// var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
//     if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
//     return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
// };
// Object.defineProperty(exports, "__esModule", { value: true });
// exports.Example = void 0;
// exports.Logger = Logger;
// exports.LogMethod = LogMethod;
// exports.LogProperty = LogProperty;
// // Class decorator
// function Logger(constructor) {
//     console.log("Logging...");
//     console.log(constructor);
// }
// // Method decorator
// function LogMethod(target, propertyName, descriptor) {
//     var method = descriptor.value;
//     descriptor.value = function () {
//         var args = [];
//         for (var _i = 0; _i < arguments.length; _i++) {
//             args[_i] = arguments[_i];
//         }
//         console.log("Method ".concat(propertyName, " called with arguments: ").concat(args.join(", ")));
//         return method.apply(this, args);
//     };
// }
// // Property decorator
// function LogProperty(target, propertyKey) {
//     var value = target[propertyKey];
//     var getter = function () {
//         console.log("Getting value of ".concat(propertyKey, ": ").concat(value));
//         return value;
//     };
//     var setter = function (newVal) {
//         console.log("Setting value of ".concat(propertyKey, " to ").concat(newVal));
//         value = newVal;
//     };
//     Object.defineProperty(target, propertyKey, {
//         get: getter,
//         set: setter
//     });
// }
// // Using the decorators
// var Example = function () {
//     var _classDecorators = [Logger];
//     var _classDescriptor;
//     var _classExtraInitializers = [];
//     var _classThis;
//     var _instanceExtraInitializers = [];
//     var _name_decorators;
//     var _name_initializers = [];
//     var _name_extraInitializers = [];
//     var _greet_decorators;
//     var Example = _classThis = /** @class */ (function () {
//         function Example_1(name) {
//             this.name = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _name_initializers, void 0));
//             __runInitializers(this, _name_extraInitializers);
//             this.name = name;
//         }
//         Example_1.prototype.greet = function (message) {
//             console.log("".concat(this.name, " says: ").concat(message));
//         };
//         return Example_1;
//     }());
//     __setFunctionName(_classThis, "Example");
//     (function () {
//         var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
//         _name_decorators = [LogProperty];
//         _greet_decorators = [LogMethod];
//         __esDecorate(_classThis, null, _greet_decorators, { kind: "method", name: "greet", static: false, private: false, access: { has: function (obj) { return "greet" in obj; }, get: function (obj) { return obj.greet; } }, metadata: _metadata }, null, _instanceExtraInitializers);
//         __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
//         __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
//         Example = _classThis = _classDescriptor.value;
//         if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
//         __runInitializers(_classThis, _classExtraInitializers);
//     })();
//     return Example = _classThis;
// }();
// exports.Example = Example;
