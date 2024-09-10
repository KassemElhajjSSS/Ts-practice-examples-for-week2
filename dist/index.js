"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var classes_1 = require("./classes");
var functions_1 = require("./functions");
var interfaces_1 = require("./interfaces");
var decorators_1 = require("./decorators");
var user = new classes_1.client("kassem", "kassemElhajj@gmail.com", new Date("2003-6-24"), 9, false);
console.log((0, interfaces_1.ShowUser)(user));
var adminUser = new classes_1.Admin("kassem elhajj", "kassem123321@gmail.com", new Date("2003-6-24"), 1, "admin");
console.log(adminUser.displayUser());
console.log((0, functions_1.greaterThan)(15, 20));
console.log((0, functions_1.type)(4.5));
console.log((0, functions_1.mult)(4, 5));
console.log((0, functions_1.concatenateStrings)("hi", "everyone,", " good morning"));
var example = new decorators_1.Example("Kassem");
example.name = "John"; // Triggers @LogProperty
console.log(example.name); // Triggers the getter (logs the value)
example.greet("Hello!"); // Triggers @LogMethod (logs the method call)
